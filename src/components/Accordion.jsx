import { questions } from './api';
import React, { useState } from 'react';
import MyAccordion from './MyAccordion';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);  // Track which accordion is open

    return (
        <section className="h-auto bg-gray-300 flex flex-col justify-center items-center w-[90%] max-w-[26rem] mx-auto p-6 md:p-8 rounded-lg shadow-lg">
            <h1 className="font-bold text-xl md:text-2xl text-center mb-4">
                React Interview Questions
            </h1>

            {questions.map((item, index) => (
                <MyAccordion
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={activeIndex === index}   // Check if this accordion is open
                    onToggle={() => setActiveIndex(activeIndex === index ? null : index)} // Toggle active index
                />
            ))}
        </section>
    );
};

export default FAQ;
