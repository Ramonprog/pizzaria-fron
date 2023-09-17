'use client'
import { useState } from 'react'
import { Loader } from 'lucide-react'
import { Button } from '../button'

interface IButtonProps {
    loading: boolean
    onClick?: () => void
    children: string
}

const ButtonLoginCustom = ({ children, loading, onClick }: IButtonProps) => {

    return (
        <div className='w-96 m-auto'>

            <Button className='mt-8 w-full bg-red-600 hover:bg-red-900 transition-all duration-300 ease-in-out'>
                {loading ? <Loader size={26} className='animate-spin cursor-not-allowed' /> : children}
            </Button>
        </div>
    )
}

export default ButtonLoginCustom