import React,{ useEffect, useState } from 'react';
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "project"] {
                title,
                date,
                place,
                description,
                link,
                mainImage {
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                projectTag,
            }`
            )
            .then((data) => setProjectData(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bg-brown text-white min-h-screen p-8 md:p-12">
            <section className="container mx-auto">
                <h1 className="text-3xl flex justify-center mono">My Projects</h1>
                <h2 className="text-lg text-white flex justify-center mb-12">Welcome to my projects page</h2>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectData?.map((project, index) => (
                        <article className="relative bg-white text-brown rounded-lg shadow-xl py-8 px-8">
                             <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="relative items-center md:float-left w-full md:w-64 rounded mr-4"/> 
                            <h3 className="text-3xl font-bold my-2 hover:text-pink">
                                <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a>
                            </h3>
                            <div className="flex flex-col md:block text-base text-brown"> {/* space-x-4 */}
                                <span className="py-2">
                                    <strong className="font-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <span className="bg-mauve text-white font-semibold text-sm py-2 px-4 md:ml-2 rounded items-center">{project.projectTag}</span>
                                </span>
                                <p className="my-4 text-lg leading-relaxed">{project.description}</p>
                                <a href={project.link} alt="project link" rel="noopener noreferrer" target="_blank" className="text-mauve text-lg font-bold hover:underline hover:text-pink">
                                    Visit Site {" "}

                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}