import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

function PageNotFound() {
    return (
        <MaxWidthWrapper className=''>
            <div className='flex flex-col justify-center items-center h-screen max-h-[80vh]'>
                <h1 className='text-4xl md:text-9xl font-bold text-primary'>
                    404
                </h1>
                <h2 className='text-2xl md:text-6xl font-medium py-8 text-primary'>oops! Page not found
                </h2>
            </div>
        </MaxWidthWrapper>
    )
}

export default PageNotFound