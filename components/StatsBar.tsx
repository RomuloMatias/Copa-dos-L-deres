import React from 'react';
import { TrophyIcon, ChartIcon, FeedbackIcon } from './IconComponents';

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; detail?: string }> = ({ icon, label, value, detail }) => (
    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 flex items-center gap-4">
        <div className="text-primary-blue">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500 font-medium">{label}</p>
            <span className="font-display text-4xl text-black-dark">{value}</span>
            {detail && <span className="text-gray-500 font-semibold ml-1">{detail}</span>}
        </div>
    </div>
);


const StatsBar: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
            icon={<TrophyIcon className="w-10 h-10" />} 
            label="Sua Posição"
            value="3º"
            detail="/ 12"
        />
        <StatCard 
            icon={<ChartIcon className="w-10 h-10" />} 
            label="Pontos (Temporada)"
            value="1.150"
        />
        <StatCard 
            icon={<FeedbackIcon className="w-10 h-10" />} 
            label="Feedback da Torcida"
            value="88%"
            detail="Positivo"
        />
    </section>
  );
};

export default StatsBar;