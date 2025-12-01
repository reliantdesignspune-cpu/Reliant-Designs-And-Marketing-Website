export interface PortfolioProject {
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    fullDescription: string[];
    result: string;
    images: string[];
    client?: string;
    date: string;
    challenge?: string;
    solution?: string;
    technologies?: string[];
}

export const portfolio: PortfolioProject[] = [
    {
        id: "ecommerce-growth",
        title: "E-commerce Growth Campaign",
        category: "Digital Marketing",
        shortDescription: "300% increase in online sales",
        fullDescription: [
            "We partnered with a growing e-commerce retailer to transform their digital presence and drive significant sales growth through a comprehensive digital marketing strategy.",
            "**The Challenge:** The client was struggling with low online visibility, poor conversion rates, and limited brand awareness in a competitive market.",
            "**Our Strategy:**",
            "**1. Social Media Advertising:** Created targeted campaigns on Facebook and Instagram focusing on lookalike audiences and retargeting.",
            "**2. Email Marketing:** Developed automated email sequences for cart abandonment, welcome series, and post-purchase follow-ups.",
            "**3. Influencer Partnerships:** Collaborated with micro-influencers in the niche to build authentic brand awareness.",
            "**4. Content Marketing:** Produced engaging product videos and user-generated content campaigns.",
            "**Results:** Within 6 months, the client saw a 300% increase in online sales, 250% growth in website traffic, and a 45% improvement in conversion rate."
        ],
        result: "300% increase in online sales within 6 months",
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
        ],
        date: "December 2024",
        challenge: "Low online visibility and poor conversion rates in competitive market",
        solution: "Multi-channel digital marketing strategy with focus on social media, email automation, and influencer partnerships"
    },
    {
        id: "healthcare-marketing",
        title: "Healthcare Digital Marketing",
        category: "Digital Marketing",
        shortDescription: "Doctors, Clinics & Hospitals - 250% patient inquiries",
        fullDescription: [
            "We specialize in digital marketing for healthcare providers, helping doctors, clinics, and hospitals attract more patients through strategic online campaigns.",
            "**Our Healthcare Marketing Expertise:**",
            "**1. Google Ads for Healthcare:** Targeted campaigns for specific medical services and treatments with location-based targeting.",
            "**2. Social Media Management:** Professional presence on Facebook and Instagram with patient education content and health tips.",
            "**3. Reputation Management:** Systematic approach to generating and managing online reviews on Google and healthcare platforms.",
            "**4. Website Optimization:** Medical practice websites optimized for patient inquiries and appointment bookings.",
            "**Case Study - Multi-Specialty Clinic:** A clinic in Baner saw a 250% increase in patient inquiries within 3 months through our comprehensive digital strategy.",
            "**Compliance:** All campaigns are HIPAA-compliant and follow medical advertising guidelines."
        ],
        result: "250% increase in patient inquiries",
        images: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
        ],
        client: "Multiple Healthcare Providers in Pune",
        date: "November 2024",
        challenge: "Healthcare providers struggling to attract new patients in competitive local market",
        solution: "Specialized healthcare digital marketing with Google Ads, social media, and reputation management"
    },
    {
        id: "small-business-websites",
        title: "Small Business Website Development",
        category: "Website Development",
        shortDescription: "Professional websites for local businesses",
        fullDescription: [
            "We create professional, mobile-responsive websites tailored for small and local businesses that want to establish a strong online presence.",
            "**What We Deliver:**",
            "**1. Custom Design:** Unique designs that reflect your brand identity and appeal to your target audience.",
            "**2. Mobile-First Approach:** Fully responsive websites that look great on all devices.",
            "**3. SEO Optimization:** Built-in SEO best practices to help you rank in local search results.",
            "**4. Easy Management:** Simple content management systems that allow you to update your site without technical knowledge.",
            "**5. Fast Loading:** Optimized for speed to provide the best user experience.",
            "**Typical Features:** Contact forms, Google Maps integration, image galleries, service pages, testimonials, and social media integration.",
            "**Perfect for:** Restaurants, salons, clinics, retail stores, professional services, and local businesses."
        ],
        result: "Professional websites delivered on time and budget",
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        ],
        date: "October 2024",
        technologies: ["React", "Tailwind CSS", "Responsive Design", "SEO Optimization"]
    },
    {
        id: "ecommerce-platforms",
        title: "E-commerce Platform Development",
        category: "Website Development",
        shortDescription: "Full-featured online stores with payment integration",
        fullDescription: [
            "We build complete e-commerce solutions that enable businesses to sell products online with secure payment processing and efficient order management.",
            "**E-commerce Features:**",
            "**1. Product Management:** Easy-to-use admin panel for managing products, categories, inventory, and pricing.",
            "**2. Shopping Cart:** Intuitive shopping cart with product variations, quantity selection, and wish lists.",
            "**3. Payment Gateway Integration:** Secure integration with Razorpay, PayU, and other popular payment gateways.",
            "**4. Order Management:** Complete order tracking system from placement to delivery.",
            "**5. Customer Accounts:** User registration, login, order history, and profile management.",
            "**6. Mobile Commerce:** Fully optimized for mobile shopping experience.",
            "**Additional Features:** Coupon codes, shipping calculations, tax management, email notifications, and analytics dashboard.",
            "**Technologies:** Built with modern frameworks for scalability and performance."
        ],
        result: "Complete e-commerce solutions with payment integration",
        images: [
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
        ],
        date: "September 2024",
        technologies: ["React", "Payment Gateway Integration", "Inventory Management", "Order Tracking"]
    },
    {
        id: "led-signage-work",
        title: "3D & 2D LED Sign Boards",
        category: "LED Signage",
        shortDescription: "Acrylic cutting, Glow sign boards (Backlit) with installation",
        fullDescription: [
            "We specialize in creating eye-catching LED sign boards that make your business stand out, day and night.",
            "**Our LED Signage Services:**",
            "**1. 3D Acrylic Letter Cutting:** Premium 3D letters with LED backlighting for a modern, professional look.",
            "**2. 2D Sign Boards:** Cost-effective flat LED signs perfect for storefronts and indoor displays.",
            "**3. Backlit Glow Sign Boards:** Illuminated signs that create a stunning glow effect, visible from a distance.",
            "**4. Neon-Style LED Signs:** Modern LED alternatives to traditional neon with lower power consumption.",
            "**Complete Installation:** Our experienced team handles everything from design to installation, ensuring perfect mounting and electrical connections.",
            "**Materials:** We use high-quality acrylic, weather-resistant LEDs, and durable mounting hardware.",
            "**Perfect for:** Retail stores, restaurants, clinics, offices, showrooms, and any business wanting to increase visibility."
        ],
        result: "Professional signage with complete installation",
        images: [
            "/led-signage-work.jpg"
        ],
        date: "August 2024",
        technologies: ["3D Acrylic Cutting", "LED Technology", "Backlit Design", "Professional Installation"]
    },
    {
        id: "gmb-ranking",
        title: "Local Business GMB Profile Ranking",
        category: "SEO & Local Search",
        shortDescription: "Top 3 Google Maps ranking for local businesses",
        fullDescription: [
            "We help local businesses dominate Google Maps and local search results through expert Google My Business optimization.",
            "**Why GMB Matters:** When customers search for services 'near me', Google shows the Local Pack (map results) first. Being in the top 3 is crucial for local businesses.",
            "**Our GMB Optimization Process:**",
            "**1. Complete Profile Setup:** Verify and optimize every section of your GMB profile with accurate business information.",
            "**2. Keyword Strategy:** Strategic use of relevant keywords in business description and services without spamming.",
            "**3. Review Generation:** Proven strategies to generate authentic 5-star reviews from satisfied customers.",
            "**4. Review Management:** Professional responses to all reviews, building trust and engagement.",
            "**5. Regular Posts:** Weekly updates with offers, news, and engaging content to keep your profile active.",
            "**6. Photo & Video Optimization:** High-quality images of your business, products, and services.",
            "**Results:** Our clients consistently rank in the top 3 local pack, resulting in more calls, directions, and website visits."
        ],
        result: "Top 3 Google Maps ranking for local businesses",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        ],
        date: "July 2024",
        challenge: "Local businesses invisible in Google Maps search results",
        solution: "Comprehensive GMB optimization with review management and regular content updates"
    }
];
