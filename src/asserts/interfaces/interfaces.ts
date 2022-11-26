import { BaseSyntheticEvent } from "react"

export interface User {
  username: string,
  image: {
    png: string,
  }
}

export interface Reply {
  id: number,
  content: string,
  createdAt: string,
  score: number,
  replyingTo: string,
  user: User,
  isCurrentlyUser?: boolean,
}

export interface CommentsState {
    id: number,
    content: string,
    createdAt: string,
    score: number,
    user: User,
    replies?:  Reply[],
    isCurrentlyUser?: boolean,
}

export interface Comments {
  username: string,
  id: number,
  content: string, 
  createdAt: string,
  score: number,
  userImage: string,
  isReply: boolean,
  isCurrentlyUser?: boolean,
  handleChangeScore: (event: BaseSyntheticEvent, id: number) => void,
  key: React.Key
}
