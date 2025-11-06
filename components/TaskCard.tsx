
import React from 'react';
import { CheckIcon } from './IconComponents';

type Task = {
  title: string;
  points_value: number;
};

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-4 flex items-center justify-between gap-4 transition-all duration-300 hover:shadow-md hover:border-primary-blue/30">
      <div className="flex-grow">
        <h3 className="font-semibold text-base text-black-dark">
          {task.title}
        </h3>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
        <div className="text-right">
            <p className="font-display text-lg text-secondary-yellow leading-none bg-primary-blue/10 px-2 py-1 rounded-md">+{task.points_value} PTS</p>
        </div>
        <button 
          className="bg-accent-green hover:bg-green-600 text-white font-bold py-2 px-3 rounded-lg transition-colors duration-300 ease-in-out flex items-center gap-2 whitespace-nowrap text-sm"
          aria-label={`Concluir tarefa '${task.title}'`}
        >
          <CheckIcon className="w-4 h-4"/>
          <span className="hidden sm:inline">Marcar Gol</span>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;