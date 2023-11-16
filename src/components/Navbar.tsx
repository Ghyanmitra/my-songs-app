import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import { ThemeToggle } from './ThemeToggle'

const Navbar = () => {

    return (
        <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between'>
                    <Link
                        href='/'
                        className='flex z-40 font-bold py-2 text-primary'>
                        <span>Christian Songs</span>
                    </Link>

                    <div className='items-center space-x-4 sm:flex'>

                        <Link
                            href='/songs'
                            className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm',
                            })}>
                            Songs List
                        </Link>

                        <ThemeToggle />
                    </div>

                </div>
            </MaxWidthWrapper >
        </nav >
    )
}

export default Navbar
