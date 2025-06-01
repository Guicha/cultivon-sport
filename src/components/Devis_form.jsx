import React, { useState } from 'react';
import Fond from '../assets/images/fond.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    activite: '',
    nombreParticipants: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const activites = [
    'Dodge Rôles',
    'Révi\'sport', 
    'Memory géant',
    'Team Building',
    'Autre'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'adresse email est requise';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'adresse email n\'est pas valide';
    }
    
    if (!formData.activite) {
      newErrors.activite = 'Veuillez sélectionner une activité';
    }
    
    if (!formData.nombreParticipants.trim()) {
      newErrors.nombreParticipants = 'Le nombre de participants est requis';
    } else if (isNaN(formData.nombreParticipants) || parseInt(formData.nombreParticipants) <= 0) {
      newErrors.nombreParticipants = 'Veuillez entrer un nombre valide';
    }
    
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit the data
      console.log('Formulaire soumis:', formData);
      alert('Formulaire envoyé avec succès!');
      
      // Reset form
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        activite: '',
        nombreParticipants: '',
        message: ''
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full mx-auto flex flex-col lg:flex-row gap-0 min-h-[600px]">
      {/* Image de gauche */}
      <div className="w-full lg:w-1/2 h-64 lg:h-auto">
        <img 
          src={Fond}
          alt="Activités sportives Cultivon'sport" 
          className="w-full h-full object-cover rounded-l-lg lg:rounded-r-none rounded-r-lg"
        />
      </div>

      {/* Formulaire de droite */}
      <div className="w-full lg:w-1/2 p-8 space-y-8">
        
        {/* Vos coordonnées */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Vos coordonnées</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 ${
                  errors.nom ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Votre nom"
              />
              {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="votre@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>
          
          <div className="mt-6">
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone (optionnel)
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
              placeholder="Votre numéro de téléphone"
            />
          </div>
        </div>

        {/* Type d'activité */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Type d'activité</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="activite" className="block text-sm font-medium text-gray-700 mb-2">
                Activité souhaitée <span className="text-red-500">*</span>
              </label>
              <select
                id="activite"
                name="activite"
                value={formData.activite}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 ${
                  errors.activite ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Veuillez choisir l'activité</option>
                {activites.map((activite, index) => (
                  <option key={index} value={activite}>
                    {activite}
                  </option>
                ))}
              </select>
              {errors.activite && <p className="text-red-500 text-sm mt-1">{errors.activite}</p>}
            </div>
            
            <div>
              <label htmlFor="nombreParticipants" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de participants <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="nombreParticipants"
                name="nombreParticipants"
                value={formData.nombreParticipants}
                onChange={handleChange}
                min="1"
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 ${
                  errors.nombreParticipants ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Ex: 10"
              />
              {errors.nombreParticipants && <p className="text-red-500 text-sm mt-1">{errors.nombreParticipants}</p>}
            </div>
          </div>
        </div>

        {/* Votre message */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Votre message</h2>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 resize-vertical"
              placeholder="Décrivez votre projet, vos attentes, la date souhaitée..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105"
          >
            Envoyer le formulaire
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;