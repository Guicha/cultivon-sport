import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleFormspreeSubmit] = useForm("xdkdyojw");
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Map form field names to state field names
    const fieldMapping = {
      'name': 'nom',
      'phone': 'telephone',
      'email': 'email',
      'message': 'message'
    };
    
    const stateFieldName = fieldMapping[name] || name;
    
    setFormData(prev => ({
      ...prev,
      [stateFieldName]: value
    }));
    
    // Clear error when user starts typing
    if (errors[stateFieldName]) {
      setErrors(prev => ({
        ...prev,
        [stateFieldName]: ''
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
    
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Submit to Formspree
      await handleFormspreeSubmit(e);
    } else {
      setErrors(newErrors);
    }
  };

  // Show success message if form was submitted successfully
  if (state.succeeded) {
    return (
      <div className="w-full max-w-6xl mx-auto py-12">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="text-green-600 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Message envoyé avec succès!</h2>
          <p className="text-gray-600 mb-6">Nous vous répondrons dans les plus brefs délais.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-[#C99F17] hover:bg-[#B8901A] text-white font-medium rounded-md transition-all duration-300"
          >
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col lg:flex-row gap-0 min-h-[600px]">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#C99F17] to-[#E6B429] p-8 lg:p-12 text-white flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-4xl font-bold font-poppins mb-4">
                Besoin d’informations ? <br />
                Échangeons ensemble !
              </h2>
              <h3 className="text-2xl font-semibold">
                Nous sommes à votre écoute
              </h3>
              <p className="text-xl opacity-90 my-2">
                Que ce soit pour une réservation, une question ou une demande spécifique, notre équipe est à votre écoute. 
                Remplissez le formulaire ci-dessous ou contactez-nous directement.
              </p>
            </div>
            
            {/* <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Demandes d'information</h3>
                  <p className="opacity-90">Découvrez nos activités et services personnalisés</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <User className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Team building</h3>
                  <p className="opacity-90">Organisez des événements d'entreprise mémorables</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Réservations</h3>
                  <p className="opacity-90">Réservez vos activités sportives en quelques clics</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-6 mt-8">
              <p className="text-sm opacity-80">
                ⚡ Réponse rapide garantie sous 24h
              </p>
              <p className="text-sm opacity-80 mt-1">
                🔒 Vos données sont protégées et sécurisées
              </p>
            </div> */}
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 p-8 space-y-6">
          {/* <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Envoyez-nous un message</h3>
            <p className="text-gray-600">Remplissez le formulaire et nous vous répondrons rapidement</p>
          </div> */}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nom */}
              <div className="space-y-2">
                <label htmlFor="nom" className="flex items-center text-sm font-medium text-gray-700">
                  <User className="w-4 h-4 mr-2 text-[#C99F17]" />
                  Nom complet <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="nom"
                  name="name"
                  value={formData.nom}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C99F17] bg-gray-50 text-gray-900 ${
                    errors.nom ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Votre nom et prénom"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
                {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
                  <Mail className="w-4 h-4 mr-2 text-[#C99F17]" />
                  Adresse email <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C99F17] bg-gray-50 text-gray-900 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="votre@email.com"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Téléphone */}
              <div className="space-y-2">
                <label htmlFor="telephone" className="flex items-center text-sm font-medium text-gray-700">
                  <Phone className="w-4 h-4 mr-2 text-[#C99F17]" />
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="phone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C99F17] bg-gray-50 text-gray-900"
                  placeholder="01 23 45 67 89"
                />
                <ValidationError 
                  prefix="Phone" 
                  field="phone"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>

            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700">
                <MessageCircle className="w-4 h-4 mr-2 text-[#C99F17]" />
                Votre message <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C99F17] bg-gray-50 text-gray-900 resize-vertical ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Décrivez votre demande, vos questions ou votre projet..."
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              <p className="text-sm text-gray-500">
                Minimum 10 caractères - {formData.message.length}/500
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="flex items-center px-8 py-3 bg-[#C99F17] hover:bg-[#B8901A] text-white font-medium rounded-md shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {state.submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>
              <ValidationError 
                prefix="Form" 
                errors={state.errors}
                className="text-red-500 text-sm mt-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;