import { Calendar, MapPin, Users, Shield, Headphones, Building, Car, Receipt, Mail } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import ServiceCard from "@/components/ServiceCard";
import InfoSection from "@/components/InfoSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import LocationMap from "@/components/LocationMap";
import CalendarWidget from "@/components/CalendarWidget";
import HeaderNav from "@/components/HeaderNav";

const services = [
  {
    title: "Helpdesk",
    description: "Pelaporan untuk bantuan teknis dan dukungan untuk seluruh karyawan",
    icon: Headphones,
    link: 'https://helpdesk.bumiauto.works',
    color: "bg-bumi-blue"
  },
  {
    title: "Peminjaman Ruangan",
    description: "Booking dan reservasi ruang meeting di Cyber 2 Tower",
    icon: Building,
    link: "#room-booking",
    color: "bg-bumi-light-blue"
  },
  {
    title: "Go-Corp/Grab-Corp",
    description: "Pengajuan transportasi online untuk keperluan bisnis",
    icon: Car,
    link: "#transport",
    color: "bg-bumi-navy"
  },
  {
    title: "Reimburse Biaya Kantor",
    description: "Pengajuan penggantian biaya operasional kantor",
    icon: Receipt,
    link: "#reimburse",
    color: "bg-primary"
  }
];

const coverImages = [
  { src: "/assets/images/foto1.jpg", alt: "Foto Sampul 1" },
  { src: "/assets/images/foto2.jpg", alt: "Foto Sampul 2" },
  { src: "/assets/images/foto3.jpg", alt: "Foto Sampul 3" },
];

const Index = () => {
  const [currentCover, setCurrentCover] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slideshow effect
  useEffect(() => {
    // Clear any previous interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentCover((prev) => (prev + 1) % coverImages.length);
        setFade(false);
      }, 300);
    }, 10000); // 10 seconds

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentCover]);

  // Manual controls: clear interval to avoid double transition
  const nextCover = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setFade(true);
    setTimeout(() => {
      setCurrentCover((prev) => (prev + 1) % coverImages.length);
      setFade(false);
    }, 300);
  };

  const prevCover = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setFade(true);
    setTimeout(() => {
      setCurrentCover((prev) => (prev - 1 + coverImages.length) % coverImages.length);
      setFade(false);
    }, 300);
  };

  const goToCover = (idx: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setFade(true);
    setTimeout(() => {
      setCurrentCover(idx);
      setFade(false);
    }, 300);
  };
  return (
    <div className="min-h-screen bg-bumi-gradient">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <img src="/assets/images/logo bumi auto.png" alt="Bumi Auto Logo" className="h-12 w-auto"/>
                <div className="h-8 w-px bg-gray-300"></div>
              </div>
            </div>
            
            {/* Navigation Menu */}
            <HeaderNav />
          </div>
        </div>
      </header>
      {/* Cover Image Slider */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden mb-8">
        <img
          src={coverImages[currentCover].src}
          alt={coverImages[currentCover].alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
        />
        {/* Prev Button */}
        <button
          onClick={prevCover}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-bumi-navy rounded-full p-2 shadow"
          aria-label="Sebelumnya"
        >
          &#8592;
        </button>
        {/* Next Button */}
        <button
          onClick={nextCover}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-bumi-navy rounded-full p-2 shadow"
          aria-label="Selanjutnya"
        >
          &#8594;
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {coverImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToCover(idx)}
              className={`w-3 h-3 rounded-full ${idx === currentCover ? "bg-bumi-navy" : "bg-white/70"}`}
              aria-label={`Pilih foto ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Selamat Datang di Portal GA & HSE
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Portal terpusat untuk seluruh kebutuhan layanan General Affair dan Health Safety Environment. 
            Untuk memenuhi kebutuhan operasional departemen Bapak/Ibu, kami dari General Affair & HSE Department hadir untuk memberikan pelayanan terbaik buat Anda.
          </p>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Silahkan mengajukan pesanan sesuai kebutuhan Bapak/Ibu di bawah ini. 
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Layanan Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* About Section */}
        {/* <AboutSection /> */}

        {/* Team Section */}
        <TeamSection />

        {/* Info Section */}
        <InfoSection />

        {/* Maps and Calendar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <LocationMap />
          <CalendarWidget />
        </div>

        {/* Contact Information */}
        <section className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-bumi-navy mb-4">Butuh Bantuan?</h3>
          <p className="text-gray-600 mb-6">
            Tim GA & HSE siap membantu Anda. Hubungi kami melalui channel yang tersedia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 bg-bumi-light-blue/20 px-4 py-2 rounded-lg">
              <MapPin className="h-5 w-5 text-bumi-blue" />
              <span className="text-bumi-navy font-medium">Cyber 2 Tower Lt.32</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-bumi-blue/20 px-4 py-2 rounded-lg">
              <Mail className="h-5 w-5 text-bumi-blue" />
              <span className="text-bumi-navy font-medium">helpdesk@hakaauto.co.id</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bumi-navy text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 GA & HSE Portal - Bumi Auto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
