import axios, { AxiosResponse } from "axios";
import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    const body = await req.json();
    const {name, email, password} = body;
    console.log(name, email, password)

    console.log("next server side register")

    try {
        const _response: AxiosResponse = await axios.post(
        process.env.API_URL + "/auth/register",
        { name, email, password }, 
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true} 
        );

        console.log(_response.data)

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
            if (error.response?.status == 401){
                return new Response('User Already Exist', {
                    status: 401,
                })
            }

            throw new Error('Network Error. Please try again later.');

        } else {
            // Handle other types of errors
            console.error('Unexpected Error:', error); 
            throw new Error('An unexpected error occurred.');
        }
    }
}
