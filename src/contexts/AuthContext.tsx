'use client'
import { destroyCookie, setCookie } from "nookies";
import { createContext, ReactNode, useContext, useState } from "react";
import { useRouter } from "next/router";
import { api } from "@/services/apiClient";



type AuthContextData = {
    user: UserProps
    isAuthenticated: boolean
    singIn: (data: SingInProps) => Promise<void>
    signOut: () => void
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

export async function signOut() {
    const router = useRouter()
    try {
        destroyCookie(undefined, '@nextauth.token')
        router.push('/')
    } catch {
        console.log('Erro ao deslogar')
    }
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: ''
    })
    const isAuthenticated = !!user

    async function singIn({ email, password }: SingInProps) {

        try {
            const res = await api.post('/login', {
                email, password
            })
            const { id, name, token } = res.data
            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30, // Expira em 1 mes
                path: '/' //Quais caminhos terao acesso ao cookie (todos)
            })

            setUser({ email, id, name })

            //pasar o token para proximas requisiçoes

            api.defaults.headers['Authorizarin'] = `Bearer ${token}`

            //redirect para dashboard
            window.location.href = 'dashboard'
        } catch (error: any) {
            console.log("🚀 ~ file: AuthContext.tsx:60 ~ singIn ~ error:", error.message)
        }
    }
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, singIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}
