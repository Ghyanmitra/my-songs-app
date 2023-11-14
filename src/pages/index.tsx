import createApoloClient from "@/lib/apollo-client"
import { songsList } from "@/query/songsList"
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { ApolloClient } from '@apollo/client'
import parse from "html-react-parser"


export default function Home({ data }: { data: any }) {
  console.log(data);

  return (
    <MaxWidthWrapper>

      <div>
        <ul role="list" className="divide-y divide-gray-100">

          {
            data?.songLists?.data?.map((value: {
              attributes: {
                title: string
              }
            }, key: number) => {

              return <li key={key + 1} className="flex justify-between gap-x-6 py-3">
                <div className="flex gap-x-4">
                  <div className="flex-auto">
                    <p className="text-lg font-semibold leading-6 ">{value?.attributes?.title}</p>
                    {/* <p className="mt-1 truncate text-md leading-5 ">{value?.attributes?.lyrics && parse(value?.attributes?.lyrics)}</p> */}
                  </div>
                </div>

              </li>
            })
          }

        </ul>
      </div>
    </MaxWidthWrapper>
  )
}


export async function getStaticProps() {

  const client: ApolloClient<any> = await createApoloClient();

  const { data } = await client.query({ query: songsList });

  return {
    props: {
      data
    }
  }

}