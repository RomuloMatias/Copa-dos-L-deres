
import React from 'react';
import TaskCard from './TaskCard';
import { HexagonIcon, JerseyIcon } from './IconComponents';

type Task = {
  id: number;
  title: string;
  points_value: number;
};

const mockTasks: Task[] = [
  { id: 1, title: 'Rodada de 1-on-1s com a equipe', points_value: 50 },
  { id: 2, title: 'Enviar Feedback Pulse de reconhecimento', points_value: 75 },
  { id: 3, title: 'Apresentar o planejamento do Q3', points_value: 150 },
  { id: 4, title: 'Sessão de mentoria com novo líder', points_value: 100 },
];

const LeaderProfile = {
    name: 'Isabella Rossi',
    team: 'Innovate FC',
    avatarUrl: 'https://i.pravatar.cc/150?img=25',
    rank: '#4',
    overallScore: '88 pts',
    teamScore: '9.2 / 10',
};

const StatCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
        <p className="text-sm text-gray-500 font-semibold">{label}</p>
        <p className="font-display text-4xl text-black-dark mt-1">{value}</p>
    </div>
);

const LockerRoomScreen: React.FC = () => {
  return (
    <div className="bg-white text-black-dark rounded-2xl animate-fade-in relative overflow-hidden">
      
      {/* --- Faded Background Logo --- */}
      <HexagonIcon className="absolute -top-10 -right-20 text-gray-100/50 w-80 h-80 z-0" />

      <div className="p-6 relative z-10">
        {/* --- Hero Section --- */}
        <section className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <img 
                src={LeaderProfile.avatarUrl} 
                alt={LeaderProfile.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
            />
            <div className="text-center sm:text-left">
                <h1 className="font-display text-5xl text-black-dark tracking-wider">{LeaderProfile.name}</h1>
                <p className="text-lg text-gray-500 font-medium">{LeaderProfile.team}</p>
                <div className="mt-2 inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                    <JerseyIcon className="w-5 h-5 text-accent-green" />
                    <span className="font-semibold text-sm text-gray-700">Líder</span>
                </div>
            </div>
        </section>

        {/* --- Key Stats Section --- */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <StatCard label="Ranking Atual" value={LeaderProfile.rank} />
            <StatCard label="Pontuação Geral" value={LeaderProfile.overallScore} />
            <StatCard label="Nota da Torcida" value={LeaderProfile.teamScore} />
        </section>

        {/* --- Task List Section --- */}
        <section>
            <h2 className="font-display text-3xl text-primary-blue tracking-wider mb-4">
              Próximas Partidas
            </h2>
            <div className="space-y-3">
                {mockTasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default LockerRoomScreen;