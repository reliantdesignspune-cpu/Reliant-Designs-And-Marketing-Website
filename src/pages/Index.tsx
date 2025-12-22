import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Rocket, Target, Zap, Users, Briefcase, BookOpen, MessageCircle, Star, Smartphone, Megaphone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import logo from '../Assets/logo.png';
import { blogs } from "../data/blogs";
import { portfolio } from "../data/portfolio";
import PopupForm from "@/components/PopupForm";
import ApplicationForm from "@/components/ApplicationForm";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const carouselImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
];

const services = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Comprehensive digital strategies to grow your online presence",
    icon: Rocket,
    gradient: "from-primary to-blue-500"
  },
  {
    id: "website-landing",
    title: "Website & Landing Pages",
    description: "High-converting websites that drive business growth",
    icon: Target,
    gradient: "from-accent to-yellow-500"
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Custom mobile applications for iOS and Android",
    icon: Smartphone,
    gradient: "from-primary to-green-500"
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description: "Rank higher on search engines and attract organic traffic",
    icon: Target,
    gradient: "from-accent to-orange-500"
  },
  {
    id: "performance-ads",
    title: "Performance Ads",
    description: "ROI-focused advertising campaigns that deliver results",
    icon: Zap,
    gradient: "from-primary to-cyan-500"
  },
  {
    id: "branding",
    title: "Branding & Graphic Design",
    description: "Create memorable brand identities that stand out",
    icon: Rocket,
    gradient: "from-primary to-purple-500"
  },
  {
    id: "outdoor-advertising",
    title: "Outdoor Advertising & Promotion Activities",
    description: "Impactful outdoor campaigns that reach your local audience",
    icon: Megaphone,
    gradient: "from-accent to-red-600"
  },
  {
    id: "led-sign-boards",
    title: "LED Sign Boards",
    description: "Eye-catching illuminated signage for your business",
    icon: Zap,
    gradient: "from-accent to-red-500"
  },
  {
    id: "print-media",
    title: "Print Media Advertising",
    description: "Traditional advertising that creates lasting impressions",
    icon: BookOpen,
    gradient: "from-primary to-indigo-500"
  },
  {
    id: "printing",
    title: "Flex & Vinyl Printing",
    description: "High-quality printing for banners, posters, and more",
    icon: Briefcase,
    gradient: "from-accent to-pink-500"
  }
];

