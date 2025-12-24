import { defineField, defineType } from "sanity";

// Collection schema for Process Steps
export const processStepType = defineType({
  name: "processStep",
  title: "Process Steps",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Step Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon (Emoji)",
      type: "string",
      description: "Enter an emoji to represent this step",
    }),
    defineField({
      name: "order",
      title: "Step Order",
      type: "number",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "order",
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: `Step ${subtitle}`,
      };
    },
  },
  orderings: [
    {
      title: "Step Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
