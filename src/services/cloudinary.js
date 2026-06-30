const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const isCloudinaryConfigured = Boolean(cloudName && uploadPreset);

export async function uploadImage(file, folder = 'lapakly') {
  if (!isCloudinaryConfigured) {
    throw new Error('Cloudinary belum dikonfigurasi.');
  }

  if (!file?.type?.startsWith('image/')) {
    throw new Error('File harus berupa gambar.');
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Ukuran gambar maksimal 5MB.');
  }

  const form = new FormData();
  form.append('file', file);
  form.append('upload_preset', uploadPreset);
  form.append('folder', folder);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: 'POST',
    body: form
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error?.message || 'Upload gambar gagal.');
  }

  return {
    url: data.secure_url,
    publicId: data.public_id,
    width: data.width,
    height: data.height
  };
}
