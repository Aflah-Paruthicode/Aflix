import React from "react";

const FaqAccordion = (props) => {
  let { faq, faqToggle, setFaqToggle } = props;
  const handleFaqToggle = () => {
    setFaqToggle(faqToggle ? -1 : null);
  };
  return (
    <div className="relative bg-[#303030] my-2 transition-all duration-500 ease-in-out w-full">
      <h1
        className="cursor-pointer px-[23px] hover:bg-[#434343] transition duration-300 py-6 border-b border-black text-[25px] max-md:text-xl"
        onClick={handleFaqToggle}
      >
        {faq.question}
        <p className="absolute top-6 right-6 text-3xl max-md:text-2xl">{faqToggle ? "⨉" : "＋"}</p>
      </h1>

      {faqToggle && <p className="px-[23px] p-6 text-[25px] leading-8 max-md:text-[18px] max-md:leading-6">{faq.answer}</p>}
      {faqToggle && faq.answerline && <p className="px-[23px] p-6 leading-8 text-[25px] max-md:text-[18px] max-md:leading-6">{faq.answerline}</p>}
    </div>
  );
};

export default FaqAccordion;
