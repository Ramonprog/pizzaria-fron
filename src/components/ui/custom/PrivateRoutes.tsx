'use client'

import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"
import { parseCookies } from 'nookies'

import { APP_ROUTES } from "@/utils/app-routers"

type PrivateRouteProps = {
    children: ReactNode
}

function checkUserAuthenticated() {
    const userToken = parseCookies.prototype('@nextauth.token')
    console.log("🚀 ~ file: PrivateRoutes.tsx:15 ~ checkUserAuthenticated ~ userToken:", userToken)
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { push } = useRouter()




}