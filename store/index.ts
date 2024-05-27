import { create } from 'zustand';

type GlobalState = {
    isPageScrolled: boolean;
}

type GlobalAction = {
    setPageScrolled: (isScrolled: boolean) => void;
}

export const useGlobalStore = create<GlobalState & GlobalAction>((set) => ({
    isPageScrolled: false,
    setPageScrolled: (isScrolled: boolean) => set(() => ({ isPageScrolled: isScrolled })),
}))

export const makeKey = (index:string) => `${index}${Math.floor(Math.random()*9)}`