const testimonials = [
  {
    name: "Jagdish Auwa",
    business: "3 reviews • 1 photo",
    rating: 5,
    review: "Highly impressed with the backlit board designed by Reliant Designs and Marketing in Baner-Balewadi, Pune! The lighting is bright, the finish looks premium, and the board really stands out beautifully at night. Their team guided us with the best material & design options and delivered on time. If you're looking for premium signage and visibility for your business, I strongly recommend Reliant Designs & Marketing — truly professionals in signage and branding!",
    image: "https://ui-avatars.com/api/?name=Jagdish+Auwa&background=5B21B6&color=fff&size=150",
    timeAgo: "4 weeks ago"
  },
  {
    name: "Krishna Tompe",
    business: "3 reviews • 2 photos",
    rating: 5,
    review: "Best Printing & Sign Board Service in Baner Balewadi Pune! I recently got my LED Sign Board and Acrylic Board made from Reliant Designs And Marketing, and the quality was absolutely amazing! The Flex Printing was vibrant, long-lasting, and perfectly finished. Their graphic design team is very creative and helped me design an attractive layout for my brand. The work was delivered on time and at very reasonable prices. Highly recommended for anyone looking for professional printing, branding, and sign board services in Baner Balewadi, Pune.",
    image: "https://ui-avatars.com/api/?name=Krishna+Tompe&background=DC2626&color=fff&size=150",
    timeAgo: "5 weeks ago"
  },
  {
    name: "Sumit Dhaigude",
    business: "Local Guide • 7 reviews • 21 photos",
    rating: 5,
    review: "Excellent work and very creative people. Supportive staff and fast delivery. High recommended",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJxYz8qVQZqK5vK9wZ8xK5vK9wZ8xK5vK9wZ8xK5vK9wZ8=s150-c",
    timeAgo: "9 weeks ago"
  },
  {
    name: "Shreeganesh Thatwale",
    business: "Local Guide • 4 reviews • 19 photos",
    rating: 5,
    review: "Reliant Design And Marketing is do So exclusive work and nice creation, Beautiful Design Editing, All Work Is Almost Wonderful. But But But... (यांच्या मार्केट मधे तुम्हाला पूर्ण पुणात भेटणार नाही बर का...) ❤️💝 ALL TYPES OF ADVERTISEMENT AND MARKETING RELATED ALL WORKS HERE.. ★ FLEX PRINTING ★ LED BOARD'S ★ GRAPHIC DESIGNS ★ SOCIAL MEDIA MARKETING ★ GOOGLE/META ADS ★ WEBSITE DEVELOPMENT ★ SEO ★ SEM ★ VIDEO EDITING ★ OFFLINE MARKETING'S ★ GOOGLE BUSINESS PROFILE CREATION.",
    image: "https://ui-avatars.com/api/?name=Shreeganesh+Thatwale&background=2563EB&color=fff&size=150",
    timeAgo: "11 weeks ago"
  },
  {
    name: "Shilen Nimbalkar",
    business: "3 reviews • 2 photos",
    rating: 5,
    review: "Awesome and prompt service of advertising and marketing by them. Very supportive behaviour. Wish you all the best for the future !!!!",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWxK5vK9wZ8xK5vK9wZ8xK5vK9wZ8xK5vK9wZ8=s150-c",
    timeAgo: "19 Oct 2024"
  },
  {
    name: "Shwetik",
    business: "1 review • 0 photos",
    rating: 5,
    review: "We had a best experience with Reliant. They design our flex and LED board and advertising, they do the work very fast and good quality",
    image: "https://ui-avatars.com/api/?name=Shwetik&background=0EA5E9&color=fff&size=150",
    timeAgo: "11 weeks ago"
  },
  {
    name: "Madan Jadhav",
    business: "7 reviews • 0 photos",
    rating: 5,
    review: "Quality Leads, Quality Digital Marketing, Quality Service. I suggest that if you wants to digitalise just go with .....reliant desigs and marketing......keep up the good work team... good Work Pradeep ...",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKxYz8qVQZqK5vK9wZ8xK5vK9wZ8xK5vK9wZ8xK5vK9wZ8=s150-c",
    timeAgo: "1 year ago"
  },
  {
    name: "VIKRAM PARDESHI",
    business: "5 reviews • 0 photos",
    rating: 5,
    review: "Very good quality service for advertising work and 3d led Board. And very Good Designing team and good work. We are highly recommended Reliant Designs and marketing for advertising and digital marketing work.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXxK5vK9wZ8xK5vK9wZ8xK5vK9wZ8xK5vK9wZ8=s150-c",
    timeAgo: "23 weeks ago"
  },
  {
    name: "Tushar Raut",
    business: "Local Guide • 9 reviews • 25 photos",
    rating: 5,
    review: "Excellent service. Very cooperative team. Reasonable rates compared to market. Good quality",
    image: "https://ui-avatars.com/api/?name=Tushar+Raut&background=EC4899&color=fff&size=150",
    timeAgo: "22 Nov 2024"
  },
  {
    name: "Kartik Chalak",
    business: "2 reviews • 0 photos",
    rating: 5,
    review: "Very nice place for vinyl printing and offset printing like letterhead, pamplate printing, sticker printing and all types of offset printing. I specially thanks to reliant design and marketing for help me to growing my business.",
    image: "https://ui-avatars.com/api/?name=Kartik+Chalak&background=10B981&color=fff&size=150",
    timeAgo: "14 weeks ago"
  },
  {
    name: "Vishal Dhale",
    business: "5 reviews • 11 photos",
    rating: 5,
    review: "Very good work from reliant designs and marketing for led board and furniture shop board, He is very professional and helping behavior. i personally recommended for reliant designs and marketing for led boards and acrylic boards and flex printing work as well as all digital marketing and social media marketing.",
    image: "https://ui-avatars.com/api/?name=Vishal+Dhale&background=F59E0B&color=fff&size=150",
    timeAgo: "14 weeks ago"
  },
  {
    name: "Vaibhav Raje Bhosale",
    business: "6 reviews • 0 photos",
    rating: 5,
    review: "Good service for acrylic led board and society/office name board. Good in Google business profile creation and social media marketing",
    image: "https://ui-avatars.com/api/?name=Vaibhav+Raje+Bhosale&background=EC4899&color=fff&size=150",
    timeAgo: "14 weeks ago"
  },
  {
    name: "Rajesh Waghmare",
    business: "5 reviews • 0 photos",
    rating: 5,
    review: "Very good work he is solve my issue regarding my Google business profile. Thank to reliant designs and marketing for helping me to reopen my business profile. He is very good in Google business profile creating and for search engine ranking. And he also provide works related to flex printing and LED board making and visiting cards making.",
    image: "https://ui-avatars.com/api/?name=Rajesh+Waghmare&background=6366F1&color=fff&size=150",
    timeAgo: "14 weeks ago"
  },
  {
    name: "Ashish Singh",
    business: "4 reviews • 1 photo",
    rating: 5,
    review: "Very supportive behavior and good quality work of my backlit board. Thank for helping.",
    image: "https://ui-avatars.com/api/?name=Ashish+Singh&background=8B5CF6&color=fff&size=150",
    timeAgo: "16 weeks ago"
  },
  {
    name: "piyush Kajale",
    business: "1 review • 15 photos",
    rating: 5,
    review: "Good for dr file printing and offset printing. Making Good Quality LED boards",
    image: "https://ui-avatars.com/api/?name=Piyush+Kajale&background=7C2D12&color=fff&size=150",
    timeAgo: "19 weeks ago"
  }
];


