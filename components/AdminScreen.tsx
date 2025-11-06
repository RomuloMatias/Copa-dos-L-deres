import React, { useState } from 'react';
import { PencilIcon, TrashIcon } from './IconComponents';

type AdminView = 'leaders' | 'tasks' | 'seasons';

type Task = {
  id: number;
  name: string;
  description: string;
  points: number;
  type: 'Recorrente' | 'Única';
};

const mockTasks: Task[] = [
  { id: 1, name: 'Rodada de 1-on-1s com a equipe', description: 'Realizar 1-on-1s semanais com todos os membros da equipe.', points: 50, type: 'Recorrente' },
  { id: 2, name: 'Enviar Feedback Pulse', description: 'Enviar pelo menos 3 feedbacks de reconhecimento por semana.', points: 75, type: 'Recorrente' },
  { id: 3, name: 'Apresentar Planejamento Trimestral', description: 'Apresentar o plano de metas do time para o próximo trimestre.', points: 150, type: 'Única' },
  { id: 4, name: 'Sessão de Mentoria', description: 'Realizar uma sessão de mentoria com um novo líder na empresa.', points: 100, type: 'Única' },
  { id: 5, name: 'Publicar Artigo na Base de Conhecimento', description: 'Contribuir com um artigo relevante para a base de conhecimento interna.', points: 80, type: 'Única' },
];

const NavButton: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-200 ${
            isActive ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100'
        }`}
    >
        {label}
    </button>
);

const MobileTaskCard: React.FC<{ task: Task }> = ({ task }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex justify-between items-start">
            <div className="flex-grow pr-4">
                <h3 className="font-bold text-text-dark">{task.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{task.description}</p>
            </div>
            <div className="text-right flex-shrink-0">
                <p className="font-display text-xl text-text-dark">{task.points} pts</p>
                <span className={`mt-1 inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    task.type === 'Recorrente' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                }`}>{task.type}</span>
            </div>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end items-center gap-4">
             <button className="text-secondary hover:opacity-80 transition-colors" aria-label={`Editar tarefa ${task.name}`}>
                <PencilIcon className="w-5 h-5" />
            </button>
            <button className="text-danger hover:opacity-80 transition-colors" aria-label={`Deletar tarefa ${task.name}`}>
                <TrashIcon className="w-5 h-5" />
            </button>
        </div>
    </div>
);


const AdminScreen: React.FC = () => {
    const [activeView, setActiveView] = useState<AdminView>('tasks');

    return (
        <div className="bg-background rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200/80 animate-fade-in">
            <header className="mb-6">
                <h1 className="font-display text-3xl sm:text-4xl text-text-dark tracking-wider">PAINEL DE CONTROLE</h1>
                <p className="text-gray-500">Gerencie a Copa dos Líderes.</p>
            </header>

            <nav className="mb-6 bg-gray-100 p-2 rounded-lg flex items-center gap-1 sm:gap-2 overflow-x-auto">
                <NavButton label="Líderes" isActive={activeView === 'leaders'} onClick={() => setActiveView('leaders')} />
                <NavButton label="Tarefas (Gols)" isActive={activeView === 'tasks'} onClick={() => setActiveView('tasks')} />
                <NavButton label="Temporadas" isActive={activeView === 'seasons'} onClick={() => setActiveView('seasons')} />
            </nav>

            <main>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-4">
                    <h2 className="font-display text-2xl text-text-dark">Gerenciar Tarefas</h2>
                    <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg transition-transform duration-200 hover:scale-105 text-sm self-start sm:self-center">
                        + Criar Nova Tarefa
                    </button>
                </div>
                
                {/* Mobile View */}
                <div className="md:hidden space-y-3">
                    {mockTasks.map(task => <MobileTaskCard key={task.id} task={task} />)}
                </div>

                {/* Desktop View */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-text-dark">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="p-3 text-xs text-gray-500 font-semibold uppercase tracking-wider text-left">Nome da Tarefa</th>
                                <th className="p-3 text-xs text-gray-500 font-semibold uppercase tracking-wider text-left">Descrição</th>
                                <th className="p-3 text-xs text-gray-500 font-semibold uppercase tracking-wider text-center">Pontos</th>
                                <th className="p-3 text-xs text-gray-500 font-semibold uppercase tracking-wider text-center">Tipo</th>
                                <th className="p-3 text-xs text-gray-500 font-semibold uppercase tracking-wider text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockTasks.map((task) => (
                                <tr key={task.id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
                                    <td className="p-3 font-semibold text-base">{task.name}</td>
                                    <td className="p-3 text-sm text-gray-600 max-w-sm">{task.description}</td>
                                    <td className="p-3 font-display text-lg text-center text-text-dark">{task.points}</td>
                                    <td className="p-3 text-sm text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            task.type === 'Recorrente' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                                        }`}>{task.type}</span>
                                    </td>
                                    <td className="p-3">
                                        <div className="flex justify-center items-center gap-4">
                                            <button className="text-secondary hover:opacity-80 transition-colors" aria-label={`Editar tarefa ${task.name}`}>
                                                <PencilIcon className="w-5 h-5" />
                                            </button>
                                            <button className="text-danger hover:opacity-80 transition-colors" aria-label={`Deletar tarefa ${task.name}`}>
                                                <TrashIcon className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default AdminScreen;