import {Theme} from 'styles/styled';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface State {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export const useThemeStore = create<State>()(
  persist(
    (set) => {
      return {
        theme: Theme.dark,
        changeTheme: (theme) => {
          set({theme});
        },
      };
    },
    {
      name: 'theme',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => state.theme,
    }
  )
);
