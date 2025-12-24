import { defineField, defineType } from "sanity";

// Collection schema for Wedding Case Studies
export const weddingType = defineType({
  name: "wedding",
  title: "Weddings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description: "Show this wedding on the home page",
    }),
    defineField({
      name: "date",
      title: "Wedding Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Summer Weddings", value: "Summer Weddings" },
          { title: "Installations", value: "Installations" },
          { title: "Bouquets", value: "Bouquets" },
          { title: "Intimate Weddings", value: "Intimate Weddings" },
          { title: "Grand Celebrations", value: "Grand Celebrations" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
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
      name: "vendors",
      title: "Vendors",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "role", type: "string", title: "Role" },
            { name: "name", type: "string", title: "Name" },
            { name: "link", type: "url", title: "Website" },
          ],
        },
      ],
    }),
    defineField({
      name: "testimonial",
      title: "Client Testimonial",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "venue",
      media: "coverImage",
    },
  },
  orderings: [
    {
      title: "Date, Newest",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
