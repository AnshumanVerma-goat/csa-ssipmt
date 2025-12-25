import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Events API
export const eventsAPI = {
  getAll: (params?: { category?: string; status?: string }) => 
    api.get('/events', { params }),
  getById: (id: number) => 
    api.get(`/events/${id}`),
  create: (data: any) => 
    api.post('/events', data),
};

// Clubs API
export const clubsAPI = {
  getAll: () => 
    api.get('/clubs'),
  getById: (id: number) => 
    api.get(`/clubs/${id}`),
};

// Certificates API
export const certificatesAPI = {
  getAll: (params?: { student_name?: string }) => 
    api.get('/certificates', { params }),
  getById: (id: number) => 
    api.get(`/certificates/${id}`),
};

// Gallery API
export const galleryAPI = {
  getAll: (params?: { category?: string }) => 
    api.get('/gallery', { params }),
  getById: (id: number) => 
    api.get(`/gallery/${id}`),
};

// Notices API
export const noticesAPI = {
  getAll: (params?: { priority?: string; category?: string }) => 
    api.get('/notices', { params }),
  getById: (id: number) => 
    api.get(`/notices/${id}`),
};

// Faculty API
export const facultyAPI = {
  getAll: () => 
    api.get('/faculty'),
  getById: (id: number) => 
    api.get(`/faculty/${id}`),
};

// Registrations API
export const registrationsAPI = {
  create: (data: any) => 
    api.post('/registrations', data),
  getAll: (params?: { event_id?: number }) => 
    api.get('/registrations', { params }),
};

// Contact API
export const contactAPI = {
  submit: (data: any) => 
    api.post('/contact', data),
};

// Stats API
export const statsAPI = {
  get: () => 
    api.get('/stats'),
};

export default api;
