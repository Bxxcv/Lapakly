import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { firebaseAuth, firestoreApi, isFirebaseConfigured } from '../services/firebase.js';

const AuthContext = createContext(null);

const demoUser = {
  uid: 'demo-seller',
  email: 'demo@lapakly.local',
  displayName: 'Seller Demo'
};

const demoProfile = {
  uid: 'demo-seller',
  name: 'Seller Demo',
  email: 'demo@lapakly.local',
  role: 'seller',
  plan: 'free',
  status: 'active'
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      const saved = window.localStorage.getItem('lapakly_demo_user');
      if (saved) {
        setUser(demoUser);
        setProfile(demoProfile);
      }
      setLoading(false);
      return undefined;
    }

    return firebaseAuth.onChange(async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const nextProfile = await firestoreApi.getUserProfile(currentUser.uid);
        setProfile(nextProfile);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
  }, []);

  const value = useMemo(() => ({
    user,
    profile,
    loading,
    isDemoMode: !isFirebaseConfigured,
    async login(email, password) {
      if (!isFirebaseConfigured) {
        window.localStorage.setItem('lapakly_demo_user', email || demoUser.email);
        setUser({ ...demoUser, email: email || demoUser.email });
        setProfile({ ...demoProfile, email: email || demoUser.email });
        return;
      }
      await firebaseAuth.login(email, password);
    },
    async register(payload) {
      if (!isFirebaseConfigured) {
        window.localStorage.setItem('lapakly_demo_user', payload.email);
        setUser({ ...demoUser, email: payload.email, displayName: payload.name });
        setProfile({ ...demoProfile, email: payload.email, name: payload.name });
        return;
      }
      await firebaseAuth.register(payload);
    },
    async resetPassword(email) {
      if (!isFirebaseConfigured) return;
      await firebaseAuth.resetPassword(email);
    },
    async logout() {
      if (!isFirebaseConfigured) {
        window.localStorage.removeItem('lapakly_demo_user');
        setUser(null);
        setProfile(null);
        return;
      }
      await firebaseAuth.logout();
    }
  }), [user, profile, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth harus dipakai di dalam AuthProvider');
  return ctx;
}
