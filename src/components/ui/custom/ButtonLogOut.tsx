'use client'
import { Button } from "../button"
import { LogOut } from "lucide-react"
import { useAuthContext } from "@/contexts/AuthContext"

const ButtonLogOut = () => {
    const { signOut } = useAuthContext()
    return (
        <Button onClick={signOut} variant='ghost'>
            <LogOut />
        </Button>
    )
}

export default ButtonLogOut