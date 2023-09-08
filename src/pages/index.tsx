import { UserButton } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import CreatePostWidget from "~/components/CreatePostWidget";

import { api } from "~/utils/api";

export default function Home() {
  const { data, isLoading } = api.posts.getAll.useQuery();

  if(isLoading) return <div>Loading...</div>

  if(!data) return <div>Error loading</div>

  return (
    <>
      <Head>
        <title>Freaking-X</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center">
        <div className=" flex h-screen w-full flex-col border-x border-slate-600 md:max-w-2xl">
          <CreatePostWidget />
          <div>
            {data?.map((data) => <div key={data.id} className="px-5 py-7 border-y border-y-slate-600">{data.content}</div>)}
          </div>
        </div>
      </main>
    </>
  );
}
