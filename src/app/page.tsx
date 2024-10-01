"use client"
import Image from "next/image";
import { FormEvent } from "react";

export default function Home() {

  const goToMintPage = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    window.location.href = encodeURI(`/mint?email=${email}`);

  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form onSubmit={goToMintPage}>
            <input type="email" name="email" placeholder="Enter email" className="p-4 m-4 border-2 border-gray-300 rounded-md text-black"/>
            <button type="submit" className="p-4 m-4 bg-blue-500 text-white rounded-md">
              Submit
            </button> 
        </form>
      </main>
      
    </div>
  );
}
