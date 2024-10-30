import { loadS3IntoPinecone } from "@/lib/pinecone";
import { NextResponse } from "next/server";


export async function POST(req: Request, res: Response){
    try {
        const body=await req.json();
        const {file_key,file_name} =body;
        await loadS3IntoPinecone(file_key);
        console.log(file_key,file_name);
        return NextResponse.json({messsage: "success"})
        

    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
        
    }
}