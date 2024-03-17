import axios from 'axios';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {

    console.log("next server side logout");

    try {
        // request/response prpagation
        const sessionCookie = req.headers.get('cookie')
        const _response = await axios.post(
            process.env.API_URL + "/auth/logout", 
            "",
            { 
                headers: {
                    'Cookie': sessionCookie || ''
                },
                withCredentials: true
            }
        );

        const cookie = _response.headers['set-cookie'];
        if (cookie) {
            const cookieHeader = Array.isArray(cookie) ? cookie.join('') : cookie;
            return new Response('Logged out', {
                status: 200,
                headers: { 'Set-Cookie': `${cookieHeader}` },
            });
        }

        return new Response('Already Logged out', {
            status: 400,
        });

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
