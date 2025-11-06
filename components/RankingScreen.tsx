import React from 'react';
import { UpArrowIcon, DownArrowIcon } from './IconComponents';
import { LeaderStat } from '../types';

interface RankingScreenProps {
  leaders: LeaderStat[];
  currentLeaderId: string;
}

const EvolutionIndicator: React.FC<{ evolution: 'up' | 'down' | 'neutral' }> = ({ evolution }) => {
    switch (evolution) {
        case 'up':
            return <UpArrowIcon className="w-5 h-5 text-success" />;
        case 'down':
            return <DownArrowIcon className="w-5 h-5 text-danger" />;
        default:
            return <span className="w-5 h-5 text-primary font-bold flex items-center justify-center">-</span>;
    }
};

const StrengthStat: React.FC<{label: string; value: number | string}> = ({label, value}) => (
    <div className="text-center">
        <p className="text-sm font-bold text-text-dark">{value}</p>
        <p className="text-xs text-gray-500 font-semibold tracking-wider">{label}</p>
    </div>
);

// Mobile Card Component
const MobileLeaderCard: React.FC<{ leader: LeaderStat; isCurrentUser: boolean; isTopThree: boolean; }> = ({ leader, isCurrentUser, isTopThree }) => {
    const cardClasses = `bg-white rounded-lg p-4 shadow-sm border ${isCurrentUser ? 'border-success' : isTopThree ? 'border-secondary' : 'border-gray-200'}`;
    
    return (
        <div className={cardClasses}>
            <div className="flex items-center gap-4">
                <div className="text-center w-12">
                    <p className="font-display text-2xl text-text-dark">{leader.rank}</p>
                    <EvolutionIndicator evolution={leader.evolution} />
                </div>
                <img 
                    src={leader.avatarUrl} 
                    alt={leader.name} 
                    className="w-12 h-12 rounded-full"
                />
                <div className="flex-grow">
                    <p className="font-bold text-base">{leader.name} {isCurrentUser && <span className="text-xs font-normal text-success">(VOCÊ)</span>}</p>
                    <p className="text-sm text-gray-500">{leader.team}</p>
                </div>
                <div className="text-right">
                    <p className="font-display text-3xl font-bold text-text-dark">{leader.overallScore}</p>
                    <p className="text-xs text-gray-500">Geral</p>
                </div>
            </div>
             <div className="mt-4 pt-3 border-t border-gray-100 flex justify-around items-center">
                <StrengthStat label="GAL" value={leader.teamScore.toFixed(1)} />
                <StrengthStat label="GOLS" value={leader.tasksCompleted} />
                <StrengthStat label="AST" value={leader.kudosGiven} />
            </div>
        </div>
    );
};


const RankingScreen: React.FC<RankingScreenProps> = ({ leaders, currentLeaderId }) => {
  return (
    <div className="w-full">
        <header className="mb-6 text-center">
            <h1 className="font-display text-4xl sm:text-5xl text-primary tracking-wider">COPA DOS LÍDERES</h1>
            <h2 className="text-base sm:text-lg font-semibold text-text-dark uppercase tracking-widest">LEAGUE TABLE</h2>
        </header>

        {/* Mobile View */}
        <div className="md:hidden space-y-3">
            {leaders.map((leader) => {
                const isCurrentUser = leader.id === currentLeaderId;
                const isTopThree = leader.rank <= 3;
                return <MobileLeaderCard key={leader.id} leader={leader} isCurrentUser={isCurrentUser} isTopThree={isTopThree} />
            })}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-text-dark">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider text-left">POS</th>
                        <th className="p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider text-center">EVOL</th>
                        <th className="p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider text-left">Líder</th>
                        <th className="p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider text-center">Pontos de Força</th>
                        <th className="p-4 text-xs text-gray-500 font-semibold uppercase tracking-wider text-right">Geral</th>
                    </tr>
                </thead>
                <tbody>
                    {leaders.map((leader) => {
                        const isCurrentUser = leader.id === currentLeaderId;
                        const isTopThree = leader.rank <= 3;
                        const rowClasses = `border-b border-gray-200 last:border-b-0 transition-colors duration-200 ${isCurrentUser ? 'bg-success/10' : ''} ${!isCurrentUser && isTopThree ? 'bg-secondary/10' : ''}`;
                        
                        return (
                            <tr key={leader.id} className={rowClasses}>
                                <td className={`p-4 font-display text-lg text-center w-16 ${isCurrentUser ? 'border-l-4 border-success' : ''} ${!isCurrentUser && isTopThree ? 'border-l-4 border-secondary' : ''}`}>{leader.rank}</td>
                                <td className="p-4 w-16">
                                    <div className="flex justify-center">
                                        <EvolutionIndicator evolution={leader.evolution} />
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-4">
                                        <img 
                                            src={leader.avatarUrl} 
                                            alt={leader.name} 
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div>
                                            <p className="font-bold text-base">{leader.name} {isCurrentUser && <span className="text-xs font-normal text-success">(VOCÊ)</span>}</p>
                                            <p className="text-sm text-gray-500">{leader.team}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex justify-center items-center gap-6">
                                        <StrengthStat label="GAL" value={leader.teamScore.toFixed(1)} />
                                        <StrengthStat label="GOLS" value={leader.tasksCompleted} />
                                        <StrengthStat label="AST" value={leader.kudosGiven} />
                                    </div>
                                </td>
                                <td className={`p-4 text-right w-24 font-display text-2xl font-bold ${isCurrentUser ? 'border-r-4 border-success' : ''} ${!isCurrentUser && isTopThree ? 'border-r-4 border-secondary' : ''}`}>
                                    {leader.overallScore}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default RankingScreen;