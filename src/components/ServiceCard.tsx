

import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color: string;
}

const ServiceCard = ({ title, description, icon: Icon, link, color }: ServiceCardProps) => {
  const handleClick = () => {
    // Redirect to the specified link
    window.open(link, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      
      <h4 className="text-lg font-semibold text-bumi-navy mb-2">{title}</h4>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">{description}</p>
      
      <Button 
        onClick={handleClick}
        className="w-full bg-bumi-navy hover:bg-bumi-blue text-white transition-colors duration-200"
      >
        Akses Layanan
      </Button>
    
    </div>

    
  );
};

export default ServiceCard;

