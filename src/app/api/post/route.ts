import axios, { AxiosResponse } from "axios";
import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    const body = await req.json();
    const {email, password} = body;

    console.log("next server side login")

    try {
        const _response: AxiosResponse = await axios.post(
        process.env.API_URL + "/auth/login",
        { email, password }, 
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true} 
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

        return new Response('Something went wrong', {
            status: 400,
        })

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
}
