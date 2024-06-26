import axios from "axios";
import { type NextRequest } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({ 
    region: process.env.S3_REGION,
    credentials: {
        accessKeyId: process.env.S3_KEY!,
        secretAccessKey: process.env.S3_SECRET! 
    }
});


export async function POST(req: NextRequest) {

    const formData = await req.formData();
    const image: any = formData.get('image');
    const buffer = Buffer.from(await image.arrayBuffer());

    // const _image = await tf.node.decodeImage(buffer, 3);
    // const predictions = await model.classify(_image as any);
    // _image.dispose();
    // console.log(predictions)

    // post to nodejs
    console.log("next server side post")
    const sessionCookie = req.headers.get('cookie')


    if (!sessionCookie) {
        return new Response("Unauthorized", {
            status: 401,
        })
    }

    try {

        // send texts to backend
        const type = image.type.split('/')[1];
        const res = await axios.post(
        process.env.API_URL + "/post",
        { 
            title: formData.get('title'),
            summary: formData.get('summary'),
            link: formData.get('link'),
            type: type
        }, 
        { 
            headers: {
                'Cookie' : sessionCookie || ''
            },
            withCredentials: true
        } 
        );


        const url = res.data.url!;
        const params: any = {
            Bucket: process.env.S3_BUCKET,
            Key: url,
            Body: buffer,
            ContentType: image.type,
            ACL: 'public-read'
        }


        try {
            const d = await s3Client.send(new PutObjectCommand(params)); 
            console.log(url)
            console.log(d)
        } catch (error) {
            console.error(error);
            return new Response("image upload failed", {
                status: 500,
            })
        }

        return new Response("post success", {
            status: 200,
        })

    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Handle Axios-specific errors
            return new Response(error.response?.data.message, {
                status: 500,
            })
        } else {
            // Handle other types of errors
            console.error('Unexpected Error:', error); 
            throw new Error('An unexpected error occurred.');
        }
    }
}
