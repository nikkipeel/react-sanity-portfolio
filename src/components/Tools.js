import React from 'react';

export default function Tools() {
    return (
        <main className="flex flex-col bg-brown text-white min-h-screen p-12">
            <section className="md:w-3/4 mx-auto text-base">
                <h1 className="text-4xl mono">Helpful Tools</h1>
                <h2 className="text-lg mb-12">Welcome to my resources page!</h2>

                <ul className="my-4">
                    <h2 className="text-3xl mb-4 border-b-2 border-yellow w-48 leading-loose rounded-sm">Books</h2>
                    <li className="text-base">Javascript and JQuery</li>
                    <li className="text-base">Eloquent Javascript</li>
                </ul>

                <ul className="my-4">
                    <h2 className="text-3xl mb-4 border-b-2 border-yellow w-48 leading-loose rounded-sm">Top Courses</h2>
                    <li className="my-8">
                        <a href="https://www.udemy.com/course/web-projects-with-vanilla-javascript/" className="text-lg font-bold leading-loose my-4 hover:text-pink hover:underline cursor-pointer">20 Projects with Vanilla Javascript - Udemy, Instructor: Brad Traversy </a>
                        <p className="text-base">Build real projects with vanilla JS such as a video player, lyrics search application, flippable flash cards, expense tracker, infinite scroll posts and more. </p>   
                    </li>
                    <li className="my-8">
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/"  className="text-lg font-bold leading-loose my-4 hover:text-pink hover:underline cursor-pointer">The Web Developer Bootcamp - Udemy, Instructor: Colt Steele</a>
                        <p>One of my first web developer certifications came from this bootcamp, recently updated in October 2020. Learn HTML, CSS, and essential Javascript to build responsive websites such as the featured course project, YelpCamp (here is the version I made: <a href="https://intense-mountain-36045.herokuapp.com" className="font-semibold text-pink hover:text-mauve hover:underline">YelpCamp - 2019</a>)</p>
                    </li>
                    <li className="my-8">
                        <a href="https://www.freecodecamp.org/learn"  className="text-lg font-bold leading-loose my-4 hover:text-pink hover:underline cursor-pointer">Responsive Web Design Certification - FreeCodeCamp</a>
                        <p>A great place to start with FreeCodeCamp's extensive curriculum. Learn the fundamentals of building a website. In addition to HTML and CSS, you'll be introduced to accessibility, flexbox, and css grid. </p>
                    </li>
                    <li className="my-8">
                        <a href="https://www.freecodecamp.org/learn"  className="text-lg font-bold leading-loose my-4 hover:text-pink hover:underline cursor-pointer">Front End Libraries Certification - FreeCodeCamp</a>
                        <p>Another great course by FreeCodeCamp that focuses on the Front End of developing websites. This is a good choice if you're ready to branch out and begin using CSS and JS libraries. This course introduces Bootstrap, JQuery, Sass, React, Redux, and has a variety of real projects for you to test your knowledge</p>
                    </li>
                </ul>

                <ul className="my-4">
                    <h2 className="text-3xl mb-4 border-b-2 border-yellow w-80 leading-loose rounded-sm">Learning Platforms</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start">
                    <li className="flex flex-col pb-2">
                        <a href="https://scrimba.com/" className="text-lg font-bold hover:text-pink hover:underline cursor-pointer">▹ Scrimba</a>
                        <em>*Free courses available</em>
                    </li>
                    <li className="flex flex-col pb-2">
                        <a href="https://www.freecodecamp.org/learn" className="text-lg font-bold hover:text-pink hover:underline cursor-pointer">▹ FreeCodeCamp</a>
                        <em>*All courses are free</em>
                    </li>
                    <li><a href="https://www.udemy.com/" className="text-lg font-bold hover:text-pink hover:underline cursor-pointer pb-2">▹ Udemy</a></li>
                    <li>
                        <a href="https://www.pluralsight.com/" className="text-lg font-bold hover:text-pink hover:underline cursor-pointer pb-2">▹ Pluralsight</a>
                    </li>
                    <li className="flex flex-col  pb-2">
                        <a href="https://www.codecademy.com/" className="text-lg font-bold hover:text-pink hover:underline cursor-pointer">▹ Codecademy</a>
                        <em>*Free courses available</em>
                    </li>
                    <li><a href="https://frontendmasters.com/" className="text-lg font-bold hover:text-pink hover:underline cursor-pointer pb-2">▹Front End Masters</a></li>
                    </div>
                </ul>
            </section>
        </main>
    )
}