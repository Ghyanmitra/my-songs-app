import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import createApoloClient from "@/lib/apollo-client"
import { ApolloClient } from '@apollo/client'
import { songsCategory as query } from "@/query/songsCategory"

import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
    GetStaticPathsContext,
} from 'next'

type Repo = {
    slug: string
}

export const getStaticPaths = (async () => {

    const client: ApolloClient<any> = createApoloClient();

    const { data } = await client.query({ query });

    const paths = data?.songCategories?.data?.map((post: {
        attributes: {
            title: string
            slug: string
        }
    }) => ({
        params: { category: post?.attributes?.slug },
    }))

    return {
        paths, fallback: false
    }
    // { fallback: false } means other routes should 404

}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {

    const data = {
        slug: context?.params?.category
    }

    return { props: { data } }
}) satisfies GetStaticProps<{
    data: any
}>


export default function songsCategory({
    data
}: InferGetStaticPropsType<typeof getStaticProps>) {


    return <div>{data?.slug}</div>

}

