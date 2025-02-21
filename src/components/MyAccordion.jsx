import React from 'react';

const MyAccordion = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className="m-2 flex flex-col items-center">
            {/* Question Box */}
            <div
                className="bg-gray-700 w-[20rem] flex items-center justify-start p-3 rounded-lg cursor-pointer"
                onClick={onToggle} // Call onToggle when clicked
            >
                <p className="text-white text-2xl font-bold mr-2">{isOpen ? "-" : "+"}</p>
                <h1 className="text-xl font-semibold text-white">{question}</h1>
            </div>

            {/* Answer Box (Only shows if isOpen is true) */}
            {isOpen && (
                <h1 className="w-[20rem] text-lg text-white bg-gray-400 p-3 rounded-lg text-center mt-2">
                    {answer}
                </h1>
            )}
        </div>
    );
};

export default MyAccordion;

