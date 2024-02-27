// lib/api.ts
import axios, { AxiosResponse, AxiosError } from 'axios';

interface RegisterResponse {
  userId: number;
  userName: string;
  token: string; 
}

const API_BASE_URL = process.env.NEXT_PULIC_SERVER_API;

const register = async (email: string, password: string): Promise<RegisterResponse> => {
  console.log("Registering")
  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post(
      `${API_BASE_URL}/register`,
      { email, password }, 
      { headers: { 'Content-Type': 'application/json' } } 
    );

    return response.data; 
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      if (error.response) {
        console.error('Error Response:', error.response.data, error.response.status);
        throw new Error('Registration failed. Please check your credentials.');
      } else {
        console.error('Network Error:', error.message);
        throw new Error('Network Error. Please try again later.');
      }
    } else {
      // Handle other types of errors
      console.error('Unexpected Error:', error); 
      throw new Error('An unexpected error occurred.');
    }
  }
};

export { register };