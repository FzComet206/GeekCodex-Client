import axios, { AxiosResponse } from "axios";
import { type NextRequest } from "next/server";
import AWS from 'aws-sdk'

const s3 = new AWS.S3({
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
    region: process.env.S3_REGION
})


export async function POST(req: NextRequest) {

    // upload image to S3 and retrieve url
    // store title, summary, link, and image url in database
    
    const formData = await req.formData();
    const image: any = formData.get('image');
    const buffer = Buffer.from(await image.arrayBuffer());
    const params: any = {
        Bucket: process.env.S3_BUCKET,
        Key: image.name,
        Body: buffer,
        ContentType: image.type,
        ACL: 'public-read'
    }

    // s3 upload
    let url = '';
    try {
        const s3Response = await s3.upload(params).promise();
        url = s3Response.Location;
    } catch(err) {
        return new Response("s3 error", {
            status: 500,
        })
    }

    // post to nodejs
    console.log("next server side post")
    const sessionCookie = req.headers.get('cookie')

    try {
        await axios.post(
        process.env.API_URL + "/post",
        { 
            title: formData.get('title'),
            summary: formData.get('summary'),
            link: formData.get('link'),
            image: url
        }, 
        { 
            headers: {
                'Cookie' : sessionCookie || ''
            },
            withCredentials: true
        } 
        );

        return new Response("post success", {
            status: 200,
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
