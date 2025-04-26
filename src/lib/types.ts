export type Project = {
    name: string,
    description: string,
    tags: string[],
    github: string,
    itchio: string | undefined
}

export type Blog = {
    id: string,
    title: string,
    content: string,
    datetime: string,
    tags: string[]
}