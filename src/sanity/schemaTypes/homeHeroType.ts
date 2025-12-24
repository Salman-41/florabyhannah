import { defineField, defineType } from "sanity";

// Singleton schema for Home Page Hero
export const homeHeroType = defineType({
  name: "homeHero",
  title: "Home Page Hero",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "View Portfolio",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Button Link",
      type: "string",
      initialValue: "/portfolio",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "overlayOpacity",
      title: "Overlay Opacity",
      type: "number",
      initialValue: 0.4,
      validation: (rule) => rule.min(0).max(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "backgroundImage",
    },
  },
});
