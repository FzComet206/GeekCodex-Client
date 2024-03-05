import axios, { AxiosResponse, AxiosError } from 'axios';

const logout = async () => {

    console.log("logging out");
    
    try {
        // second parameter is empty string because the backend does not require any data to be sent
        const resposne = await axios.post(
            process.env.API_URL + "/auth/logout", "", { withCredentials: true}
        );
        return resposne.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
            if (error.response?.status === 400) {
                throw new Error('Network Error. Please try again later.');
            } else {
            // Handle other types of errors
            console.error('Unexpected axios error:', error); 
            throw new Error('An unexpected error occurred during logout.');
            }
        } else {
            throw new Error('unexpected non axios error.');
        }
    };
}

export { logout };