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
  logIn: thunk(async (actions, data) => {
    const token = await userApi.logIn(data.email, data.password)
    if (token) actions.setUser({ email: data.email, token })
  }),
  logOut: action((state) => {
    state.user = null
  }),
}

export default userState
