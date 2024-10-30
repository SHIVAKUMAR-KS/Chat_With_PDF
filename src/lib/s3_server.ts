import AWS from 'aws-sdk'
import { readFile } from 'fs/promises';
export async function downloadFromS3(file_key: string){
    try {
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
            //region: process.env.AWS_REGION // Optional: You can keep it for clarity
        });
        
        const s3 = new AWS.S3({
            params: {
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
            },
            region: 'eu-north-1' // Correct region format
        })
        
        const params = {
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
            Key: file_key,
        };
        const object=await 
    } catch (error) {
        console.log(error);
        return null;
        
    }
}