const clients = [
  "Tayal Corp", "SR Group", "9Ultra Realty",
  "Shreeram Netralay", "Portico Designs", "Urban Architecture",
  "MJ Solutions", "Elite Fitness", "Thomas Cook",
  "Small Business Owners", "Javed Habib Saloon", "Primalbase Fitness"
];

const jobs = [
  {
    title: "Digital Marketing Specialist",
    type: "Full-time",
    location: "Pune, Maharashtra",
    description: "Experienced professional to manage digital campaigns and social media strategy"
  },
  {
    title: "Graphic Designer",
    type: "Full-time",
    location: "Pune, Maharashtra",
    description: "Creative designer with expertise in branding and visual communication"
  },
  {
    title: "Sales Executive",
    type: "Full-time",
    location: "Pune, Maharashtra",
    description: "Dynamic sales professional to drive business growth and client acquisition"
  }
];

const Index = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show loading state if you wanted to add one, but for now we'll just send
    emailjs.send(
      'service_xmbs3df', // Your Service ID
      'template_joy96ab', // Your Template ID
      {
        name: formData.name,
        to_name: "Reliant Designs",
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        reply_to: formData.email,
      },
      '9kuJj1VIdBRFAiSka' // Your Public Key
    )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      }, (error) => {
        console.error('FAILED...', error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again or contact us directly.",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">

            {/* Logo + Brand Name Group */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Reliant Designs And Marketing"
                className="h-12 w-auto object-contain drop-shadow-sm"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-gradient">
                  Reliant Designs And Marketing
                </h1>
                <p className="text-xs text-muted-foreground">Crafting Brands With Strategy, Design & Smart Advertising</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("hero")} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection("clients")} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Our Clients
              </button>
              <button onClick={() => scrollToSection("careers")} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Careers
              </button>
              <button onClick={() => scrollToSection("blogs")} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Blogs
              </button>
              <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-slide-up border-t border-gray-100 pt-4">
              <button onClick={() => scrollToSection("hero")} className="text-left text-gray-700 hover:text-primary transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-left text-gray-700 hover:text-primary transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection("clients")} className="text-left text-gray-700 hover:text-primary transition-colors font-medium">
                Our Clients
              </button>
              <button onClick={() => scrollToSection("careers")} className="text-left text-gray-700 hover:text-primary transition-colors font-medium">
                Careers
              </button>
              <button onClick={() => scrollToSection("blogs")} className="text-left text-gray-700 hover:text-primary transition-colors font-medium">
                Blogs
              </button>
              <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-md hover:shadow-lg transition-all duration-300 w-full">
                Contact Us
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">Creative Agency</Badge>
                <Badge variant="secondary" className="text-sm">Digital Marketing</Badge>
                <Badge variant="secondary" className="text-sm">Design Excellence</Badge>
                <Badge variant="secondary" className="text-sm">Website Development</Badge>
                <Badge variant="secondary" className="text-sm">Advertising</Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Elevate Your Brand to{" "}
                <span className="text-gradient">New Heights</span>
              </h1>

              <p className="text-xl text-muted-foreground">
                Transform your business with cutting-edge digital marketing, stunning designs, and innovative solutions that drive real results.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection("services")} size="lg" className="gradient-primary">
                  Explore Services
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button onClick={() => scrollToSection("contact")} size="lg" variant="outline">
                  Get Started
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden animate-fade-in-right">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
                      ? "bg-white w-8"
                      : "bg-white/50"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Services Section */}
      < section id="services" className="py-20 bg-secondary/30" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Solutions for Your Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From digital marketing to physical signage, we offer everything you need to succeed
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors">
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section >

      {/* Our Works */}
      < section id="works" className="py-20" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Recent Works</h2>
            <p className="text-xl text-muted-foreground">
              Real results for real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={project.id}
                onClick={() => navigate(`/portfolio/${project.id}`)}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {project.category}
                  </Badge>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-accent font-semibold">
                    {project.result}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section >

      {/* Clients */}
      < section id="clients" className="py-20 bg-secondary/30" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Trusted By</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Valued Clients</h2>
          </div>

          <div className="relative overflow-hidden px-4">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-1">
                {clients.map((client, index) => (
                  <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="p-1">
                      <div className="flex items-center justify-center p-6 bg-card rounded-lg border border-border h-full">
                        <span className="text-lg font-semibold text-center">{client}</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section >

      {/* Testimonials & Google Reviews */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real reviews from real businesses we've helped grow
            </p>
          </div>

          <div className="relative overflow-hidden px-4">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-1">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                              <CardDescription className="text-sm">{testimonial.business}</CardDescription>
                              <div className="flex items-center gap-2 mt-2">
                                <div className="flex gap-1">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                                <span className="text-xs text-muted-foreground">{testimonial.timeAgo}</span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground italic line-clamp-4">"{testimonial.review}"</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Google Reviews Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-border">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5.0</span>
              <span className="text-muted-foreground">on Google Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      < section id="careers" className="py-20" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Join Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Current Openings</h2>
            <p className="text-xl text-muted-foreground">
              Be part of a creative and dynamic team
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{job.type}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      onClick={() => setSelectedJob(job.title)}
                      className="bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Apply Now
                    </Button>
                  </div>
                  <CardDescription className="mt-4">{job.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section >

      {/* Blogs */}
      < section id="blogs" className="py-20 bg-secondary/30" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Our Blog</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-muted-foreground">
              Expert tips and industry trends
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card
                key={index}
                onClick={() => navigate(`/blogs/${blog.id}`)}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {blog.date}
                  </Badge>
                  <CardTitle className="hover:text-primary transition-colors">
                    {blog.title}
                  </CardTitle>
                  <CardDescription>{blog.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section >

      {/* Contact */}
      < section id="contact" className="py-20" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Start a Conversation</h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-in-left">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-orange-600" />
                    Phone
                  </CardTitle>
                  <CardDescription className="text-base">
                    +91 78752 65561  /  +91 98342 05278
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-orange-600" />
                    Email
                  </CardTitle>
                  <CardDescription className="text-base">
                    info@reliantdesignsandmarketing.com
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    Address
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Reliant Designs And Marketing<br />
                    Shop No. 15, Kakkad Madhukosh Society,<br />
                    near Yashoda Chowk, Balewadi,<br />
                    Pune, Maharashtra 411045
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="animate-fade-in-right">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white shadow-md hover:shadow-lg transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-card border-t border-border py-12" >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Reliant Designs And Marketing
              </h3>
              <p className="text-muted-foreground">
                Your trusted partner for digital marketing, design, and business growth solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection("services")} className="block hover:text-primary transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection("works")} className="block hover:text-primary transition-colors">
                  Our Works
                </button>
                <button onClick={() => scrollToSection("careers")} className="block hover:text-primary transition-colors">
                  Careers
                </button>
                <button onClick={() => scrollToSection("blogs")} className="block hover:text-primary transition-colors">
                  Blog
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-muted-foreground">
                <a
                  href="https://maps.google.com/?q=Reliant+Designs+And+Marketing,+Shop+No.+15,+Kakkad+Madhukosh+Society,+near+Yashoda+Chowk,+Balewadi,+Pune,+Maharashtra+411045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-primary transition-colors cursor-pointer group"
                >
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p>Shop No. 15, Kakkad Madhukosh Society</p>
                    <p>near Yashoda Chowk, Balewadi</p>
                    <p>Pune, Maharashtra 411045</p>
                    <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">Click to view on Google Maps</span>
                  </div>
                </a>
                <a href="tel:+917875265561" className="flex items-center gap-2 mt-4 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 78752 65561</span>
                </a>
                <a href="mailto:info@reliantdesignsandmarketing.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@reliantdesignsandmarketing.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Reliant Designs And Marketing. All rights reserved.</p>
          </div>
        </div>
      </footer >

      {/* WhatsApp Floating Button */}
      {selectedJob && (
        <ApplicationForm
          jobTitle={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
      <PopupForm />

      <a
        href="https://wa.me/917875265561"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-float z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      <style>{`
        @keyframes slide-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
