import { defineField, defineType } from "sanity";

// Singleton schema for About Page
export const aboutType = defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Hi! I'm Hannah",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      initialValue: "Owner & Founder of Flora by Hannah",
    }),
    defineField({
      name: "story",
      title: "My Story",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "mission",
      title: "Mission Statement",
      type: "text",
    }),
    defineField({
      name: "mainImage",
      title: "Main Portrait",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", type: "string", title: "Number" },
            { name: "label", type: "string", title: "Label" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
