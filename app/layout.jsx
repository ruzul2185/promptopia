import '@/styles/globals.css'
import '/app/layout.css'
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
export const metadata = {
    title: 'Promptopia ganesh technology solutions',
    description: 'Discover & Share AI Prompts'
}
//content seo friendly added
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
                    <section className='promo-section'>
                        <h1>Welcome to <span className="highlight">Promptopia</span></h1>
                        <p>Join us and explore a vast collection of AI prompts, <strong>share your creations</strong>, and connect with a community of innovative thinkers.</p>

                        <div className="promo-content">
                            <div className="promo-block">
                                <h2>Why Join Promptopia?</h2>
                                <ul>
                                    <li>Discover unique AI prompts that <strong>inspire creativity</strong> and boost productivity.</li>
                                    <li>Share your own prompts and engage with our vibrant community.</li>
                                    <li>Unlock your creative potential by exploring prompts tailored to your needs. Best AI prompt ideas for creativity</li>
                                </ul>
                            </div>

                            <div className="promo-block">
                                <h2>What You Can Do on Promptopia. Creative AI prompts for enhanced productivity</h2>
                                <ul>
                                    <li><strong>Create</strong>, <strong>share</strong>, and <strong>explore</strong> AI-driven prompts.</li>
                                    <li>Engage with fellow users and expand your creative horizons. Share AI prompts for writing inspiration</li>
                                    <li>Discover innovative AI prompts in the fields of writing, art, and productivity.</li>
                                </ul>
                            </div>

                            <div className="promo-block">
                                <h2>Join Our Community Today</h2>
                                <p>Promptopia is the premier platform for AI prompt discovery and sharing. Whether you're looking to unlock new ideas, boost your productivity, or just explore, we have something for everyone! Unique AI prompts for artists and writers!</p>
                                <p><em>Connect with like-minded individuals and expand your creative horizons with our curated prompts!</em></p>
                            </div>
                        </div>
                    </section>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout;
