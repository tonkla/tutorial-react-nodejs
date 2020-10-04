import { persist } from 'easy-peasy'
import userState, { UserStateModel } from './user'
import userRoleState, { UserRoleStateModel } from './userRole'

export interface StoreModel {
  userState: UserStateModel
  userRoleState: UserRoleStateModel
}

const storeModel: StoreModel = persist(
  { userState, userRoleState },
  {
    storage: 'localStorage',
    whitelist: ['userState'],
  }
)

export default storeModel
