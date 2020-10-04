import { Action, action, Thunk, thunk } from 'easy-peasy'
import userApi from '../../services/api/user'
import { User, UserLogin } from '../../typings'

export interface UserStateModel {
  user: UserLogin | null
  setUser: Action<UserStateModel, UserLogin | null>
  logIn: Thunk<UserStateModel, User>
  logOut: Action<UserStateModel>
}

const userState: UserStateModel = {
  user: null,
  setUser: action((state, user) => {
    state.user = user
  }),
  logIn: thunk(async (actions, data, { getStoreActions }: any) => {
    const user = await userApi.logIn(data.email, data.password)
    if (user) {
      actions.setUser({ email: data.email, token: '' })
      getStoreActions().userRoleState.setUserRole({ email: data.email, roles: user.roles })
    }
  }),
  logOut: action((state) => {
    state.user = null
  }),
}

export default userState
