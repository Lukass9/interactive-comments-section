export interface User {
  username: string,
  image: {
    png: string,
  }
}

export interface BasicCommentStruct{
  id: number,
  collectionId?: string,
  content: string,
  createdAt: string,
  timestamp?: number,
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
export type LogedUser = {
  email: string;
  uid: string;
  currentUser: {
      authProvider: string;
      email: string;
      name: string;
      uid: string;
  }
}