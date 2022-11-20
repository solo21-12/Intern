import z from 'zod'

export const createCommunitySchema=z.object({
    title:z.string().max(256,'Max title length is 200'),
    body:z.string().min(5)
})

export type CreateCommunityInput=z.TypeOf<typeof createCommunitySchema>

export const createPostSchema=z.object({
    title:z.string().max(256,'Max title length is 200'),
    description:z.string().min(5),
    tags:z.string().max(35,"too long"),
    textpreiview:z.string().max(200,"Too long")
})

export type CreatePostInput=z.TypeOf<typeof createPostSchema>

export const getSingleCommunitySchema=z.object({
    postId:z.string().cuid(),
})