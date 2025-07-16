
import { Building2, Users, Award, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Tentang Kami</h3>
        <p className="text-xl text-white/90 max-w-4xl mx-auto">
          GA & HSE Portal adalah pusat layanan terpadu yang menghubungkan seluruh kebutuhan 
          operasional dan keselamatan kerja di Bumi Auto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
          <Building2 className="h-12 w-12 text-white mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-white mb-2">Fasilitas Modern</h4>
          <p className="text-white/80 text-sm">
            Infrastruktur kantor yang lengkap dan terintegrasi untuk mendukung produktivitas
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
          <Users className="h-12 w-12 text-white mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-white mb-2">Tim Profesional</h4>
          <p className="text-white/80 text-sm">
            Tenaga ahli berpengalaman dalam bidang General Affair dan Health Safety Environment
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
          <Award className="h-12 w-12 text-white mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-white mb-2">Standar Tinggi</h4>
          <p className="text-white/80 text-sm">
            Komitmen pada kualitas layanan dan keselamatan kerja dengan standar internasional
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
          <Target className="h-12 w-12 text-white mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-white mb-2">Fokus Pelayanan</h4>
          <p className="text-white/80 text-sm">
            Mengutamakan kepuasan dan kebutuhan seluruh karyawan Bumi Auto
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 border border-bumi-light-blue/30">
        <div className="text-center">
          <h4 className="text-2xl font-bold text-bumi-navy mb-6">Visi & Misi</h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h5 className="text-xl font-semibold text-bumi-blue mb-4">Visi</h5>
              <p className="text-gray-600 leading-relaxed">
                Menjadi divisi pendukung terdepan yang menciptakan lingkungan kerja yang aman, 
                nyaman, dan produktif untuk seluruh keluarga besar Bumi Auto.
              </p>
            </div>
            
            <div>
              <h5 className="text-xl font-semibold text-bumi-blue mb-4">Misi</h5>
              <ul className="text-gray-600 text-left space-y-2">
                <li>• Memberikan layanan administratif dan operasional yang prima</li>
                <li>• Memastikan keselamatan dan kesehatan kerja karyawan</li>
                <li>• Mengelola fasilitas kantor dengan efektif dan efisien</li>
                <li>• Mendukung pencapaian tujuan strategis perusahaan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
