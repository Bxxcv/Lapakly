import { useState } from 'react';
import { ImagePlus, Loader2 } from 'lucide-react';
import { isCloudinaryConfigured, uploadImage } from '../services/cloudinary.js';

export function ImageUploader({ folder = 'lapakly/products', onUploaded }) {
  const [status, setStatus] = useState('');
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setStatus('');

    if (!isCloudinaryConfigured) {
      setStatus('Cloudinary belum aktif. Isi env dulu.');
      return;
    }

    setLoading(true);
    try {
      const result = await uploadImage(file, folder);
      onUploaded?.(result);
      setStatus('Gambar berhasil diupload.');
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <label className="image-uploader">
      <input type="file" accept="image/*" onChange={handleChange} />
      <span className="image-uploader__icon">
        {loading ? <Loader2 size={20} className="spin" /> : <ImagePlus size={20} />}
      </span>
      <span>
        <strong>Upload gambar</strong>
        <small>{status || 'Cloudinary untuk produk, logo, QRIS, dan bukti bayar.'}</small>
      </span>
      {preview && <img src={preview} alt="" />}
    </label>
  );
}
