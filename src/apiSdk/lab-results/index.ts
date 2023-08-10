import axios from 'axios';
import queryString from 'query-string';
import { LabResultInterface, LabResultGetQueryInterface } from 'interfaces/lab-result';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLabResults = async (
  query?: LabResultGetQueryInterface,
): Promise<PaginatedInterface<LabResultInterface>> => {
  const response = await axios.get('/api/lab-results', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLabResult = async (labResult: LabResultInterface) => {
  const response = await axios.post('/api/lab-results', labResult);
  return response.data;
};

export const updateLabResultById = async (id: string, labResult: LabResultInterface) => {
  const response = await axios.put(`/api/lab-results/${id}`, labResult);
  return response.data;
};

export const getLabResultById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/lab-results/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLabResultById = async (id: string) => {
  const response = await axios.delete(`/api/lab-results/${id}`);
  return response.data;
};
