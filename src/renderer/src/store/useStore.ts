import { DataType } from '@renderer/data'
import { create } from 'zustand'

interface State {
  data: DataType[]
  setData: (data: DataType[]) => void
  search: string
  setSearch: (search: string) => void
  error: string
  setError: (message: string) => void
  id: number
  setId: (id: number) => void
}

export const useStore = create<State>((set) => ({
  data: [],
  setData: (data) => set({ data }),
  search: '',
  setSearch: (search) => set({ search }),
  error: '',
  setError: (message) => set({ error: message }),
  id: 0,
  setId: (id) => set({ id })
}))
