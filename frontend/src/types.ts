export type BlogPosts = {
    attributes: {
        title: string;
        category: string;
        author: string;
        excerpt: string;
        tags: string;
        sources: string;
        body: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    },  
    id: number;
}

export type BlogPost = {
    title: string;
    category: string;
    author: string;
    excerpt: string;
    tags: string;
    sources: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}