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
    published: z.string({
        required_error: "Published date is required",
        invalid_type_error: "Published date must be a string"
    }).refine((date) => !isNaN(Date.parse(date)), {
        message: "Published date must be a valid date",
    }),
    cover: z.string({
        required_error: "Cover is required",
        invalid_type_error: "Cover must be a string"
    }).trim().min(1, { message: "Cover is required!" })
    .url({ message: "Cover must be a valid URL" })
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

const getBookListQuerySchema = z.object({
    page: z.string(),
    size: z.string().optional(),
}).strict()

const getMainContentBooksSchema = z.object({
    latestBooks: z.array(bookResponseSchema),
    classicBooks: z.array(bookResponseSchema),
    bestBooks: z.array(bookResponseSchema)
}).strict()

export const {schemas: bookSchema, $ref} = buildJsonSchemas({
    createBookSchema,
    bookResponseSchema,
    getBookListSchema,
    getBookListQuerySchema,
    getMainContentBooksSchema
}, {$id: "bookSchemas"})

export type CreateBookInput = z.infer<typeof createBookSchema>;
export type BookResponse = z.infer<typeof bookResponseSchema>;
export type queryBookList = z.infer<typeof getBookListQuerySchema>;