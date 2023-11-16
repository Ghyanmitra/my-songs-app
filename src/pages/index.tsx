import createApoloClient from "@/lib/apollo-client"
import { songsList as query } from "@/query/songsList"
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { ApolloClient } from '@apollo/client'
import parse from "html-react-parser"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function Home({ data }: { data: any }) {

  return (
    <MaxWidthWrapper className="py-6 sm:py-8">

      <div className="flex w-full max-w-lg items-center space-x-2 justify-center mx-auto pb-6">
        <Input type="text" placeholder="Search songs" />
        <Button type="submit">Search</Button>
      </div>

      <div>
        <ul role="list" className="divide-y divide-gray-100">
          {
            data?.songLists?.data?.map((value: {
              attributes: {
                title: string
                slug: string
              }
            }, key: number) => {

              return <li key={key + 1} className="flex justify-between gap-x-6 py-3 cursor-pointer">
                <Link href={value?.attributes?.slug}>
                  <div className="flex gap-x-4">
                    <div className="flex-auto">
                      <p className="text-lg font-semibold leading-6 ">{value?.attributes?.title}</p>
                      {/* <p className="mt-1 truncate text-md leading-5 ">{value?.attributes?.lyrics && parse(value?.attributes?.lyrics)}</p> */}
                    </div>
                  </div>
                </Link>
              </li>
            })
          }

        </ul>
      </div>
    </MaxWidthWrapper>
  )
}


export async function getStaticProps() {

  const client: ApolloClient<any> = createApoloClient();

  const { data } = await client.query({ query });

  return {
    props: {
      data
    }
  }

}