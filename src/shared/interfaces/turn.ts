import { Artist } from './user';
import { Genre } from '../enums';

export interface Turn {
  id: string;
  artist: Artist;
  createdAt: Date;
  updatedAt?: Date;
  genre: string
  description: string  
}

export interface ITurnNetwork{
  type: "Video" | "Audio";
  user_id: string,
  genre: string,
  sourceUrl: string,
  title: string,
  description?: string,
  coverImage?: string,
  beginTimeTurn: number,
  duration: number
}

export type TFileType = 'Video' | 'Audio'

export type TGenre =
  | 'HipHop'
  | 'Rap'
  | 'Trap'
  | 'Hardstyle'
  | 'HardCore'
  | 'R & B'
  | 'Pop'
  | 'OldSchool'
  | 'Drill'
  | 'Raggaeton';


  export type Role = 'Artist' | 'User' | 'Ghost'