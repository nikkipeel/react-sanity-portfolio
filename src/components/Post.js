
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
                    mainImage {
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bg-brown text-white min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-4xl justify-center mono">Blog Posts Page</h1>
                <h2 className="text-lg text-white flex justify-center mb-12">Welcome to my page of blog posts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug" key={index}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full object-cover absolute" />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="bg-gray-800 bg-opacity-75 text-white text-lg font-semibold px-3 py-4 rounded">{post.title}</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}