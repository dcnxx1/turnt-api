import { User } from './user'
import { Turn } from './turn'

export interface Playlist{
    id: string,
    name: String
    turns: Turn[]
    createdAt: Date,
    updatedAt?: Date
    user: User
}