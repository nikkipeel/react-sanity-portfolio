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
            name: "place",
            type: "string"
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title:"Project type",
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
            ],
        },
    },
    {
        name: "link",
        type: "url",
    },
    {
        name: "tags",
        type: "array",
        of: [
            {
                type: "string",
            },
        ], 
        options: {
            layout: "tags",
        },
    } 
],
};