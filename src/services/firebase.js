import { initializeApp } from 'firebase/app';
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean);

let app = null;
let auth = null;
let db = null;
let storage = null;

if (isFirebaseConfigured) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  setPersistence(auth, browserLocalPersistence);
}

export { app, auth, db, storage };

export const firebaseAuth = {
  onChange(callback) {
    if (!auth) return () => callback(null);
    return onAuthStateChanged(auth, callback);
  },
  async login(email, password) {
    if (!auth) throw new Error('Firebase belum dikonfigurasi.');
    return signInWithEmailAndPassword(auth, email, password);
  },
  async register({ name, email, password }) {
    if (!auth || !db) throw new Error('Firebase belum dikonfigurasi.');
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(credential.user, { displayName: name });
    await setDoc(doc(db, 'users', credential.user.uid), {
      uid: credential.user.uid,
      name,
      email,
      role: 'seller',
      plan: 'free',
      status: 'active',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return credential;
  },
  async resetPassword(email) {
    if (!auth) throw new Error('Firebase belum dikonfigurasi.');
    return sendPasswordResetEmail(auth, email);
  },
  async logout() {
    if (!auth) return;
    return signOut(auth);
  }
};

export const firestoreApi = {
  async getUserProfile(uid) {
    const snap = await getDoc(doc(db, 'users', uid));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  },
  async upsertStore(uid, payload) {
    const ref = doc(db, 'stores', uid);
    await setDoc(ref, {
      ...payload,
      ownerId: uid,
      updatedAt: serverTimestamp()
    }, { merge: true });
  },
  async getStoreBySlug(slug) {
    const q = query(collection(db, 'stores'), where('slug', '==', slug), where('status', '==', 'published'), limit(1));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const item = snap.docs[0];
    return { id: item.id, ...item.data() };
  },
  async getSellerProducts(uid) {
    const q = query(collection(db, 'products'), where('ownerId', '==', uid), orderBy('createdAt', 'desc'), limit(50));
    const snap = await getDocs(q);
    return snap.docs.map((item) => ({ id: item.id, ...item.data() }));
  },
  async getPublicProducts(storeId) {
    const q = query(
      collection(db, 'products'),
      where('storeId', '==', storeId),
      where('status', '==', 'active'),
      orderBy('createdAt', 'desc'),
      limit(50)
    );
    const snap = await getDocs(q);
    return snap.docs.map((item) => ({ id: item.id, ...item.data() }));
  },
  async createProduct(uid, payload) {
    return addDoc(collection(db, 'products'), {
      ...payload,
      ownerId: uid,
      status: 'active',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
  },
  async updateProduct(productId, payload) {
    return updateDoc(doc(db, 'products', productId), {
      ...payload,
      updatedAt: serverTimestamp()
    });
  },
  async getSellerOrders(uid) {
    const q = query(collection(db, 'orders'), where('sellerId', '==', uid), orderBy('createdAt', 'desc'), limit(60));
    const snap = await getDocs(q);
    return snap.docs.map((item) => ({ id: item.id, ...item.data() }));
  },
  async createOrder(payload) {
    return addDoc(collection(db, 'orders'), {
      ...payload,
      status: 'waiting_payment_review',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
  }
};
