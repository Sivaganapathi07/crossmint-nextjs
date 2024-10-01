"use client"
import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'
import {CrossmintPayButton} from "@crossmint/client-sdk-react-ui";

export default function page() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    if(!email) return redirect("/")

  return (
    <div className='flex min-h-screen flex-col items-center p-24'>
        
        <h1 className='text-4xl font-bold mb-10'>Mint</h1>
        <CrossmintPayButton
            projectId="965c52b2-e48b-46eb-bbc4-de30bf1f4117"
            collectionId="3c8f05db-9af2-40b4-9c3c-af35549fd9d5"
            environment="staging"
            emailTo={email}
            loginEmail={email} 
        />
    </div>
  )
}
