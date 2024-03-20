import { S3Client, PutObjectAclCommand, DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import axios from "axios";
import { NextRequest } from "next/server";

const s3Client = new S3Client({ 
    region: process.env.S3_REGION,
    credentials: {
        accessKeyId: process.env.S3_KEY!,
        secretAccessKey: process.env.S3_SECRET! 
    }
});

export async function GET(req: NextRequest) {

    console.log("next server side delete");
    const id = req.nextUrl.searchParams.get('id')

    // delete from postgres
    // get url and delete from s3

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
        console.log(bucket)
        console.log(key)

        const params: any = {
            Bucket: bucket,
            Key: key
        }

        try {
            const res = await s3Client.send(new DeleteObjectCommand(params));
            console.log(res)
            console.log("Deleted")
        } 
        catch (error) {
            return new Response("Image deletion error", {
                status: 400,
            });
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