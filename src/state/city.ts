import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

import {City} from 'types/city';

interface State {
  cityInContext?: City;
  add: (city: City) => void;
  clear: () => void;
}

export const useCityStore = create<State>()(
  persist(
    (set) => {
      return {
        cityInContext: undefined,
        clear: () => {
          return set(() => {
            return {cityInContext: undefined};
          });
        },
        add: (city) => {
          return set(() => {
            return {cityInContext: city};
          });
        },
      };
    },
    {
      name: 'selectedCity',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => state.cityInContext,
    }
  )
);
