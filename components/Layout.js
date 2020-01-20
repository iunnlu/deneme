import React, { Children } from 'react';
import Head from 'next/head';
import Navbar from './Navbar'
import PopularTags from '../components/PopularTags';
import LastPosts from '../components/LastPosts';
import '../styles/layoutStyle.css'

const Layout = ({ children, title }) => {
    return(
        <div>
            <Head>
                <title>Sa</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="ui container main" style={{width:"90%"}}>
                    <div className="ui two column stackable grid">
                        <div className="eleven wide column">
                            { children }
                        </div>
                        <div className="five wide column">
                            <LastPosts />
                            <PopularTags />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Layout;