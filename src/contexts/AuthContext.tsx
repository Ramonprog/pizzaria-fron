'use client'
import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextData = {
    user: UserProps
    isAuthenticated: boolean
    singIn: (data: SingInProps) => Promise<void>

}

type UserProps = {
    id: string
    name: string
    email: string
}

type SingInProps = {
    email: string
    password: string
}

type AuthProviderProps = {
    children: ReactNode
}

const AuthContext = createContext({} as AuthContextData);
export const useAuthContext = () => useContext(AuthContext)



export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: ''
    })
    const isAuthenticated = !!user

    async function singIn() {
        alert('Login')
    }
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, singIn }}>
            {children}
        </AuthContext.Provider>
    )
}
