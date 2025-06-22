import { create } from 'zustand';

export interface Notebook {
  id: number;
  title: string;
  notes: number;
}

interface NotebookState {
  notebooks: Notebook[];
  currentNotebookId: number | null;

  // Actions
  setCurrentNotebookId: (id: number | null) => void;
  setNotebooks: (notebooks: Notebook[]) => void;
  clearNotebooks: () => void;
  addNotebook: (notebook: Notebook) => void;
  removeNotebook: (id: number) => void;
  updateNotebook: (id: number, title: string) => void;

  // Selectors (note: not reactive)
  getNotebookById: (id: number) => Notebook | undefined;
  getAllNotebooks: () => Notebook[];
}

export const useNotebookStore = create<NotebookState>((set, get) => ({
  notebooks: [
    { id: 0, title: 'All Notes', notes: 26 },
    { id: 1, title: 'Personal', notes: 8 },
    { id: 2, title: 'Work', notes: 3 },
    { id: 3, title: 'Family', notes: 5 },
    { id: 4, title: 'Friends', notes: 4 },
    { id: 5, title: 'Other', notes: 6 },
  ],
  currentNotebookId: null,

  setCurrentNotebookId: (id) => set({ currentNotebookId: id }),
  setNotebooks: (notebooks) => set({ notebooks }),
  clearNotebooks: () => set({ notebooks: [] }),

  addNotebook: (notebook) =>
    set((state) => ({ notebooks: [...state.notebooks, notebook] })),

  removeNotebook: (id) =>
    set((state) => ({
      notebooks: state.notebooks.filter((n) => n.id !== id),
    })),

  updateNotebook: (id, title) =>
    set((state) => ({
      notebooks: state.notebooks.map((n) =>
        n.id === id ? { ...n, title } : n
      ),
    })),

  getNotebookById: (id) => get().notebooks.find((n) => n.id === id),
  getAllNotebooks: () => get().notebooks,
}));
