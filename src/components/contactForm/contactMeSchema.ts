import * as z from 'zod';
import { MAX_CHARS, MAX_TEXTAREA_CHARS, MIN_CHARS } from '@/utils/constants.ts';

export const contactMeSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(MIN_CHARS, 'This field is required')
        .max(MAX_CHARS, 'Too long'),
    lastName: z
        .string()
        .trim()
        .min(MIN_CHARS, 'This field is required')
        .max(MAX_CHARS, 'Too long'),
    email: z.email(),
    message: z
        .string()
        .trim()
        .min(MIN_CHARS, 'This field is required')
        .max(MAX_TEXTAREA_CHARS, 'Too long'),
});

export type ContactMeTypes = z.infer<typeof contactMeSchema>;
