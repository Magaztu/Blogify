import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const BlogPost = defineDocumentType(() => ({
    name: 'BlogPost',
    filePathPattern: `blog/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {type: 'string', required: true},
        date: {type: 'date', required: true},
        published: {type: 'boolean', default: true},

    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/blog/${post._raw.flattenedPath}`
        },
    },
}));

export default makeSource({
    contentDirPath: 'src/content',
    documentTypes: [BlogPost],
});