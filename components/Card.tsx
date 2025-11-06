
import React from 'react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const Card: React.FC<CardProps> = ({ title, icon, items }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="text-yellow-400 mr-3">{icon}</div>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">{title}</h2>
      </div>
      <ul className="space-y-3 text-gray-300 list-none flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-yellow-500 font-bold mr-2 mt-1">&#9917;</span>
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
