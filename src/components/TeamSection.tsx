
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone, Shield, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Pak Fajar",
    position: "Manager HCBP GA & HSE",
    department: "HCBP",
    email: "lorem@bumiauto.com",
    phone: "Ext. 5501",
    avatar: "/placeholder.svg",
    initials: "FJ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality: "Lorem ipsum"
  },
  {
    name: "Mas Abi",
    position: "GA Officer",
    department: "General Affair",
    email: "lorem@bumiauto.com",
    phone: "Ext. 5502",
    avatar: "/placeholder.svg",
    initials: "AB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality: "Lorem ipsum"
  },
  {
    name: "Mba Vanya",
    position: "GA Officer",
    department: "General Affair",
    email: "lorem@bumiauto.com",
    phone: "Ext. 5503",
    avatar: "/placeholder.svg",
    initials: "VA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality: "Lorem ipsum"
  },
  {
    name: "Mba Nanad",
    position: "HSE Specialist",
    department: "General Affair",
    email: "lorem@bumiauto.com",
    phone: "Ext. 5504",
    avatar: "/placeholder.svg",
    initials: "NN",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality: "Lorem ipsum"
  }
];

const TeamSection = () => {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Tim Kami</h3>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Tim profesional yang berdedikasi untuk memberikan layanan terbaik 
          dalam bidang General Affair dan Health Safety Environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-white border border-bumi-light-blue/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <Avatar className="h-20 w-20 border-4 border-bumi-light-blue/30">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-bumi-light-blue text-bumi-navy font-semibold text-lg">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <h4 className="text-lg font-bold text-bumi-navy">{member.name}</h4>
              <p className="text-bumi-blue font-medium">{member.position}</p>
              
              <div className="flex items-center justify-center space-x-1 mt-2">
                {member.department === "General Affair" ? (
                  <Users className="h-4 w-4 text-bumi-blue" />
                ) : member.department === "Health Safety Environment" ? (
                  <Shield className="h-4 w-4 text-bumi-blue" />
                ) : (
                  <>
                    <Users className="h-4 w-4 text-bumi-blue" />
                    <Shield className="h-4 w-4 text-bumi-blue" />
                  </>
                )}
                <span className="text-sm text-gray-600">{member.department}</span>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">
                {member.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-bumi-blue" />
                  <span className="text-gray-600 truncate">{member.email}</span>
                </div>
              </div>
              
              <div className="mt-4 p-2 bg-bumi-light-blue/10 rounded-lg">
                <p className="text-xs text-bumi-navy font-medium text-center">
                  {member.speciality}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
