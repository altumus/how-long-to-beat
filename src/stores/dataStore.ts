import * as pinia from 'pinia'

export const useDataStore = pinia.defineStore('data', {
  state: () => ({
    some: false,
  }),
  actions: {},
})

