// lib/api.ts
import axios, { AxiosResponse } from 'axios';

export interface RegisterResponse {
  userid: number;
  username: string;
  token: string; 
}

const register = async (name: string, email: string, password: string): Promise<RegisterResponse> => {

  console.log("start register call");

  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post(
      process.env.API_URL + "/auth/register",
      { name, email, password }, 
      { headers: { 'Content-Type': 'application/json' }, withCredentials: true} 
    );

    console.log(response.data)

    return response.data; 
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      if (error.response?.status === 400) {
        throw new Error('User already exists. Please login.');
      } else {
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