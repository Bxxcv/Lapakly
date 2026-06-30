export const demoStore = {
  id: 'demo-store',
  ownerId: 'demo-seller',
  name: 'Kopi Sore Bantul',
  slug: 'kopi-sore',
  headline: 'Kopi literan dan snack rumahan, order cepat lewat satu halaman.',
  whatsapp: '6281234567890',
  status: 'published',
  theme: 'blue',
  type: 'food',
  score: 82
};

export const demoProducts = [
  {
    id: 'americano-liter',
    storeId: 'demo-store',
    ownerId: 'demo-seller',
    name: 'Americano 1 Liter',
    price: 38000,
    category: 'Minuman',
    description: 'Kopi dingin siap minum, cocok buat stok harian.',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'latte-bottle',
    storeId: 'demo-store',
    ownerId: 'demo-seller',
    name: 'Latte Bottle',
    price: 18000,
    category: 'Minuman',
    description: 'Latte creamy dalam botol, dibuat saat order masuk.',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'brownies-box',
    storeId: 'demo-store',
    ownerId: 'demo-seller',
    name: 'Brownies Box',
    price: 45000,
    category: 'Snack',
    description: 'Brownies fudgy untuk hampers kecil atau teman ngopi.',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80'
  }
];

export const demoOrders = [
  {
    id: 'ORD-2401',
    buyerName: 'Rani',
    buyerPhone: '628812345678',
    productName: 'Americano 1 Liter',
    quantity: 2,
    total: 76000,
    status: 'waiting_payment_review',
    createdAtText: 'Baru masuk'
  },
  {
    id: 'ORD-2398',
    buyerName: 'Bagas',
    buyerPhone: '628956789123',
    productName: 'Brownies Box',
    quantity: 1,
    total: 45000,
    status: 'processing',
    createdAtText: '12 menit lalu'
  },
  {
    id: 'ORD-2384',
    buyerName: 'Dina',
    buyerPhone: '628773221100',
    productName: 'Latte Bottle',
    quantity: 3,
    total: 54000,
    status: 'done',
    createdAtText: 'Kemarin'
  }
];

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value || 0);
};
