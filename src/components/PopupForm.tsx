import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PopupForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "",
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            // Check if user has already closed the popup in this session
            const hasClosedPopup = sessionStorage.getItem("hasClosedPopup");
            if (!hasClosedPopup) {
                setIsVisible(true);
            }
        }, 15000); // 15 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("hasClosedPopup", "true");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hello, I'm interested in your services.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}`;
        window.open(`https://wa.me/917875265561?text=${message}`, "_blank");
        handleClose();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in p-4">
            <Card className="w-full max-w-md relative shadow-2xl animate-scale-in bg-white">
                <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>
                <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-center text-primary">Quick Inquiry</CardTitle>
                    <p className="text-center text-muted-foreground text-sm">
                        Get a quick quote or consultation via WhatsApp
                    </p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="h-12 bg-white text-black border-gray-200"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                placeholder="Phone Number"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                                className="h-12 bg-white text-black border-gray-200"
                            />
                        </div>
                        <div className="space-y-2">
                            <Select
                                value={formData.service}
                                onValueChange={(value) => setFormData({ ...formData, service: value })}
                                required
                            >
                                <SelectTrigger className="h-12 bg-white text-black border-gray-200">
                                    <SelectValue placeholder="Select Service" />
                                </SelectTrigger>
                                <SelectContent className="bg-white z-[110] text-black">
                                    <SelectItem value="Digital Marketing" className="text-black hover:bg-gray-100 hover:text-[#ea580c] hover:font-bold focus:bg-gray-100 focus:text-[#ea580c] focus:font-bold cursor-pointer transition-colors">Digital Marketing</SelectItem>
                                    <SelectItem value="Website Development" className="text-black hover:bg-gray-100 hover:text-[#ea580c] hover:font-bold focus:bg-gray-100 focus:text-[#ea580c] focus:font-bold cursor-pointer transition-colors">Website Development</SelectItem>
                                    <SelectItem value="SEO Services" className="text-black hover:bg-gray-100 hover:text-[#ea580c] hover:font-bold focus:bg-gray-100 focus:text-[#ea580c] focus:font-bold cursor-pointer transition-colors">SEO Services</SelectItem>
                                    <SelectItem value="LED Signage" className="text-black hover:bg-gray-100 hover:text-[#ea580c] hover:font-bold focus:bg-gray-100 focus:text-[#ea580c] focus:font-bold cursor-pointer transition-colors">LED Signage</SelectItem>
                                    <SelectItem value="Flex Printing" className="text-black hover:bg-gray-100 hover:text-[#ea580c] hover:font-bold focus:bg-gray-100 focus:text-[#ea580c] focus:font-bold cursor-pointer transition-colors">Flex Printing</SelectItem>
                                    <SelectItem value="Vinyl Printing" className="text-black hover:bg-gray-100 hover:text-[#ea580c] hover:font-bold focus:bg-gray-100 focus:text-[#ea580c] focus:font-bold cursor-pointer transition-colors">Vinyl Printing</SelectItem>
                                    <SelectItem value="Other" className="text-black hover:bg-gray-100 hover:text-[#ea580c] hover:font-bold focus:bg-gray-100 focus:text-[#ea580c] focus:font-bold cursor-pointer transition-colors">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button
                            type="submit"
                            className="w-full h-12 text-lg font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Chat on WhatsApp
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default PopupForm;
