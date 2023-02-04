import { CommentsStruct, User } from "../../interfaces/interfaces"

export const currentUserInitState: User = {
    username: '',
    image: {
      png:''
    }
  }
export const initialState: CommentsStruct[] = [{
  id: 0,
  content: '',
  createdAt: '',
  timestamp: 0,
  score: 0,
  user: currentUserInitState,
  isCurrentlyUser: false
}]