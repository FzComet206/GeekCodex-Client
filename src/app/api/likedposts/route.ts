import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {

    console.log("next server side liked posts");
    const limit = req.nextUrl.searchParams.get('limit')
    const page = req.nextUrl.searchParams.get('page')

    try {
        // request/response prpagation
        const sessionCookie = req.headers.get('cookie')
        const _response = await axios.get(
            process.env.API_URL + `/likedposts?page=${page}&limit=${limit}`,
            { 
                headers: {
                    'Cookie': sessionCookie || ''
                },
                withCredentials: true
            }
        );

        return new Response(JSON.stringify(_response.data), {
            status: 200,
        });

    } catch (error) {
        if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
            if (error.response?.status === 400) {
                throw new Error('Network Error. Please try again later.');
            } else {
            // Handle other types of errors
            throw new Error('unexpected error occurred.');
            }
        } else {
            throw new Error('unexpected non axios error.');
        }
    };
}