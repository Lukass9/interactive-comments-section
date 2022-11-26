import { commentsState, user } from "../../../interfaces/interfaces"

export const currentUserInitState: user = {
    username: '',
    image: {
      png:''
    }
  }
export const initialState: commentsState[] = [{
id: 0,
content: '',
createdAt: '',
score: 0,
user: currentUserInitState
}]