"use client";

import { UserButton, useAuth } from "@clerk/nextjs"; 
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react"; 
import Link from "next/link";

export default function Home() {
  const { userId } = useAuth(); 
  const isAuth = !!userId;

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center">
          <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
          <UserButton afterSwitchSessionUrl="/"/> 
        </div>
        <div className="flex mt-2">
          {isAuth && <Button>Go to Chats</Button>}
        </div>
        <p className="max-w-xl mt-1 text-lg text-slate-600">
            Join millions of students, researchers and professionals to instantly
            answer questions and understand research with AI.
        </p>
        <div className="w-full mt-4">
            {isAuth ? (
              <h1>File upload</h1>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
      </div>
    </div>
  );
}
