import { create } from 'zustand';

interface MainState {
    dummyProperty: boolean;
    toggle: () => void;
}

export const useMainStore = create<MainState>((set) => ({
    dummyProperty: false,
    toggle: () => set((state) => ({ dummyProperty: !state })),
}))
