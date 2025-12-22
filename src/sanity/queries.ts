// GROQ Queries for Sanity CMS

// Home Page Hero (Singleton)
export const HOME_HERO_QUERY = `*[_type == "homeHero"][0]{
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  overlayOpacity
}`;

// Featured Weddings for Home Page
export const FEATURED_WEDDINGS_QUERY = `*[_type == "wedding" && featured == true] | order(date desc)[0...6]{
  _id,
  title,
  slug,
  date,
  venue,
  coverImage,
  category
}`;

// All Testimonials
export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc){
  _id,
  name,
  role,
  quote,
  image,
  rating,
  weddingDate
}`;

// Portfolio Items with Filters
export const PORTFOLIO_QUERY = `*[_type == "portfolioItem"] | order(date desc){
  _id,
  title,
  slug,
  category,
  tags,
  date,
  mainImage,
  images
}`;

// Portfolio Categories
export const PORTFOLIO_CATEGORIES_QUERY = `*[_type == "portfolioCategory"] | order(order asc){
  _id,
  name,
  slug
}`;

// About Page Content (Singleton)
export const ABOUT_QUERY = `*[_type == "about"][0]{
  title,
  subtitle,
  story,
  mission,
  mainImage,
  galleryImages,
  stats
}`;

// Services/Weddings & Events
export const SERVICES_QUERY = `*[_type == "service"] | order(order asc){
  _id,
  title,
  description,
  price,
  features,
  image
}`;

// Process Steps
export const PROCESS_QUERY = `*[_type == "processStep"] | order(order asc){
  _id,
  title,
  description,
  icon,
  order
}`;

// Single Wedding/Case Study
export const WEDDING_QUERY = `*[_type == "wedding" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  date,
  venue,
  location,
  description,
  coverImage,
  gallery,
  category,
  vendors,
  testimonial
}`;

// Single Portfolio Item
export const PORTFOLIO_ITEM_QUERY = `*[_type == "portfolioItem" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  category,
  tags,
  date,
  description,
  mainImage,
  images
}`;
