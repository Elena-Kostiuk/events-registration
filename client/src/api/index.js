import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getAllEvents = async () => await httpClient.get('/events');

export const addParticipant = async (data, eventId) => await httpClient.post(`/visitors/${eventId}`, data);

export const getParticipants = async eventId => await httpClient.get(`/visitors/${eventId}`);
