import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

function SongsPage({ data }: { data: any }) {
    console.log(data);

    return (
        <MaxWidthWrapper>
            Test
        </MaxWidthWrapper>
    )
}

export default SongsPage

export async function getStaticProps() {

    const res = await fetch('http://localhost:1337/api/song-lists')

    const data = await res.json()

    return {
        props: {
            data
        }
    }

}