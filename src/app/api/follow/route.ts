import axios from 'axios';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest){

    console.log("server follow");
    const sessionCookie = req.headers.get('cookie')
    const authorid = req.nextUrl.searchParams.get('authorid')
    
    try {
        const _response = await axios.get(
        process.env.API_URL + "/follow?authorid=" + authorid,
        { 
            headers: { 
                'Cookie' : sessionCookie || ''
            },
            withCredentials: true
        } ,
        );

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
