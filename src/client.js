// This file communicates with Sanity
import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "0dzyqy4p", // from sanity.json or manage.sanity.io
    dataset: "production"
})