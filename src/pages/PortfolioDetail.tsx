import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, CheckCircle2, MessageSquare, Lightbulb, Target } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { toast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const PortfolioDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = portfolio.find((p) => p.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <Card className="max-w-md">
                    <CardHeader>
                        <CardTitle>Project Not Found</CardTitle>
                        <CardDescription>The portfolio item you're looking for doesn't exist.</CardDescription>
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
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center text-white animate-fade-in">
                        <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            {project.category}
                        </Badge>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl mx-auto leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl mb-6 text-green-400 font-semibold">
                            <CheckCircle2 className="inline mr-2 h-6 w-6" />
                            {project.result}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                onClick={() => navigate("/")}
                                variant="outline"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Gallery Navigation */}
            {project.images.length > 1 && (
                <div className="container mx-auto px-4 py-6">
                    <div className="flex gap-4 justify-center overflow-x-auto">
                        {project.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex
                                    ? "border-primary scale-110"
                                    : "border-transparent opacity-60 hover:opacity-100"
                                    }`}
                            >
                                <img src={image} alt={`${project.title} ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Project Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {project.client && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Client</CardTitle>
                                    <CardDescription>{project.client}</CardDescription>
                                </CardHeader>
                            </Card>
                        )}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-primary" />
                                    Date
                                </CardTitle>
                                <CardDescription>{project.date}</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Category</CardTitle>
                                <CardDescription>{project.category}</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    {/* Challenge & Solution */}
                    {(project.challenge || project.solution) && (
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {project.challenge && (
                                <Card className="border-orange-200 bg-orange-50/50">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-orange-700">
                                            <Target className="h-5 w-5" />
                                            The Challenge
                                        </CardTitle>
                                        <CardDescription className="text-orange-900">{project.challenge}</CardDescription>
                                    </CardHeader>
                                </Card>
                            )}
                            {project.solution && (
                                <Card className="border-green-200 bg-green-50/50">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-green-700">
                                            <Lightbulb className="h-5 w-5" />
                                            Our Solution
                                        </CardTitle>
                                        <CardDescription className="text-green-900">{project.solution}</CardDescription>
                                    </CardHeader>
                                </Card>
                            )}
                        </div>
                    )}

                    {/* Full Description */}
                    <Card className="border-none shadow-none bg-transparent mb-12">
                        <CardContent className="p-0 space-y-6">
                            {project.fullDescription.map((paragraph, index) => {
                                if (paragraph.startsWith("**")) {
                                    return (
                                        <h3 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                                            {paragraph.replace(/\*\*/g, "")}
                                        </h3>
                                    );
                                }
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

                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                        <Card className="mb-12">
                            <CardHeader>
                                <CardTitle>Technologies & Services Used</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <Badge key={index} variant="secondary" className="text-sm">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* CTA Section */}
                    <div className="mt-16 p-8 rounded-2xl bg-secondary/30 border border-border text-center animate-fade-in">
                        <h3 className="text-2xl font-bold mb-4">Want Similar Results for Your Business?</h3>
                        <p className="text-muted-foreground mb-6">
                            Let's discuss how we can help you achieve your business goals.
                        </p>
                        <Button onClick={scrollToContact} size="lg" className="gradient-primary">
                            <MessageSquare className="mr-2 h-5 w-5" />
                            Get Started Today
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetail;
