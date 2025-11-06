import React, { useState } from 'react';
import StarRating from './StarRating';
import { CheckIcon } from './IconComponents';

const mockLeaderName = 'Isabella Rossi';
const feedbackQuestions = [
    "Como você avalia a clareza na comunicação das metas?",
    "Com que frequência você recebe feedbacks construtivos?",
    "Você se sente apoiado(a) em seu desenvolvimento profissional?",
];

const FeedbackScreen: React.FC = () => {
    const [ratings, setRatings] = useState<number[]>(Array(feedbackQuestions.length).fill(0));
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleRatingChange = (index: number, newRating: number) => {
        const newRatings = [...ratings];
        newRatings[index] = newRating;
        setRatings(newRatings);
    };

    const handleSubmit = () => {
        // Here you would typically send the data to a server
        console.log("Feedback submitted:", ratings);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="text-center py-20 animate-fade-in flex flex-col items-center">
                <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mb-6">
                    <CheckIcon className="w-16 h-16 text-white" />
                </div>
                <h1 className="font-display text-4xl sm:text-5xl text-text-dark tracking-wider mb-2">
                    Obrigado!
                </h1>
                <p className="text-gray-600 max-w-md">
                    Seu voto foi computado com sucesso. Sua contribuição é fundamental para o desenvolvimento da liderança.
                </p>
            </div>
        );
    }


    return (
        <div className="w-full max-w-2xl mx-auto animate-fade-in">
            <div className="text-center mb-10">
                <h1 className="font-display text-5xl sm:text-6xl text-primary tracking-wider">NOTA DA TORCIDA</h1>
                <p className="text-gray-600 mt-2">
                    Sua avaliação do Líder <span className="font-bold text-text-dark">{mockLeaderName}</span> é 100% anônima.
                </p>
            </div>

            <div className="bg-background rounded-lg p-6 sm:p-8 space-y-8 border border-gray-200">
                {feedbackQuestions.map((question, index) => (
                    <div key={index}>
                        <label className="block text-lg text-text-dark mb-3 text-center sm:text-left">{question}</label>
                        <StarRating 
                            rating={ratings[index]}
                            onRatingChange={(rating) => handleRatingChange(index, rating)}
                        />
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <button
                    onClick={handleSubmit}
                    disabled={ratings.some(r => r === 0)}
                    className="w-full bg-primary hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-display text-2xl py-4 rounded-lg transition-all duration-300 tracking-wider shadow-lg"
                >
                    Enviar Voto
                </button>
            </div>
        </div>
    );
}

export default FeedbackScreen;