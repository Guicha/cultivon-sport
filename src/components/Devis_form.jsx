import React, { useState } from "react";
import Fond from "../assets/images/fond.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    activite: "",
    nombreParticipants: "",
    message: "",
  });

  const [errors, setErrors] = useStpate({});
  const [isSubmitting, setIsSubmitting] = useState(false); // add loading state

  const activites = [
    "Dodge Rôles",
    "Révi'sport",
    "Memory's cube",
    "Autre",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'adresse email est requise";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'adresse email n'est pas valide";
    }

    if (!formData.activite) {
      newErrors.activite = "Veuillez sélectionner une activité";
    }

    if (!formData.nombreParticipants.trim()) {
      newErrors.nombreParticipants = "Le nombre de participants est requis";
    } else if (
      isNaN(formData.nombreParticipants) ||
      parseInt(formData.nombreParticipants) <= 0
    ) {
      newErrors.nombreParticipants = "Veuillez entrer un nombre valide";
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate sending
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // const subject = encodeURIComponent(`Demande de devis - ${formData.activite}`);
        // const body = encodeURIComponent(`
        // Nom: ${formData.nom}
        // Email: ${formData.email}
        // Téléphone: ${formData.telephone || "Non fourni"}
        // Activité: ${formData.activite}
        // Nombre de participants: ${formData.nombreParticipants}
        // Message: ${formData.message || "Aucun message fourni"}
        // `);

        // // Create and open mailto link
        // const mailtoLink = `mailto:contact@cultivonsport.fr?subject=${subject}&body=${body}`;
        // window.open(mailtoLink, '_blank');
        console.log("Formulaire soumis:", formData);
        alert("Formulaire envoyé avec succès!");

        // Reset form
        setFormData({
          nom: "",
          email: "",
          telephone: "",
          activite: "",
          nombreParticipants: "",
          message: "",
        });
      } catch (error) {
        alert("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="w-full max-w-8xl mx-auto p-10">
      <div className="bg-white rounded-lg shadow-lg w-full flex flex-col lg:flex-row overflow-hidden">
        {/* Image de gauche */}
        <img
          src={Fond}
          alt="Activités sportives Cultivon'sport"
          className="w-full lg:w-1/2 object-cover"
          loading="lazy"
        />

        {/* Formulaire de droite */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
          {/* Vos coordonnées */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Vos coordonnées
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className={`w-full text-black px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 text-sm sm:text-base ${
                    errors.nom ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Votre nom"
                />
                {errors.nom && (
                  <p className="text-red-500 text-sm mt-1">{errors.nom}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Adresse mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full text-black px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 text-sm sm:text-base ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="votre@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <label
                htmlFor="telephone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Téléphone (optionnel)
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full text-black px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 text-sm sm:text-base"
                placeholder="Votre numéro de téléphone"
              />
            </div>
          </div>

          {/* Type d'activité */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Type d'activité
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  htmlFor="activite"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Activité souhaitée <span className="text-red-500">*</span>
                </label>
                <select
                  id="activite"
                  name="activite"
                  value={formData.activite}
                  onChange={handleChange}
                  className={`w-full text-black px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 text-sm sm:text-base ${
                    errors.activite ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Veuillez choisir l'activité</option>
                  {activites.map((activite, index) => (
                    <option key={index} value={activite}>
                      {activite}
                    </option>
                  ))}
                </select>
                {errors.activite && (
                  <p className="text-red-500 text-sm mt-1">{errors.activite}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="nombreParticipants"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre de participants <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="nombreParticipants"
                  name="nombreParticipants"
                  value={formData.nombreParticipants}
                  onChange={handleChange}
                  min="1"
                  className={`w-full text-black px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 text-sm sm:text-base ${
                    errors.nombreParticipants
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder="Ex: 10"
                />
                {errors.nombreParticipants && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.nombreParticipants}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Votre message */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Votre message
            </h2>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full text-black px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 resize-vertical text-sm sm:text-base"
                placeholder="Décrivez votre projet, vos attentes, la date souhaitée..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center sm:justify-end pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center px-8 py-3 bg-[#C99F17] hover:bg-[#B8901A] text-white font-medium rounded-md shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none w-full sm:w-auto text-sm sm:text-base"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Envoi en cours...
                </>
              ) : (
                <>Envoyer le formulaire</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
