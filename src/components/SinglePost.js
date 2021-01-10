import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null); // initial state is null
    const { slug } = useParams();

    
    const serializers = {
        types: {
          code: props => (
            <pre data-language={props.node.language}>
              <code>{props.node.code}</code>
            </pre>
          )
        }
    }
    useEffect(() => {
        sanityClient.fetch(`
            *[slug.current == "${slug}"]{
                title,
                _id,
                slug,
                publishedAt,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image
            }`
        )
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if(!singlePost) return <div>Loading...</div>

    return (
        <main className="container bg-brown min-h-screen p-4 md:p-12">
            <Link to="/post/" exact className="text-white text-base items-center"><FontAwesomeIcon icon={faChevronLeft} className="mr-4"></FontAwesomeIcon> Back to Blog</Link>
            <article className="container text-white mx-auto rounded-lg mt-4">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-white text-brown bg-opacity-75 rounded p-4 md:p-12">
                            <h1 className="mono text-3xl mb-4">
                                {singlePost.title}
                            </h1>
                            <div className="flex justify-center text-brown">
                                <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} className="w-10 h-10 rounded-full"/>
                                <p className="mono flex items-center pl-2 text-xl">{singlePost.name}</p>
                            </div>
                            <p className="text-base font-semibold mt-4 text-center">Published on <strong>{singlePost.publishedAt}</strong></p>
                        </div>
                    </div>
                    <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className="w-full object-cover rounded-t" style={{ height: "400px"}}/>
                </header>
                <div className="break-words px-4 lg:px-16 py-12 lg:py-20 prose lg:prose-xl max-w-screen leading-normal">
                    <BlockContent blocks={singlePost.body} projectId="0dzyqy4p" dataset="production" serializers={serializers}/> 
                    {/*<ReactMarkdown markdown={singlePost.body} projectId="0dzyqy4p" dataset="production"/> */}
                </div>
            </article>
        </main>
    )};
