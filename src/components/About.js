import React, {useEffect, useState } from 'react';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset->url
            }`).then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if(!author) return <div>Loading...</div>
    return (
        <main className="relative">   
            <div className="p-4 md:p-12 md:w-3/4 mx-auto relative">
                <section className="bg-brown text-white text-center md:text-left rounded-lg lg:flex p-12 md:p-20">
                    <img src={urlFor(author.authorImage).url()} className="h-60 w-48 lg:w-64 lg:h-80 mx-auto md:mr-12" alt={author.name} id="about-img"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="mono text-xl my-8">Hi! My name is {" "}
                            <span>{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-base">
                            <BlockContent blocks={author.bio} projectId="0dzyqy4p" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}