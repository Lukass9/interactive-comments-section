export interface user {
  username: string,
  image: {
    png: string,
  }
}

export interface reply {
  id: number,
  content: string,
  createdAt: string,
  score: number,
  replyingTo: string,
  user: user
}

export interface commentsState {
    id: number,
    content: string,
    createdAt: string,
    score: number,
    user: user,
    replies?:  reply[]
}
