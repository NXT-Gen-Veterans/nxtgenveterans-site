import { create } from 'zustand';

export type RouteType = "home" | "about" | "contact" | "resources" | "bootcamp";

type GlobalState = {
    isPageScrolled: boolean;
    navTabValue: RouteType;
}

type GlobalAction = {
    setPageScrolled: (isScrolled: boolean) => void;
    setNavTabValue: (newValue: RouteType) => void;
}

export const useGlobalStore = create<GlobalState & GlobalAction>((set) => ({
    isPageScrolled: false,
    setPageScrolled: (isScrolled: boolean) => set(() => ({ isPageScrolled: isScrolled })),
    navTabValue: "home",
    setNavTabValue: (newValue: RouteType) => set(() => ({ navTabValue: newValue })),
}))

export const makeKey = (index:string) => `${index}${Math.floor(Math.random()*9)}`
