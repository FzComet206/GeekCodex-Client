import axios from "axios";
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

    // post to nodejs
    let url = '';
    console.log("next server side post")
    const sessionCookie = req.headers.get('cookie')

    if (!sessionCookie) {
        return new Response("Unauthorized", {
            status: 401,
        })
    }

    try {
        // s3 upload
        const s3Response = await s3.upload(params).promise();
        url = s3Response.Location;

        // post
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
            return new Response(error.response?.data, {
                status: 500,
            })
        } else {
            // Handle other types of errors
            console.error('Unexpected Error:', error); 
            throw new Error('An unexpected error occurred.');
        }
    }
}
