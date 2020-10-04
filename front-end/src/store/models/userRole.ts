import { Action, action } from 'easy-peasy'
import { UserRole } from '../../typings'

export interface UserRoleStateModel {
  userRole: UserRole | null
  setUserRole: Action<UserRoleStateModel, UserRole | null>
}

const userRoleState: UserRoleStateModel = {
  userRole: null,
  setUserRole: action((state, userRole) => {
    state.userRole = userRole
  }),
}

export default userRoleState
