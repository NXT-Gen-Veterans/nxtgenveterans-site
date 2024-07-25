import { create } from 'zustand';

export type RouteType = "home" | "about" | "contact" | "resources" | "bootcamp";
export type ScreenType = "lg" | "md" | "sm" | "xs";

type GlobalState = {
    isPageScrolled: boolean;
    navTabValue: RouteType;
    screen: ScreenType;
}

type GlobalAction = {
    setPageScrolled: (isScrolled: boolean) => void;
    setNavTabValue: (newValue: RouteType) => void;
    setScreenValue: (screen: ScreenType) => void;
}

export const useGlobalStore = create<GlobalState & GlobalAction>((set) => ({
    isPageScrolled: false,
    setPageScrolled: (isScrolled: boolean) => set(() => ({ isPageScrolled: isScrolled })),
    navTabValue: "home",
    setNavTabValue: (newValue: RouteType) => set(() => ({ navTabValue: newValue })),
    screen: "sm",
    setScreenValue: (screen: ScreenType) => set(() => ({ screen: screen }))
}))

export const makeKey = (index:string) => `${index}${Math.floor(Math.random()*9)}`
