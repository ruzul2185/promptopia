import '@/styles/globals.css'

import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
    return(
        <html lang='en' >
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient'/>
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout