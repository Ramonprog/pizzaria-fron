'use client'

import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"
import { parseCookies } from 'nookies'

type PrivateRouteProps = {
    children: ReactNode
}

function checkUserAuthenticated() {
    const cookies = parseCookies()
    const token = cookies['@nextauth.token']
    return !!token

}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const router = useRouter()

    const isUserAuthenticated = checkUserAuthenticated()

    useEffect(() => {
        if (!isUserAuthenticated) {
            router.push('/')
        }
    }, [isUserAuthenticated])

    return (
        <>
            {!isUserAuthenticated && null}
            {isUserAuthenticated && children}
        </>
    )

}

export default PrivateRoute