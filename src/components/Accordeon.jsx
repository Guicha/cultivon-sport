import React, { useState } from "react";

// Example data
const accordionData = [
  {
    question: "Quels sont les âges concernés par vos activités?",
    answer:
      "Nos activités sont adaptées à tous les âges, des enfants aux adultes. Nous veillons à proposer des programmes et des ateliers qui répondent aux besoins et aux capacités de chacun.",
  },
  {
    question: "Comment puis-je m'inscrire à un programme?",
    answer:
      "Vous pouvez vous inscrire à un programme en visitant notre site web et en remplissant le formulaire d'inscription en ligne.",
  },
  {
    question: "Proposez-vous des services pour les entreprises?",
    answer:
      "Oui, nous proposons des services adaptés aux entreprises pour améliorer le bien-être et la cohésion d'équipe.",
  },
];

const Accordeon = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#2C2C3A] p-4 rounded-lg">
      {accordionData.map((item, idx) => (
        <div
          key={idx}
          style={{
            borderBottom:
              idx !== accordionData.length - 1
                ? "1px solid #FFFFFF"
                : "none",
          }}
        >
          <button
            className={`w-full flex justify-between items-center text-left py-5 px-4 ${
              openIndex === idx
                ? "text-white"
                : "text-white/80 hover:text-white"
            } font-medium text-lg focus:outline-none`}
            onClick={() => handleToggle(idx)}
          >
            <span>{item.question}</span>
            <span
              className="text-[#C99F17] text-2xl font-bold"
              style={{ minWidth: "24px", textAlign: "center" }}
            >
              {openIndex === idx ? "−" : "+"}
            </span>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-5 text-white/90 text-base leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordeon;