# Portfolio Management Guide

## How to Add New Portfolio Items

### Step 1: Add Your Project Images
1. Place your project images in the `public/portfolio/` folder
2. Name them descriptively (e.g., `dental-clinic-signage.jpg`, `ecommerce-website-1.jpg`)
3. You can add multiple images per project

### Step 2: Update Portfolio Data
Open `src/data/portfolio.ts` and add a new project object to the `portfolio` array:

```typescript
{
  id: "unique-project-id",  // Use lowercase with hyphens
  title: "Project Title",
  category: "Digital Marketing", // or "Website Development", "LED Signage", etc.
  shortDescription: "Brief result description",
  fullDescription: [
    "First paragraph describing the project...",
    "**Section Heading:**",
    "More details about the project...",
    "**1. Point One:** Description",
    "**2. Point Two:** Description"
  ],
  result: "Main achievement or result",
  images: [
    "/portfolio/your-image-1.jpg",
    "/portfolio/your-image-2.jpg"
  ],
  client: "Client Name (optional)",
  date: "Month Year",
  challenge: "What problem needed solving (optional)",
  solution: "How you solved it (optional)",
  technologies: ["Tech 1", "Tech 2"] // optional
}
```

### Step 3: Save and Test
The website will automatically update! Click on your new portfolio item to see the detail page.

## Image Guidelines
- **Format:** JPG or PNG
- **Size:** Recommended 800x600px or larger
- **Quality:** High resolution for best display
- **Naming:** Use descriptive names with hyphens (e.g., `led-sign-board-clinic.jpg`)

## Formatting Tips for Full Description
- Use `**Text:**` for bold headings
- Start numbered lists with `**1.`, `**2.`, etc.
- Each array item is a new paragraph
- Use `- ` at the start for bullet points

## Example Categories
- Digital Marketing
- Website Development
- LED Signage
- SEO & Local Search
- Branding & Design
- Print Media

---

**Need Help?** The portfolio system is designed to be simple. Just add your images to the folder and update the data file!
