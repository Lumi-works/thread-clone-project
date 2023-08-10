import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().nonempty({ message: "has to write something" }).min(3),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z
    .string()
    .nonempty({ message: "has to have a profile photo" })
    .min(3),
});
