import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import createApoloClient from "@/lib/apollo-client"
import { songsCategory } from "@/query/songsCategory"
import { ApolloClient } from '@apollo/client'
import Link from 'next/link'


function SongsPage({ data }: { data: any }) {

    return (
        <MaxWidthWrapper>

            <div className='my-8'>
                <h1 className='text-xl flex items-center justify-center'>Songs Categories</h1>
            </div>

            <div className='grid gap-4 sm:grid-cols-4 xl:grid-cols-4 cursor-pointer'>
                {data?.songCategories?.data?.map((value: {
                    attributes: {
                        title: string
                        slug: string
                    }
                }, key: number) => {

                    return <div className='rounded-xl border bg-card text-card-foreground shadow p-4 flex justify-center' key={key + 1}>
                        <Link href={`songs/${value?.attributes?.slug}`}>
                            {value?.attributes?.title}
                        </Link>
                    </div>
                })}
            </div>

        </MaxWidthWrapper>
    )
}

export default SongsPage

export async function getStaticProps() {

    const client: ApolloClient<any> = await createApoloClient();

    const { data } = await client.query({ query: songsCategory });

    return {
        props: {
            data
        }
    }

}