import axios from 'axios';
import { NextRequest } from 'next/server';


export async function GET(req: NextRequest){

    console.log("server ping");

    const sessionCookie = req.headers.get('cookie')
    
    try {
        const _response = await axios.get(
        process.env.API_URL + "/auth/me",
        { 
            headers: { 
                'Cookie' : sessionCookie || ''
            },
            withCredentials: true
        } ,
        );
        // get request dont return cookies

        return new Response(JSON.stringify(_response.data), {
            status: 200,
        })
        
    } catch (error: any) {
        console.log(error.response.data);
        return new Response('Something went wrong', {
            status: 400,
        })
    };
}
