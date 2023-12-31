import { create } from 'zustand';

// store (define state & action)
const listStore = (set) => {
  // return store's state & actions
  return {
    // state
    list: [
      {
        id: crypto.randomUUID(),
        title: 'Zustand는 츄~스탄트로 발음합니다.',
      },
    ],
    // actions
    addItem: (newItemTitle) =>
      set((state) => ({
        list: [
          ...state.list,
          {
            id: crypto.randomUUID(),
            title: newItemTitle,
          },
        ],
      })),
    deleteItem: (deleteId) =>
      set((state) => ({
        list: state.list.filter((item) => item.id !== deleteId),
      })),
  };
};

// hook (bind component) ← store (define state & action)
export const useListStore = create(listStore);
