
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../client.js";

export default function Post() {
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
                }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bg-brown text-white min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-4xl mono">Blog Posts Page</h1>
                <h2 className="text-lg md:mb-12">Welcome to my page of blog posts</h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto md:gap-8 mb-24"> 
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative leading-snug" key={index}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full object-cover absolute" id="main-img"/>
                            <span className="block relative h-full flex justify-start md:justify-end items-end pr-4 md:pb-4">
                                <h3 className="bg-gray-800 bg-opacity-75 text-white text-xl font-semibold md:px-3 py-4 rounded text-left">{post.title}</h3>
                            </span>
                            <div className="mt-4 mb-4">
                                <p className="text-base mb-4">{post.description}</p>
                                {/* These will be made dynamic as categories */ }
                                <span className="bg-pink text-sm py-2 px-4 mr-2 rounded">{post.categoryTag}</span>
                                {/* This will also be made dynamic some how */}
                                <small className="text-sm ml-2">&#9749; 4 min read</small>
                            </div>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}