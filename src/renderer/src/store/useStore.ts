import { DataType } from '@renderer/data'
import { create } from 'zustand'

interface State {
  data: DataType[]
  setData: (data: DataType[]) => void
  search: string
  setSearch: (search: string) => void
}

export const useStore = create<State>((set) => ({
  data: [],
  setData: (data) => set({ data }),
  search: '',
  setSearch: (search) => set({ search })
}))
