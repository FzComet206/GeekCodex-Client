import axios, { AxiosResponse } from "axios";
import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    // upload image to S3 and retrieve url
    // store title, summary, link, and image url in database
    
    const formData = await req.formData();
    console.log(formData)

    console.log("next server side post")

    try {
        const _response: AxiosResponse = await axios.post(
        process.env.API_URL + "/post",
        { msg: "test"}, 
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true} 
        );

        const cookie = _response.headers['set-cookie'];
        if (cookie){
            const cookieHeader = Array.isArray(cookie) ? cookie.join('') : cookie;
            return new Response("post success", {
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
            throw new Error('not found');
            } else {
            if (error.response?.status === 401) {
                throw new Error('unauthorized');
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
