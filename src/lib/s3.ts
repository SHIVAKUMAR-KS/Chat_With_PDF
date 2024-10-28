import AWS from 'aws-sdk';

export async function uploadToS3(file: File) {
    try {
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
            //region: process.env.AWS_REGION // Optional: You can keep it for clarity
        });
        
        const S3 = new AWS.S3({
            params: {
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
            },
            region: 'eu-north-1' // Correct region format
        });

        const file_key = 'uploads/' + Date.now().toString() + file.name.replace(' ', "-");

        const params = {
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
            Key: file_key,
            Body: file,
        };

        const upload = S3.putObject(params).on('httpUploadProgress', evt => {
            console.log('uploading to s3....', parseInt(((evt.loaded * 100) / evt.total).toString()) + "%");
        });

        const data = await upload.promise(); // Using await directly

        console.log('successfully uploaded to s3!', file_key);
        return {
            file_key,
            file_name: file.name,
        };
    } catch (error) {
        console.error('Error uploading to S3:', error);
        throw error; // Optionally rethrow or handle the error
    }
}

export function getS3Url(file_key: string) {
    const url = `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.eu-north-1.amazonaws.com/${file_key}`; // Correct region format
    return url;
}
