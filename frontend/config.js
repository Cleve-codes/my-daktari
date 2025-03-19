// export const BASE_URL = `https://my-daktari.onrender.com
// export const BASE_URL = `http://localhost:8000`
export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `https://my-daktari.onrender.com`
    : `http://localhost:8000`;

export const token = localStorage.getItem('token')

