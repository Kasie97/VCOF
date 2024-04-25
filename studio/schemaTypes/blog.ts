export default {
    name: 'media',
    type: 'document',
    title: 'Media',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of article',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of media article',
            options: {
                source: 'title',
            }
        },
        {
            name: 'articleImage',
            type: 'image',
            title: 'Article Image',
        },
        {
            name: 'articledescription',
            type: 'text',
            title: 'Article Description',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block'
                }
            ],
        },
    ],
}