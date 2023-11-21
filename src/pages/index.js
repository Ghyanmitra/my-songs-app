"use client";
import createApoloClient from "@/lib/apollo-client";
import { songsList } from "@/query/songsList";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import { ApolloClient } from "@apollo/client";
// import parse from "html-react-parser";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {  useState, useEffect } from "react";
import { PAGE_LIMIT } from "@/lib/constants";
// import { useParams } from "next/navigation";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from 'next/router'
// import debounce from "lodash/debounce"


export default function Home({ data }) {

  const router = useRouter();
  // const pageNumber= router.query.page;
  const title = router.query.title;

  const [searchTerm, setSearchTerm] = useState(title || "");

  const page = data.songLists.meta.pagination.page;
  const total = data.songLists.meta.pagination.total;

  const lastPage = Math.ceil(total / PAGE_LIMIT);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        console.log(searchTerm)
        router.push(`?page=${page}${searchTerm && `&title=${searchTerm}`}`)
    }, 2000);

    return () => clearTimeout(timeoutId)
}, [searchTerm])



  return (
    <MaxWidthWrapper className="py-6 sm:py-8">
      <div className="flex w-full max-w-lg items-center space-x-2 justify-center mx-auto pb-6">
        <Input
          type="text"
          placeholder="Search songs"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {/* <Button type="submit">Search</Button> */}
      </div>

      <div>
        <ul role="list" className="divide-y divide-border">
          {data?.songLists?.data?.map((value, key) => {
            return (
              <li
                key={key + 1}
                className="flex justify-between gap-x-6 py-3 cursor-pointer"
              >
                <Link
                  href={`/songs/${value?.attributes?.song_category?.data?.attributes?.slug}/${value?.attributes?.slug}`}
                >
                  <div className="flex gap-x-4">
                    <div className="flex-auto">
                      <p className="text-lg font-semibold leading-6 ">
                        {value?.attributes?.title}
                      </p>
                      {/* <p className="mt-1 truncate text-md leading-5 ">{value?.attributes?.lyrics && parse(value?.attributes?.lyrics)}</p> */}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}

          {data?.songLists?.data.length==0 && <li className="flex justify-between gap-x-6 py-3"> No Result Found</li>}
        </ul>

        <div className="flex gap-4 items-center justify-center py-8">
{/* &title=${searchTerm} */}
        <Button
          onClick={() => router.push(`?page=${page - 1}${searchTerm && `&title=${searchTerm}`}`)}
          disabled={page <= 1}
        >
          Back
        </Button>

        <Button
          onClick={() => router.push(`?page=${page + 1}${searchTerm && `&title=${searchTerm}`}`)}
          disabled={page >= lastPage}
        >
          Next
        </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export async function getServerSideProps({ query: { page = 1, title = "" } }) {
  const client = createApoloClient();

  const query = songsList(page||1, PAGE_LIMIT, title||"");

  const { data } = await client.query({ query });

  return {
    props: {
      data,
    },
  };
}
