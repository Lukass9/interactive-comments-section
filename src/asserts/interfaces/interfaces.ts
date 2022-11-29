import { BaseSyntheticEvent } from "react"

export interface User {
  username: string,
  image: {
    png: string,
  }
}

export interface BasicCommentStruct{
  id: number,
  content: string,
  createdAt: string,
  score: number,
  user: User,
}

export interface Reply extends BasicCommentStruct{
  replyingTo?: string,
  isCurrentlyUser?: boolean,
}

export interface CommentsStruct extends BasicCommentStruct{
    replies?:  Reply[],
    isCurrentlyUser?: boolean,
    isWriteComment?: boolean,
}

export interface Comments extends Reply, CommentsStruct{
  isReply: boolean,
  handleChangeScore: (event: BaseSyntheticEvent, id: number) => void,
  handleReplying: (id: number) => void, 
  key: React.Key,
}
