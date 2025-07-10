

import { Shield, Users, CheckCircle, AlertTriangle } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* General Affair */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-bumi-light-blue/30">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-bumi-blue mr-3" />
            <h3 className="text-2xl font-bold text-bumi-navy">General Affair (GA)</h3>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Divisi General Affair bertanggung jawab dalam mengelola kebutuhan operasional kantor 
            dan memberikan dukungan administratif untuk seluruh karyawan.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-bumi-blue mt-0.5" />
              <span className="text-gray-700">Pengelolaan fasilitas kantor dan maintenance</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-bumi-blue mt-0.5" />
              <span className="text-gray-700">Layanan IT support dan helpdesk</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-bumi-blue mt-0.5" />
              <span className="text-gray-700">Koordinasi transportasi dan akomodasi</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-bumi-blue mt-0.5" />
              <span className="text-gray-700">Pengelolaan inventaris dan pengadaan</span>
            </div>
          </div>
        </div>

        {/* Health Safety Environment */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-bumi-light-blue/30">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-bumi-blue mr-3" />
            <h3 className="text-2xl font-bold text-bumi-navy">Health Safety Environment (HSE)</h3>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Divisi HSE fokus pada penciptaan lingkungan kerja yang aman, sehat, dan ramah lingkungan 
            untuk seluruh karyawan dan stakeholder.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-bumi-light-blue mt-0.5" />
              <span className="text-gray-700">Program keselamatan dan kesehatan kerja</span>
            </div>
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-bumi-light-blue mt-0.5" />
              <span className="text-gray-700">Audit dan inspeksi keselamatan rutin</span>
            </div>
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-bumi-light-blue mt-0.5" />
              <span className="text-gray-700">Pelatihan emergency response</span>
            </div>
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-bumi-light-blue mt-0.5" />
              <span className="text-gray-700">Pengelolaan limbah dan lingkungan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

