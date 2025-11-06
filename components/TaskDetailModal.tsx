import React, { useState } from 'react';
import { Task } from '../types';
import Confetti from './Confetti';

interface TaskDetailModalProps {
  isOpen: boolean;
  task: Task | null;
  onClose: () => void;
  onToggleSubtask: (taskId: number, subtaskId: number) => void;
  onConfirmCompletion: (taskId: number) => void;
}

const SubtaskItem: React.FC<{
  subtask: Task['subtasks'][0];
  onToggle: () => void;
}> = ({ subtask, onToggle }) => {
  return (
    <label htmlFor={`subtask-${subtask.id}`} className="flex items-center gap-4 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-200">
      <input
        id={`subtask-${subtask.id}`}
        type="checkbox"
        checked={subtask.completed}
        onChange={onToggle}
        className="h-6 w-6 rounded border-gray-300 text-primary focus:ring-primary"
      />
      <span className={`flex-grow text-sm ${subtask.completed ? 'text-gray-500 line-through' : 'text-text-dark'}`}>
        {subtask.description}
      </span>
    </label>
  );
};

const TaskDetailModal: React.FC<TaskDetailModalProps> = ({ isOpen, task, onClose, onToggleSubtask, onConfirmCompletion }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  if (!isOpen || !task) return null;

  const handleCompleteClick = () => {
    onConfirmCompletion(task.id);
    setShowConfetti(true);
    setTimeout(() => {
        setShowConfetti(false);
        onClose();
    }, 4000);
  };

  const isCompleted = task.progressCurrent >= task.progressTotal;
  const progressPercentage = (task.progressTotal > 0) ? (task.progressCurrent / task.progressTotal) * 100 : 0;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 font-sans animate-fade-in" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="task-title"
    >
      <Confetti fire={showConfetti} />
      <div 
        className="relative bg-gray-50 rounded-xl max-w-sm md:max-w-2xl w-full shadow-2xl p-6 flex flex-col max-h-[85vh] animate-slide-up" 
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center mb-6">
          <button className="p-2 rounded-full bg-white shadow-sm" onClick={onClose} aria-label="Close task details">
            <span className="material-symbols-outlined text-text-dark">arrow_back_ios_new</span>
          </button>
          <h1 className="text-lg font-bold text-text-dark">Detalhes da Partida</h1>
          <div className="w-10 h-10"></div> {/* Spacer */}
        </header>

        <main className="flex-grow flex flex-col justify-between overflow-y-auto pr-2 -mr-2">
          <div className="bg-white rounded-xl p-6 sm:p-8 flex-grow flex flex-col shadow-lg">
            <div className="text-center mb-8">
              <h2 id="task-title" className="font-display text-4xl sm:text-5xl uppercase leading-none text-text-dark">
                {task.title}
              </h2>
              <p className="font-display text-xl sm:text-2xl uppercase text-text-dark/70">{task.subtitle}</p>
            </div>
            
            <div className="mb-8 text-center">
              <p className="text-text-dark/80 leading-relaxed">
                {task.description}
              </p>
            </div>

            <div className="my-auto flex-grow flex flex-col justify-center">
              <div className="space-y-2">
                {task.subtasks.map(subtask => (
                  <SubtaskItem 
                    key={subtask.id}
                    subtask={subtask}
                    onToggle={() => onToggleSubtask(task.id, subtask.id)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-text-dark">Progresso da Tarefa</span>
                <span className="text-sm font-bold text-success">{task.progressCurrent} / {task.progressTotal} Concluídos</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5" role="progressbar" aria-valuenow={task.progressCurrent} aria-valuemin={0} aria-valuemax={task.progressTotal}>
                <div className="bg-success h-2.5 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <button
              onClick={handleCompleteClick}
              disabled={!isCompleted} 
              className="w-full bg-primary text-white font-display text-xl sm:text-2xl uppercase py-5 rounded-lg shadow-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 disabled:bg-success disabled:scale-100 disabled:cursor-not-allowed"
            >
              {isCompleted ? `GOL! (+${task.points} PTS)` : 'Marcar Gol'}
            </button>
          </div>
        </main>

      </div>
    </div>
  );
};

export default TaskDetailModal;