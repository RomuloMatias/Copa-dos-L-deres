import React, { useState } from 'react';
import RankingScreen from './components/RankingScreen';
import ProfileScreen from './components/ProfileScreen';
import AdminScreen from './components/AdminScreen';
import BottomNavBar from './components/BottomNavBar';
import { Screen, LeaderStat, Task } from './types';

// FIX: Define the initial data in a separate, typed constant to ensure TypeScript
// correctly infers the 'evolution' property as the literal union type ('up' | 'down' | 'neutral')
// instead of the wider 'string' type, which caused a type mismatch.
const leaderData: LeaderStat[] = [
  { id: 'leader-1', rank: 0, name: 'Isabella Rossi', team: 'Innovate FC', overallScore: 92, avatarUrl: 'https://i.pravatar.cc/150?img=25', evolution: 'up', teamScore: 9.5, tasksCompleted: 18, kudosGiven: 12 },
  { id: 'leader-2', rank: 0, name: 'Marcus Chen', team: 'Quantum United', overallScore: 88, avatarUrl: 'https://i.pravatar.cc/150?img=32', evolution: 'up', teamScore: 9.1, tasksCompleted: 15, kudosGiven: 10 },
  { id: 'leader-tecnico', rank: 0, name: 'Técnico', team: 'Seleção', overallScore: 88, avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdtmZCAHogkw3_dkIZ0KrqhmCrqMLv71lfI8PeI4aa2WVMRDHoM1WfABsfKEen5mE0ToGw12g-Hx_S1vEh90gVa4QitFcoOLdHluOa8m_jYPHM1V5Z-3ireX6RTNCMvYWYP0GUnKX74EQ4R7M-6qN6Kx3pw8KlLbF9pgFMPokcsp8OzqtJRdeA6VESlRf6vwdnAc97MQVdQdVb0YMQUXESVqybWSloqlipQDVi9XTEYtpnI3DL7oMwlkuTOvyPYDTC46aPlr7cUgY', evolution: 'up', teamScore: 9.2, tasksCompleted: 16, kudosGiven: 8 },
  { id: 'leader-3', rank: 0, name: 'Sofia Alvarez', team: 'Apex Athletic', overallScore: 85, avatarUrl: 'https://i.pravatar.cc/150?img=47', evolution: 'down', teamScore: 8.8, tasksCompleted: 16, kudosGiven: 8 },
  { id: 'leader-4', rank: 0, name: 'Liam O\'Connell', team: 'Velocity FC', overallScore: 79, avatarUrl: 'https://i.pravatar.cc/150?img=60', evolution: 'up', teamScore: 8.2, tasksCompleted: 12, kudosGiven: 9 },
  { id: 'leader-5', rank: 0, name: 'Aya Tanaka', team: 'Synergy Strikers', overallScore: 75, avatarUrl: 'https://i.pravatar.cc/150?img=5', evolution: 'neutral', teamScore: 8.5, tasksCompleted: 11, kudosGiven: 5 },
  { id: 'leader-6', rank: 0, name: 'David Lee', team: 'Pinnacle FC', overallScore: 72, avatarUrl: 'https://i.pravatar.cc/150?img=51', evolution: 'down', teamScore: 7.9, tasksCompleted: 10, kudosGiven: 7 },
];

const initialLeadersData = [...leaderData]
  .sort((a, b) => b.overallScore - a.overallScore)
  .map((leader, index) => ({ ...leader, rank: index + 1 }));

const initialTasksData: Task[] = [
    { 
      id: 1, 
      title: 'Rodada de 1-on-1s', 
      subtitle: 'com a Equipe Alpha', 
      description: 'Realize reuniões individuais de feedback e alinhamento com cada membro da Equipe Alpha para fortalecer a comunicação e o desenvolvimento.', 
      points: 50, 
      progressCurrent: 0,
      progressTotal: 5, 
      completed: false,
      subtasks: [
        { id: 1, description: '1-on-1 com Alex', completed: true },
        { id: 2, description: '1-on-1 com Brenda', completed: false },
        { id: 3, description: '1-on-1 com Carlos', completed: false },
        { id: 4, description: '1-on-1 com Diana', completed: false },
        { id: 5, description: '1-on-1 com Eric', completed: false },
      ]
    },
    { 
      id: 2, 
      title: 'Feedback em tempo real', 
      subtitle: 'para o Projeto X', 
      description: 'Forneça feedback contínuo e em tempo real para os membros da equipe que trabalham no Projeto X.', 
      points: 30, 
      progressCurrent: 0, 
      progressTotal: 4, 
      completed: false,
      subtasks: [
        { id: 1, description: 'Feedback na Apresentação Inicial', completed: false },
        { id: 2, description: 'Revisão do Protótipo', completed: false },
        { id: 3, description: 'Feedback sobre o Código', completed: false },
        { id: 4, description: 'Feedback Pós-entrega', completed: false },
      ]
    },
    { 
      id: 3, 
      title: 'Planejamento do Próximo Sprint', 
      subtitle: 'Q3 Metas', 
      description: 'Defina e comunique as metas e prioridades para o próximo sprint do terceiro trimestre.', 
      points: 50, 
      progressCurrent: 0, 
      progressTotal: 1, 
      completed: false,
      subtasks: [
        { id: 1, description: 'Apresentar planejamento para a equipe', completed: false },
      ]
    },
];

const processedInitialTasks = initialTasksData.map(task => ({
  ...task,
  progressCurrent: task.subtasks.filter(st => st.completed).length,
  progressTotal: task.subtasks.length
}));


const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('lockerRoom');
  const [leaders, setLeaders] = useState<LeaderStat[]>(initialLeadersData);
  const [tasks, setTasks] = useState<Task[]>(processedInitialTasks);
  const [currentLeaderId] = useState<string>('leader-tecnico');

  const handleToggleSubtask = (taskId: number, subtaskId: number) => {
    setTasks(currentTasks => {
        return currentTasks.map(task => {
            if (task.id === taskId) {
                const newSubtasks = task.subtasks.map(subtask => {
                    if (subtask.id === subtaskId) {
                        return { ...subtask, completed: !subtask.completed };
                    }
                    return subtask;
                });

                const completedCount = newSubtasks.filter(st => st.completed).length;
                return { 
                    ...task, 
                    subtasks: newSubtasks, 
                    progressCurrent: completedCount,
                };
            }
            return task;
        });
    });
  };

  const handleConfirmCompletion = (taskId: number) => {
    const taskToScore = tasks.find(t => t.id === taskId);
    
    if (!taskToScore || taskToScore.completed) {
        return;
    }

    setTasks(currentTasks => 
        currentTasks.map(task => 
            task.id === taskId ? { ...task, completed: true } : task
        )
    );

    setLeaders(prevLeaders => {
      const oldRanks = new Map(prevLeaders.map(l => [l.id, l.rank]));

      const updatedLeaders = prevLeaders.map(l =>
        l.id === currentLeaderId ? { ...l, overallScore: l.overallScore + taskToScore.points, tasksCompleted: l.tasksCompleted + 1 } : l
      );

      const sortedLeaders = [...updatedLeaders].sort((a, b) => b.overallScore - a.overallScore);
      
      return sortedLeaders.map((leader, index) => {
        const newRank = index + 1;
        const oldRank = oldRanks.get(leader.id) ?? newRank;
        let evolution: 'up' | 'down' | 'neutral' = leader.evolution;
        if (newRank < oldRank) {
          evolution = 'up';
        } else if (newRank > oldRank) {
          evolution = 'down';
        } else {
          evolution = 'neutral';
        }
        return { ...leader, rank: newRank, evolution };
      });
    });
  };

  const currentLeader = leaders.find(l => l.id === currentLeaderId)!;

  const renderScreen = () => {
    switch (activeScreen) {
      case 'ranking':
        return <RankingScreen leaders={leaders} currentLeaderId={currentLeaderId} />;
      case 'lockerRoom':
        return <ProfileScreen leader={currentLeader} tasks={tasks} onToggleSubtask={handleToggleSubtask} onConfirmCompletion={handleConfirmCompletion} />;
      case 'admin':
        return <AdminScreen />;
      default:
        return <RankingScreen leaders={leaders} currentLeaderId={currentLeaderId} />;
    }
  };
  
  return (
    <div className="bg-background text-text-dark font-sans min-h-screen">
      <main className="max-w-7xl mx-auto">
        <div className={`${activeScreen === 'lockerRoom' ? '' : 'p-4 sm:p-6 md:p-8'} pb-24`}>
          {renderScreen()}
        </div>
      </main>
      <BottomNavBar activeTab={activeScreen} onTabChange={setActiveScreen} />
    </div>
  );
};

export default App;