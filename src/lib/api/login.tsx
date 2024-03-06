import axios, { AxiosResponse } from 'axios';

export interface RegisterResponse {
  username: string;
}

const login = async (email: string, password: string): Promise<RegisterResponse> => {

  console.log("start login call");

  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post(
      process.env.API_URL + "/auth/login",
      { email, password }, 
      { headers: { 'Content-Type': 'application/json' }, withCredentials: true} 
    );

    return response.data; 
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      if (error.response?.status === 404) {
        throw new Error('User not found, please register');
      } else {
        if (error.response?.status === 401) {
          throw new Error('Invalid email or password');
        }
        throw new Error('Network Error. Please try again later.');
      }
    } else {
      // Handle other types of errors
      console.error('Unexpected Error:', error); 
      throw new Error('An unexpected error occurred.');
    }
  }
};

export { login };