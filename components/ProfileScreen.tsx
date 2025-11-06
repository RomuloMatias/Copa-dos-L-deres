import React, { useState, useEffect } from 'react';
import TaskDetailModal from './TaskDetailModal';
import { LeaderStat, Task } from '../types';

interface ProfileScreenProps {
  leader: LeaderStat;
  tasks: Task[];
  onToggleSubtask: (taskId: number, subtaskId: number) => void;
  onConfirmCompletion: (taskId: number) => void;
}

const StatCard: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="bg-white/70 backdrop-blur-md rounded-2xl p-3 flex flex-col justify-between items-start shadow-md h-24">
    <span className="text-xs text-gray-600 font-semibold">{label}</span>
    <span className="text-4xl font-black text-text-dark self-end">{value}</span>
  </div>
);


const TaskItem: React.FC<{ task: Task; onClick: () => void }> = ({ task, onClick }) => {
    const isCompleted = task.completed;
    return (
        <button 
            onClick={onClick} 
            className="w-full text-left flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm border border-gray-200 hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
        >
          <div className="flex-grow">
            <p className={`text-base font-bold ${isCompleted ? 'text-gray-400 line-through' : 'text-text-dark'}`}>{task.title}</p>
            <div className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold ${isCompleted ? 'bg-gray-200 text-gray-500' : 'bg-secondary/20 text-yellow-800'}`}>
              <span>+{task.points} pts</span>
            </div>
          </div>
           <div className="flex h-12 flex-shrink-0 items-center justify-center rounded-lg text-gray-400">
             {isCompleted 
                ? <span className="material-symbols-outlined text-success">check_circle</span>
                : <span className="material-symbols-outlined">chevron_right</span>
             }
           </div>
        </button>
    );
};


const ProfileScreen: React.FC<ProfileScreenProps> = ({ leader, tasks, onToggleSubtask, onConfirmCompletion }) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed'>('upcoming');

  useEffect(() => {
    if (selectedTask) {
      const updatedTask = tasks.find(task => task.id === selectedTask.id);
      setSelectedTask(updatedTask || null);
    }
  }, [tasks]);

  const upcomingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <>
      <div className="w-full md:max-w-4xl mx-auto bg-background animate-fade-in overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 h-[40vh]">
            <img 
                src={leader.avatarUrl} 
                alt={leader.name} 
                className="w-full h-full object-cover object-top opacity-90" 
            />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          
          <div className="relative z-10 pt-24 pb-4 px-4">
            <h1 className="text-5xl font-black text-text-dark" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>{leader.name}</h1>
            <div className="flex items-center space-x-2 mt-2 text-gray-600">
              <span className="text-sm font-bold tracking-wider uppercase">{leader.team}</span>
            </div>
          </div>

          <div className="relative grid grid-cols-3 gap-3 px-4 pb-6">
            <StatCard label="Ranking" value={`#${leader.rank}`} />
            <StatCard label="Gols" value={leader.tasksCompleted} />
            <StatCard label="Assist." value={leader.kudosGiven} />
          </div>
        </div>
        
        <div className="bg-gray-100 p-4">
          <section>
              <div className="mb-4 border-b border-gray-200">
                  <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                      <button 
                          onClick={() => setActiveTab('upcoming')}
                          className={`whitespace-nowrap pb-2 px-1 border-b-2 font-semibold text-sm ${activeTab === 'upcoming' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      >
                          Próximas Partidas
                      </button>
                      <button 
                          onClick={() => setActiveTab('completed')}
                          className={`whitespace-nowrap pb-2 px-1 border-b-2 font-semibold text-sm ${activeTab === 'completed' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      >
                          Partidas Anteriores
                      </button>
                  </nav>
              </div>

              <div className="space-y-3">
                {(activeTab === 'upcoming' ? upcomingTasks : completedTasks).map((task) => (
                    <TaskItem 
                      key={task.id} 
                      task={task}
                      onClick={() => setSelectedTask(task)}
                    />
                ))}
                {(activeTab === 'upcoming' && upcomingTasks.length === 0) && (
                  <p className="text-center text-gray-500 py-4">Nenhuma partida agendada.</p>
                )}
                 {(activeTab === 'completed' && completedTasks.length === 0) && (
                  <p className="text-center text-gray-500 py-4">Nenhuma partida foi finalizada ainda.</p>
                )}
              </div>
          </section>
        </div>
      </div>

      <TaskDetailModal 
        isOpen={!!selectedTask} 
        task={selectedTask}
        onClose={() => setSelectedTask(null)}
        onToggleSubtask={onToggleSubtask}
        onConfirmCompletion={onConfirmCompletion}
      />
    </>
  );
};

export default ProfileScreen;
