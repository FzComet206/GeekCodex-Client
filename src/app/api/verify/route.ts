import axios, { AxiosResponse } from "axios";
import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    const body = await req.json();
    const { token } = body;

    console.log("next server side verify")

    try {
        const _response: AxiosResponse = await axios.post(
        process.env.API_URL + "/auth/verify",
        { token }, 
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true } 
        );

        const cookie = _response.headers['set-cookie'];
        if (cookie){
            const data = {
                username: _response.data.username,
            }
            const cookieHeader = Array.isArray(cookie) ? cookie.join('') : cookie;
            return new Response(JSON.stringify(data), {
                status: 200,
                headers: { 'Set-Cookie': `${cookieHeader}` },
            })
        }

    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Handle Axios-specific errors
            if (error.response?.status === 404) {
                return new Response('User not found, please register', {
                    status: 404,
                });
            } else {
            if (error.response?.status === 401) {
                return new Response('Invalid email or password', {
                    status: 401,
                });
            }
            throw new Error('Network Error. Please try again later.');
            }
        } else {
            // Handle other types of errors
            console.error('Unexpected Error:', error); 
            throw new Error('An unexpected error occurred.');
        }
    }
}
