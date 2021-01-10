import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../client.js";

export default function Home() {

        // fetch sanity data
        const [postData, setPost] = useState(null);


        useEffect(() => {
            sanityClient
                .fetch(
                    `*[_type == "post"]{
                        title,
                        slug,
                        description,
                        mainImage {
                            asset->{
                                _id,
                                url
                            },
                            alt
                        },
                        categoryTag,
                        publishedAt,
                    }`
                )
                .then((data) => setPost(data))
                .catch(console.error);
        }, []);
    return (
        <main className="container flex flex-col bg-brown text-white">
        <div className="p-4 md:p-12 md:w-3/4 mx-auto relative">
                <section className="bg-brown text-white text-center md:text-left rounded-lg lg:flex p-12 md:p-20">
                    <img src="https://i.imgur.com/mz9QfKo.jpg" className="h-60 w-48 lg:w-64 lg:h-80 mx-auto md:mr-12" alt="portrait" id="home-img"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="mono text-xl my-8">Hi there, I'm Nikki!</h1>
                        <p className="mt-4 text-base text-white">I'm a Front End Developer working from home in the United States. I love making websites and thought I'd create this blog to share some of my projects and favorite web development tools with you. Feel feel to browse my recent posts and projects or find something new in the resources section 😎</p>
                    </div>
                </section>
            </div>

            <div className="flex flex-col justify-center mx-auto mt-24 mb-24"> 
                    {postData && postData.map((post, index) => (
                    <article className="m-4">
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="flex flex-col leading-snug" key={index}>
                            <div className="m-4">
                                <h3 className="text-white text-2xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-base mb-4">{post.description}</p>
                                <span className="bg-mauve font-semibold text-sm py-2 px-4 mr-2 rounded">{post.categoryTag}</span>
                                <small className="text-base ml-2">&#128197; {post.publishedAt}</small>
                            </div>
                        </span>
                        </Link>
                    </article>
                    ))}
                    <Link to={"/post"} exact className="mx-auto mt-12"><button className="text-base w-48 h-12 font-semibold bg-yellow hover:bg-brown text-brown hover:text-yellow border-4 border-brown hover:border-yellow cursor-pointer rounded"> View Blog</button></Link>
            
                </div>

               
        </main>
    )
}