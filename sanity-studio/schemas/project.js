export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: 'mainImage',
            title: 'Project image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: "projectTag",
            title:"Project tag",
            type: "string",
            options: {
                list: [
                {
                    value: "react", title: "React",
                },
                {
                    value: "tailwind", title: "TailwindCSS",
                },
                {
                    value: "bootstrap", title: "Bootstrap",
                },
                {
                    value: "materialize", title: "Materialize",
                },
                {
                    value: "mern", title: "MERN",
                },
                {
                    value: "javascript", title: "Javascript",
                },
                {
                    value: "wordpress", title: "Wordpress",
                },
                {
                    value: "css", title: "CSS",
                },
                {
                    value: "html", title: "HTML",
                },
                {
                    value: "javascript", title: "Javascript",
                },
                {
                value: "wordpress", title: "Wordpress",
                },
            ],
        },
    },
    
],
};