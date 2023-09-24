'use client'
import { Button } from "../button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { destroyCookie } from "nookies"

const ButtonLogOut = () => {
    const router = useRouter()
    function signOut() {
        const router = useRouter()
        try {
            destroyCookie(undefined, '@nextauth.token')
            router.push('/')
        } catch {
            console.log('Erro ao deslogar')
        }
    }

    return (
        <Button onClick={() => signOut()} variant='ghost'>
            <LogOut />
        </Button>
    )
}

export default ButtonLogOut