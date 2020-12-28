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
                projectImage {
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
        <main className="bg-brown text-white min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-3xl flex justify-center mono">My Projects</h1>
                <h2 className="text-lg text-white flex justify-center mb-12">Welcome to my projects page</h2>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectData?.map((project, index) => (
                        <article className="relative bg-white text-brown rounded-lg shadow-xl p-16">
                            
                            <h3 className="text-3xl font-bold mb-2 hover:text-pink">
                                <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a>
                            </h3>
                            <div className="text-base text-brown space-x-4">
                                <span>
                                    <strong className="font-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <span className="bg-mauve text-white font-semibold text-sm py-2 px-4 md:mr-2 rounded items-center">{project.projectTag}</span>

                                </span>
                                <p className="my-6 text-lg leading-relaxed">{project.description}</p>
                                <a href={project.link} alt="project link" rel="noopener noreferrer" target="_blank" className="text-pink font-bold hover:underline hover:text-pink-600">
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