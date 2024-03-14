import axios, { AxiosResponse} from 'axios';
import { NextRequest } from 'next/server';


export async function GET(req: NextRequest){

    console.log("server ping");
    
    try {
        const response: AxiosResponse = await axios.get(
        process.env.API_URL + "/auth/me",
        { headers: { }, withCredentials: true} ,
        );

        return response.data;

    } catch (error) {
        return {username: ""}
    };
}
