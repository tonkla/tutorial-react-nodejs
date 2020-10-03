// import { Action, action, Thunk, thunk } from 'easy-peasy'
// import auth from '../../services/auth'
import { Action, action } from 'easy-peasy'
import { User } from '../../typings'

export interface UserStateModel {
  user: User | null
  setUser: Action<UserStateModel, User | null>
  logOut: Action<UserStateModel>
  // signIn: Thunk<UserStateModel>
  // signOut: Thunk<UserStateModel>
}

const userState: UserStateModel = {
  user: null,
  setUser: action((state, user) => {
    state.user = user
  }),
  logOut: action((state) => {
    state.user = null
  }),
  // signIn: thunk(async (actions) => {
  //   const user = await auth.signIn()
  //   if (user) actions.set(user)
  // }),
  // signOut: thunk(async (actions) => {
  //   await auth.signOut()
  //   actions.set(null)
  // }),
}

export default userState
