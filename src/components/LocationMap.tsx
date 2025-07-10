

import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationMap = () => {
  const openGoogleMaps = () => {
    // Example coordinates for Jakarta - replace with actual office coordinates
    const mapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.283593239512!2d106.8325905!3d-6.2262903000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f96ef78ef8bf%3A0x5f977fd63b4489a3!2sCyber%202%20Tower!5e0!3m2!1sen!2sid!4v1752119286945!5m2!1sen!2sid";
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-bumi-light-blue/30">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MapPin className="h-6 w-6 text-bumi-blue" />
            <h3 className="text-xl font-bold text-bumi-navy">Lokasi Kantor</h3>
          </div>
          <Button 
            onClick={openGoogleMaps}
            size="sm"
            variant="outline"
            className="flex items-center space-x-1 border-bumi-blue text-bumi-blue hover:bg-bumi-blue hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Buka di Maps</span>
          </Button>
        </div>
      </div>
      
      <div className="relative h-64 overflow-hidden">
        {/* Interactive Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.283593239512!2d106.8325905!3d-6.2262903000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f96ef78ef8bf%3A0x5f977fd63b4489a3!2sCyber%202%20Tower!5e0!3m2!1sen!2sid!4v1752119286945!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </div>
      
      <div className="p-6">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-bumi-navy">Alamat:</span> Lantai 32 JL. H R Rasuna Said X-5 No Kuningan Timur Setiabudi, Jakarta Selatan, DKI Jakarta
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-bumi-navy">Kode Pos:</span> 12950
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-bumi-navy">Jam Operasional:</span> 08:00 - 17:00 WIB
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;

