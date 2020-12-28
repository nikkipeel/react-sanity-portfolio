export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: "categoryTag",
      title:"Category tag",
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
            value: "accessibility", title: "Accessibility",
          },
          {
            value: "github", title: "Github",
          },
          {
            value: "ecommerce", title: "Ecommerce",
          },
          {
            value: "javascript", title: "Javascript",
          },
          {
            value: "wordpress", title: "Wordpress",
          },
        ],
      },
    }
  ]
}
