"use client"

import { Inbox } from 'lucide-react';
import React from 'react'
import {useDropzone} from 'react-dropzone'


const FileUpload = () => {
    const {getRootProps,getInputProps}=useDropzone();
  return <div className='p-2 bg-white rounded-lg'>
    <div {...getRootProps({
          className:
            "border-dashed border-2 rounded-md cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
        })}>
        <input {...getInputProps()}/>
        <>
        <Inbox className='w-10 h-10 text-blue-500'/>
        <p className='mt-2 text-sm text-slate-400'>Drag and drop a PDF file here or click to select one.</p>
        </>
    </div>
  </div>
}

export default FileUpload