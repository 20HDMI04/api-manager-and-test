import z from "zod";
import { buildJsonSchemas } from "fastify-zod";

const bookCore = {
    title: z.string({
        required_error: "Title is required",
        invalid_type_error: "Title must be a string"
    }).trim().min(1, { message: "Title is required!" }),    
    description: z.string({
        required_error: "Description is required",
        invalid_type_error: "Description must be a string"
    }).trim().min(1, { message: "Description is required!" }),
    author: z.string({
        required_error: "Author is required",
        invalid_type_error: "Author must be a string"
    }),
    published: z.number(
        {
            invalid_type_error: "Published must be a number"
        }
    )
}

const createBookSchema = z.object({
    ...bookCore,
})

const bookResponseSchema = z.object({
    id: z.number(),
    ...bookCore,
    updatedAt: z.string(),
    createdAt: z.string()
})

const getBookListSchema = z.array(bookResponseSchema)


export const {schemas: bookSchema, $ref} = buildJsonSchemas({
    createBookSchema,
    bookResponseSchema,
    getBookListSchema
}, {$id: "bookSchemas"})

export type CreateBookInput = z.infer<typeof createBookSchema>;
export type BookResponse = z.infer<typeof bookResponseSchema>;