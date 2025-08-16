import React from 'react'

const FaqAccordion = (props) => {
    let {faq, faqToggle, setFaqToggle} = props
    const handleFaqToggle = () => {
        setFaqToggle(faqToggle? -1 : null);
    }
  return (
    <div className='relative bg-[#303030] my-2 transition-all duration-500 ease-in-out w-full'>
        <h1 className='cursor-pointer px-[23px] hover:bg-[#434343] transition duration-300 py-6 border-b border-black text-[25px]' onClick={handleFaqToggle}>{faq.question}</h1>
        <p className='absolute top-6 right-6 text-3xl'>{faqToggle ? '⨉' : '＋'}</p>
        
        {faqToggle && <p className='px-[23px] p-6 text-[25px] leading-8'>{faq.answer}</p>}
        {faqToggle && faq.answerline && <p className='px-[23px] p-6 leading-8 text-[25px]'>{faq.answerline}</p>}
    </div>
  )
}

export default FaqAccordion