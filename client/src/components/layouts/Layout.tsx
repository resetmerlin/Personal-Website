import { PropsWithChildren } from 'react'
import { Footer, Header } from './parts'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            <main
                className="flex  w-full items-center bg-black font-sans  text-white"
                id="container"
            >
                {children}
            </main>
            <Footer />
        </>
    )
}
