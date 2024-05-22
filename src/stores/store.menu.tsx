import { create } from 'zustand'
import { MenuStore } from '@/interfaces/interface.store'

const useMenuStore = create<MenuStore>()((set, get) => ({
  menu: 'home',
  setMenu: (uri: string) =>
    set((state) => {
      state.menu = uri
      return { ...state }
    }),
}))

export default useMenuStore
