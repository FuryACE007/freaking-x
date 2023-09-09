import React from "react";
// import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const CreatePostWidget = () => {
  const { user } = useUser();
  return (
    <>
      <div className=" flex p-6 border-b border-b-slate-600 sticky items-center">
        {/* <UserButton afterSignOutUrl="/" /> */}
        {user && user.imageUrl ? (
          <img
            src={user?.imageUrl}
            alt="pfp"
            className=" w-[3rem] rounded-full"
          />
        ) : (
          <div>Loading..</div>
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
