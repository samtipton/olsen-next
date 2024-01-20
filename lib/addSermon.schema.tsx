import { z } from "zod";

export const addSermonSchema = z.object({
  author: z.string().min(1),
  title: z.string().min(1),
  month: z.string().min(1),
  day: z.string().min(1),
  year: z.string().length(4),
  serviceTime: z.string(),
  videoUrl: z.string().min(1),
  sermonAudio: z.custom<File>(),
  sermonPresentation: z.custom<File>(),
  sermonOutline: z.custom<File>(),
});

export type AddSermonSchema = z.infer<typeof addSermonSchema>;
