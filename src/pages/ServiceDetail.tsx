import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, MessageSquare } from "lucide-react";

const serviceDetails = {
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies designed to grow your online presence and drive measurable results for your business.",
    badge: "Marketing Excellence",
    benefits: [
      "Social media marketing across all major platforms",
      "Content marketing and strategy development",
      "Email marketing campaigns with high conversion rates",
      "Influencer marketing and partnerships",
      "Marketing automation and CRM integration",
      "Analytics and performance tracking",
      "Brand positioning and reputation management",
      "Digital strategy consulting"
    ],
    gradient: "from-primary to-blue-500"
  },
  "seo": {
    title: "SEO Optimization",
    description: "Expert search engine optimization services to improve your website's visibility, attract organic traffic, and dominate search rankings.",
    badge: "Search Excellence",
    benefits: [
      "Comprehensive SEO audits and analysis",
      "Keyword research and competitive analysis",
      "On-page optimization and technical SEO",
      "Quality link building and outreach",
      "Local SEO for location-based businesses",
      "Content optimization and SEO copywriting",
      "Google My Business optimization",
      "Monthly reporting and analytics"
    ],
    gradient: "from-accent to-orange-500"
  },
  "app-development": {
    title: "App Development",
    description: "Custom mobile applications for iOS and Android that provide seamless user experiences and drive business efficiency.",
    badge: "Mobile Innovation",
    benefits: [
      "Native iOS and Android app development",
      "Cross-platform development (React Native/Flutter)",
      "UI/UX design for mobile interfaces",
      "App store optimization (ASO)",
      "Maintenance and support",
      "API integration and backend development",
      "Enterprise mobility solutions",
      "Mobile app analytics"
    ],
    gradient: "from-primary to-green-500"
  },
  "outdoor-advertising": {
    title: "Outdoor Advertising & Promotion Activities",
    description: "High-impact outdoor advertising campaigns and promotional activities to increase brand visibility in your local area.",
    badge: "Outdoor Impact",
    benefits: [
      "Billboard and hoarding advertising",
      "Transit and vehicle advertising",
      "Street furniture and kiosk ads",
      "Event promotion and experiential marketing",
      "Flyer and brochure distribution",
      "Local area marketing campaigns",
      "Strategic location planning",
      "Campaign performance monitoring"
    ],
    gradient: "from-accent to-red-600"
  },
  "performance-ads": {
    title: "Performance Ads",
    description: "ROI-focused advertising campaigns across Google, Facebook, Instagram, and more platforms to maximize your advertising investment.",
    badge: "Advertising Power",
    benefits: [
      "Google Ads (Search, Display, Shopping)",
      "Facebook and Instagram advertising",
      "LinkedIn B2B advertising campaigns",
      "YouTube video advertising",
      "Remarketing and retargeting strategies",
      "A/B testing and optimization",
      "Conversion rate optimization",
      "Detailed ROI tracking and reporting"
    ],
    gradient: "from-primary to-cyan-500"
  },
  "led-sign-boards": {
    title: "LED Sign Boards",
    description: "High-quality, eye-catching LED signage solutions that illuminate your brand and attract customers 24/7.",
    badge: "Illuminated Excellence",
    benefits: [
      "Custom LED sign design and fabrication",
      "Indoor and outdoor LED displays",
      "Digital LED menu boards",
      "Neon-style LED signs",
      "Energy-efficient LED technology",
      "Weather-resistant outdoor signs",
      "Installation and maintenance services",
      "Programmable display options"
    ],
    gradient: "from-accent to-red-500"
  },
  "branding": {
    title: "Branding & Graphic Design",
    description: "Create a memorable brand identity with professional logo design, brand guidelines, and comprehensive visual communication solutions.",
    badge: "Brand Identity",
    benefits: [
      "Logo design and brand identity development",
      "Brand strategy and positioning",
      "Complete brand guideline creation",
      "Business card and stationery design",
      "Packaging and label design",
      "Marketing collateral and brochures",
      "Social media graphics and templates",
      "Brand refresh and modernization"
    ],
    gradient: "from-primary to-purple-500"
  },
  "website-landing": {
    title: "Website & Landing Pages",
    description: "Professional, high-converting websites and landing pages built with modern technology and optimized for user experience.",
    badge: "Web Excellence",
    benefits: [
      "Custom website design and development",
      "Mobile-responsive and fast-loading sites",
      "E-commerce website solutions",
      "High-converting landing pages",
      "Content management systems (CMS)",
      "Website maintenance and support",
      "UX/UI design and optimization",
      "Website hosting and security"
    ],
    gradient: "from-accent to-yellow-500"
  },
  "print-media": {
    title: "Print Media Advertising",
    description: "Traditional print advertising that creates lasting impressions through newspapers, magazines, and other print publications.",
    badge: "Print Power",
    benefits: [
      "Newspaper advertisement design and placement",
      "Magazine advertising campaigns",
      "Print ad copywriting and design",
      "Media planning and buying",
      "Classified and display advertisements",
      "Print campaign strategy",
      "Multi-publication advertising",
      "Performance tracking and optimization"
    ],
    gradient: "from-primary to-indigo-500"
  },
  "printing": {
    title: "Flex & Vinyl Printing",
    description: "Professional large-format printing services for banners, posters, vehicle wraps, and promotional materials.",
    badge: "Quality Printing",
    benefits: [
      "Flex banner printing (all sizes)",
      "Vinyl printing for indoor/outdoor use",
      "Vehicle wrap design and installation",
      "Window graphics and decals",
      "Wall graphics and murals",
      "Trade show displays and banners",
      "Point-of-sale displays",
      "Weather-resistant materials"
    ],
    gradient: "from-accent to-pink-500"
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = id ? serviceDetails[id as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Service Not Found</CardTitle>
            <CardDescription>The service you're looking for doesn't exist.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className={`py-20 md:py-32 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-white/90 text-gray-900 border-gray-200">
              {service.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-orange-600 text-white hover:bg-orange-700"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Discuss This Service
              </Button>
              <Button
                onClick={() => navigate("/")}
                size="lg"
                variant="outline"
                className="border-gray-800 text-gray-900 hover:bg-gray-100"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What's Included
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="flex items-start gap-4 pt-6">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <Card className={`mt-16 bg-gradient-to-br ${service.gradient} border-0 animate-scale-in`}>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl md:text-4xl mb-4 text-gray-900">
                  Ready to Get Started?
                </CardTitle>
                <CardDescription className="text-xl text-gray-800">
                  Let's discuss how we can help transform your business with {service.title.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-orange-600 text-white hover:bg-orange-700"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Contact Us Now
                  </Button>
                  <Button
                    onClick={() => navigate("/")}
                    size="lg"
                    variant="outline"
                    className="border-gray-800 text-gray-900 hover:bg-gray-100"
                  >
                    View All Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
