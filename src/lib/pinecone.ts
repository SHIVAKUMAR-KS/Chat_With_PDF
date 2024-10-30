import { Pinecone } from '@pinecone-database/pinecone';

let pinecone: Pinecone | null = null;

export const getPineconeClient = async () => {
    if (!pinecone) {
        pinecone = new Pinecone({
            apiKey: process.env.PINCONE_API_KEY!, // Only pass the apiKey
        });
    }
    return pinecone;
};

export async function loadS3IntoPinecone(fileKey: string) {
    // Add your logic here
    //1.obtain the pdf
    
}
