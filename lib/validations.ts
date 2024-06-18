import { title } from "process";
import * as z from "zod"

export const questionSchema = z.object({
 title: z.string().min(5).max(300),
 explaination: z.string().min(0).max(1000),
 tags:z.array(z.string().min(1).max(15)).min(1).max(3),
});