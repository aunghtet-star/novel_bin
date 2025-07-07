import { create } from 'zustand'

const useHeaderStore = create((set) => ({
  isDarkMode: true,
    toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    selectedGenre: 'ALL',
    setSelectedGenre: (genre) => set({ selectedGenre: genre }),
}))

export default useHeaderStore;