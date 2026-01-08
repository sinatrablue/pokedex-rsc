import { create } from "zustand";

interface ThemeStoreProps {
  isDark: boolean;
  setIsDark(isDark: boolean): void;
}

export const useThemeStore = create<ThemeStoreProps>()((set) => ({
  isDark: true,
  setIsDark: (newIsDark) => set({ isDark: newIsDark }),
}));
