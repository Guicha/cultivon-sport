import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Map = () => {
  const address = "12 Rue des Sportifs, 75015 Paris, Île-de-France";
  const phone = "01 23 45 67 89";
  const email = "contact@cultivonsport.fr";

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-8 pt-12">
        {/* Informations de contact */}
        <div className="lg:w-1/3 space-y-6">
          <h2 className="text-3xl font-bold font-komila-axis text-[#C99F17] mb-6">
            Où nous trouver
          </h2>
          <p className="text-white mb-6">
            Vous souhaitez nous rencontrer ou organiser une activité sur place ? 
            Voici comment nous contacter et nous rejoindre facilement.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#C99F17] rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Adresse</h3>
                <p className="text-gray-300">{address}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#C99F17] rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Téléphone</h3>
                <p className="text-gray-300">{phone}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#C99F17] rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-300">{email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carte */}
        <div className="lg:w-2/3">
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722687679!2d2.277019!3d48.858859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2s!4v1647887123456!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Cultivon'sport"
            ></iframe>
          </div>
          <p className="text-sm text-gray-400 mt-2 text-center">
            Cliquez et glissez pour naviguer sur la carte
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;