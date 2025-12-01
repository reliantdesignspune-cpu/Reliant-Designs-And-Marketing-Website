
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MessageSquare, Share2 } from "lucide-react";
import { blogs } from "../data/blogs";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <Card className="max-w-md">
                    <CardHeader>
                        <CardTitle>Blog Post Not Found</CardTitle>
                        <CardDescription>The article you're looking for doesn't exist.</CardDescription>
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

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        toast({
            title: "Link Copied!",
            description: "Blog post link copied to clipboard.",
        });
    };

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
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center text-white animate-fade-in">
                        <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            <Calendar className="mr-2 h-3 w-3" />
                            {blog.date}
                        </Badge>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                onClick={() => navigate("/")}
                                variant="outline"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Button>
                            <Button
                                onClick={handleShare}
                                variant="outline"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                            >
                                <Share2 className="mr-2 h-4 w-4" />
                                Share Article
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-3xl mx-auto">
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="p-0 space-y-8">
                            {blog.content.map((paragraph, index) => {
                                // Check if paragraph is a heading (starts with **)
                                if (paragraph.startsWith("**")) {
                                    return (
                                        <h3 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                                            {paragraph.replace(/\*\*/g, "")}
                                        </h3>
                                    );
                                }
                                // Check if paragraph is a list item (starts with -)
                                if (paragraph.startsWith("-")) {
                                    return (
                                        <li key={index} className="text-lg text-muted-foreground ml-6 list-disc">
                                            {paragraph.replace("- ", "")}
                                        </li>
                                    );
                                }
                                return (
                                    <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </CardContent>
                    </Card>

                    {/* CTA Section */}
                    <div className="mt-16 p-8 rounded-2xl bg-secondary/30 border border-border text-center animate-fade-in">
                        <h3 className="text-2xl font-bold mb-4">Need Help with Your Business?</h3>
                        <p className="text-muted-foreground mb-6">
                            We can help you implement these strategies and grow your business.
                        </p>
                        <Button onClick={scrollToContact} size="lg" className="gradient-primary">
                            <MessageSquare className="mr-2 h-5 w-5" />
                            Contact Us Today
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
