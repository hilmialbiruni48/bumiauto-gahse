

import { Calendar as CalendarIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CalendarWidget = () => {
  const openGoogleCalendar = () => {
    window.open('https://calendar.google.com', '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-bumi-light-blue/30">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CalendarIcon className="h-6 w-6 text-bumi-blue" />
            <h3 className="text-xl font-bold text-bumi-navy">Kalender Kegiatan</h3>
          </div>
          <Button 
            onClick={openGoogleCalendar}
            size="sm"
            variant="outline"
            className="flex items-center space-x-1 border-bumi-blue text-bumi-blue hover:bg-bumi-blue hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Buka Google Calendar</span>
          </Button>
        </div>
      </div>
      
      <div className="relative h-96 overflow-hidden">
        {/* Interactive Google Calendar Embed */}
        <iframe
          src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
          width="100%" 
          height="100%"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
          style={{ border: 0 }}
        />
      </div>
      
      {/* <div className="p-6 border-t border-gray-100">
        <h4 className="font-semibold text-bumi-navy mb-3">Informasi Kalender</h4>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            • Lihat jadwal kegiatan GA & HSE
          </p>
          <p className="text-sm text-gray-600">
            • Pelatihan K3 dan Audit HSE
          </p>
          <p className="text-sm text-gray-600">
            • Meeting dan acara penting lainnya
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default CalendarWidget;

