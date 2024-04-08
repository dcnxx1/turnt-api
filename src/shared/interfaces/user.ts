type TUser = "Aritst" | "User" | "Ghost"

export interface BaseUser {
    id: string
    creationDate: string
    alias: string
}

export interface Artist extends BaseUser {
   type: TUser,
   
}

export interface User extends BaseUser {

}

export interface Ghost {}
