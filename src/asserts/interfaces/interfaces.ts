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
  isCurrentlyUser?: boolean,
  isUpdate?: boolean,
  isReplying?: boolean,
  isChangeScore?: boolean,
  user: User,
}

export interface ReplyStruct extends BasicCommentStruct{
  replyingTo?: string,
}

export interface CommentsStruct extends BasicCommentStruct{
    replies?:  ReplyStruct[],
}
