import React, { Children } from 'react';
import Head from 'next/head';
import Navbar from './Navbar'
import PopularTags from '../components/PopularTags';
import LastPosts from '../components/LastPosts';

const Layout = ({ children, title }) => {
    return(
        <div>
            <Head>
                <title>Sa</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                <script src="https://github.com/tengbao/vanta/blob/master/vendor/three.r92.min.js"></script>
            </Head>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="ui container" style={{width:"80%"}}>
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