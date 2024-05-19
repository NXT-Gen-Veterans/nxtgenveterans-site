import { create } from 'zustand';

type GlobalState = {
    isPageScrolled: boolean;
}

type GlobalAction = {
    setPageScrolled: (isScrolled: boolean) => void;
}

export const useGlobalStore = create<GlobalState & GlobalAction>((set) => ({
    isPageScrolled: false,
    // setPageScrolled: function() {
    //     if (window.scrollY === 0 && this.isPageScrolled === true) {
    //         return set(() => ({ isPageScrolled: false }))
    //     }
    //     if (window.scrollY !== 0 && this.isPageScrolled === false) {
    //         return set(() => ({ isPageScrolled: true }))
    //     }
    // },
    setPageScrolled: (isScrolled: boolean) => set(() => ({ isPageScrolled: isScrolled })),
    // setPageScrolled: () => set(({isPageScrolled}) => {
    //     // console.log("setscrolled function ran")
    //     if (window.scrollY === 0 && isPageScrolled === true) return { isPageScrolled: false };
    //     if (window.scrollY !== 0 && isPageScrolled === false) return { isPageScrolled: true };
    //     // return { isPageScrolled: true };
    // }),
}))
