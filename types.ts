

export interface GamificationNames {
  managementTasks: string[];
  badges: string[];
  rankingLevels: string[];
}

export type Screen = 'ranking' | 'lockerRoom' | 'admin';

export type LeaderStat = {
  id: string;
  rank: number;
  name: string;
  team: string;
  overallScore: number;
  avatarUrl: string;
  evolution: 'up' | 'down' | 'neutral';
  teamScore: number;
  tasksCompleted: number;
  kudosGiven: number;
};

export interface Subtask {
  id: number;
  description: string;
  completed: boolean;
}

export interface Task {
  id: number;
  title: string;
  subtitle:string;
  description: string;
  points: number;
  progressCurrent: number;
  progressTotal: number;
  completed: boolean; // To track if points have been awarded
  subtasks: Subtask[];
}