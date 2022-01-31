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
  nickname: string;
}

export interface INoteResponse {
  notes: TNote[];
  message: string;
}

export interface ISingleNote {
  note: TNote;
  message: string;
}

export type TNote = {
  note: string;
  isPrivate: boolean;
  user: User;
  id: string;
};

export interface User {
  nickname: string;
  avatar: string;
  id: string;
}
