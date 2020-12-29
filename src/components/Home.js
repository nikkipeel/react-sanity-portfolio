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
                        }
                    }`
                )
                .then((data) => setPost(data))
                .catch(console.error);
        }, []);
    return (
        <main className="container flex flex-col bg-brown text-white">
            <section className="flex flex-col md:flex-row text-center md:text-left justify-center pt-12 lg:pt-36 px-8">
            <img src="https://i.imgur.com/mz9QfKo.jpg" className="rounded-full mr-auto ml-auto md:mr-8 md:ml-0" alt="portrait image"></img>
                <div className="flex flex-col md:w-1/2">
                    <h1 className="mt-4 text-xl text-white font-bold mono leading-none lg:leading-snug">Hi there, I'm Nikki!</h1>
                    <p className="mt-4 text-base text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eos quia nam repudiandae dolore rerum iste labore doloremque exercitationem doloribus dolorum quam inventore nostrum reiciendis voluptas harum, neque, ducimus eaque facilis, corrupti temporibus? Inventore, ipsa.</p>
                </div>
            </section>

            <div className="flex flex-col justify-center mx-auto mt-36 mb-24"> 
                    {postData && postData.map((post, index) => (
                    <article className="m-4">
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="flex flex-col leading-snug" key={index}>
                            <div className="m-4">
                                <h3 className="text-white text-2xl font-semibold">{post.title}</h3>
                                <p className="text-base mb-4">{post.description}</p>
                                {/* These will be made dynamic as categories/topics */ }
                                <span className="bg-pink text-sm py-2 px-4 mr-2 rounded">css</span>
                                <span className="bg-yellow text-sm py-2 px-4 mr-2 rounded">html</span>
                                {/* This will also be made dynamic some how */}
                                <small className="text-sm ml-2">&#9749; 4 min read</small>
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