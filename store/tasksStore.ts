import { create } from 'zustand';

export interface Task {
    id: number;
    title: string;
    completed: boolean;
    dueDate?: string;
}

interface TasksState {
    tasks: Task[];

    addTask: (task: Task) => void;
    removeTask: (id: number) => void;
    toggleTaskCompletion: (id: number) => void;
    getTasksByDate: (date: Date) => Task[];
}

export const useTasksStore = create<TasksState>((set, get) => ({
    tasks: [
        {
            id: 1,
            title: 'Department meeting',
            completed: true,
            dueDate: '2025-06-21',
        },
        {
            id: 2,
            title: 'Swim',
            completed: true,
            dueDate: '2025-06-21',
        },
        {
            id: 3,
            title: 'Language courses',
            completed: false,
            dueDate: '2025-06-21',
        },
        {
            id: 4,
            title: 'Grocery shopping',
            completed: false,
            dueDate: '2025-06-21',
        },
        {
            id: 5,
            title: 'Doctor appointment',
            completed: false,
            dueDate: '2025-06-21',
        },
        {
            id: 6,
            title: 'Dentist appointment',
            completed: false,
            dueDate: '2025-06-21',
        },
        {
            id: 7,
            title: 'Meeting with the client',
            completed: false,
            dueDate: '2025-06-21',
        },
    ],

    addTask: (task) =>
        set((state) => ({
            tasks: [...state.tasks, { ...task, dueDate: task.dueDate || undefined }],
        })),

    removeTask: (id) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        })),

    toggleTaskCompletion: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ),
        })),

    getTasksByDate: (date) => {
        const target = date.toISOString().split('T')[0]; // 'YYYY-MM-DD'
        return get().tasks.filter((task) => task.dueDate === target);
    },
}));
