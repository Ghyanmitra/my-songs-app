import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import { ThemeToggle } from './ThemeToggle'

const Navbar = () => {

    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-foreground bg-background backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b border-foreground'>
                    <Link
                        href='/'
                        className='flex z-40 font-bold py-2'>
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
