import { CommentsState, User } from "../../../interfaces/interfaces"

export const currentUserInitState: User = {
    username: '',
    image: {
      png:''
    }
  }
export const initialState: CommentsState[] = [{
  id: 0,
  content: '',
  createdAt: '',
  score: 0,
  user: currentUserInitState,
  isCurrentlyUser: false

}]