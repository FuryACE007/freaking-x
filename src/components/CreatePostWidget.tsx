import React from "react";
import Image from "next/image";
// import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const CreatePostWidget = () => {
  const { user } = useUser();
  return (
    <>
      <div className=" flex p-6 border-b border-b-slate-600 sticky items-center">
        {/* <UserButton afterSignOutUrl="/" /> */}
        {user?.imageUrl ? (
          <Image
            src={user?.imageUrl}
            alt="pfp"
            width={50}
            height={50}
            className=" rounded-full"
          />
        ) : (
          <div className=" w-full items-center flex h-screen mx-auto">Loading..</div>
        )}

        <textarea
          placeholder="What's up bro ?!"
          className=" textarea textarea-bordered w-full max-w-lg mx-auto bg-slate-900 text-slate-300 text-lg "
        />
      </div>
    </>
  );
};

export default CreatePostWidget;
