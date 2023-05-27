import axios from 'axios';
const API_BASE_URL = 'http://192.168.94.48:8001'; //for testing
// const API_BASE_URL = 'http://localhost:8001';

export const getOrganization = () => {
  return axios.get(`${API_BASE_URL}/organisations/get/1`);
};

export const addUser = (userData) => {
  return axios.post(`${API_BASE_URL}/users/add`, userData);
};

export const getProject = (organisationId) => {
  return axios.get(`${API_BASE_URL}/projects/get/organisation/${organisationId}`);
};

export const getAgents = (projectId) => {
  return axios.get(`${API_BASE_URL}/agents/get/project/${projectId}`);
};

export const getAgentDetails = (agentId) => {
  return axios.get(`${API_BASE_URL}/agents/get/details/${agentId}`);
};

export const getAgentExecutions = (agentId) => {
  return axios.get(`${API_BASE_URL}/agents/get/executions/${agentId}`);
};

export const createAgent = (agentData) => {
  return axios.post(`${API_BASE_URL}/agents/create`, agentData);
};