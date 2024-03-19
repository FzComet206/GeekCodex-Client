import AWS, { S3 } from "aws-sdk";
import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {

    console.log("next server side feed");
    const id = req.nextUrl.searchParams.get('id')
    console.log(id)

    const s3 = new AWS.S3({
        accessKeyId: process.env.S3_KEY,
        secretAccessKey: process.env.S3_SECRET,
        region: process.env.S3_REGION
    })

    try {
        // request/response prpagation
        const sessionCookie = req.headers.get('cookie')
        const _response = await axios.get(
            process.env.API_URL + `/delete?id=${id}`,
            { 
                headers: {
                    'Cookie': sessionCookie || ''
                },
                withCredentials: true
            }
        );

        const url = new URL(_response.data.image);
        const bucket = url.host.split('.')[0];
        const key = url.pathname.slice(1);
        console.log(key)

        const params: any = {
            Bucket: bucket,
            Key: key
        }

        try {
            await s3.deleteObject(params).promise();
            console.log("Deleted")
        } 
        catch (error) {
            console.error(error);
        }

        return new Response("Deleted", {
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