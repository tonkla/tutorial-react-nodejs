import { persist } from 'easy-peasy'

export interface StoreModel {}

const storeModel: StoreModel = persist({
  storage: 'localStorage',
  whitelist: [],
})

export default storeModel
