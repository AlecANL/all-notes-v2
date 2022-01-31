export interface IPostNote {
  isPrivate: boolean;
  note: string;
  user: IUser | null;
}

export interface INote {
  note: string;
  isPrivate: boolean;
  user: IUser | null;
  id: string;
}

export interface IUser {
  id: string;
  avatar: string;
  username: string;
}
