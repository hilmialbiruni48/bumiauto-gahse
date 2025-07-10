
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone, Shield, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Ahmad Wijaya",
    position: "Manager GA & HSE",
    department: "GA & HSE",
    email: "ahmad.wijaya@bumiauto.com",
    phone: "Ext. 5501",
    avatar: "/placeholder.svg",
    initials: "AW",
    description: "Memimpin operasional GA & HSE dengan pengalaman 10+ tahun",
    speciality: "Leadership & Strategy"
  },
  {
    name: "Sari Indrawati",
    position: "Senior GA Officer",
    department: "General Affair",
    email: "sari.indrawati@bumiauto.com",
    phone: "Ext. 5502",
    avatar: "/placeholder.svg",
    initials: "SI",
    description: "Mengelola fasilitas kantor dan layanan administratif",
    speciality: "Facility Management"
  },
  {
    name: "Budi Santoso",
    position: "HSE Specialist",
    department: "Health Safety Environment",
    email: "budi.santoso@bumiauto.com",
    phone: "Ext. 5503",
    avatar: "/placeholder.svg",
    initials: "BS",
    description: "Ahli keselamatan kerja dan audit lingkungan",
    speciality: "Safety & Environment"
  },
  {
    name: "Maya Putri",
    position: "IT Support Coordinator",
    department: "General Affair",
    email: "maya.putri@bumiauto.com",
    phone: "Ext. 5504",
    avatar: "/placeholder.svg",
    initials: "MP",
    description: "Koordinator layanan IT dan technical support",
    speciality: "IT Infrastructure"
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
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-bumi-blue" />
                  <span className="text-gray-600">{member.phone}</span>
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
