'use client'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import { InputCustomComponent } from '@/components/ui/custom/InputCustomComponent'
import { Button } from "@/components/ui/button"
import { Loader } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { toast } from '@/components/ui/use-toast'
import { useAuthContext } from '@/contexts/AuthContext'


export default function SignUp() {
    const { signUp } = useAuthContext()
    const [initialState, setInitialState] = useState({
        email: '',
        password: '',
        company: ''
    })

    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (initialState.email === '' || initialState.password === '' || initialState.company === '') {
            return toast({
                description: 'Preencha todos os campos'
            })
        }
        setLoading(true)
        try {
            signUp({ email: initialState.email, password: initialState.password, name: initialState.company })
        } catch (error) {
            return toast({
                description: 'Erro ao cadastrar usuário'
            })
        }
    }

    return (
        <div className='w-full h-full flex flex-col items-center mt-10'>

            <Image src={Logo} height={300} width={300} alt='Logo da fratelli pizzaria' className='mx-auto' />

            <h1 className='text-2xl font-bold text-zinc-400 my-5'>Faça seu cadastro</h1>

            <form onSubmit={handleSubmit} className='max-w-lg w-full px-4 m-auto'>

                <div className='mb-3'>
                    <InputCustomComponent func={(e) => {
                        setInitialState({
                            ...initialState,
                            company: e.target.value
                        })
                    }} type='text' htmlfor='company' label='Empresa' placeholder='Nome da empresa' value={initialState.company} />
                </div>

                <div className='mb-3'>
                    <InputCustomComponent func={(e) => {
                        setInitialState({
                            ...initialState,
                            email: e.target.value
                        })
                    }} type='text' htmlfor='email' label='E-mail' placeholder='Digite seu e-mail' value={initialState.email} />
                </div>

                <div>
                    <InputCustomComponent func={(e) => {
                        setInitialState({
                            ...initialState,
                            password: e.target.value
                        })

                    }} type='password' htmlfor='password' label='Senha' placeholder='Digite sua senha' value={initialState.password} />
                </div>
                <div className='max-w-lg w-ful m-auto'>
                    <Button type='submit' className='mt-3 w-full bg-red-600 hover:bg-red-900 transition-all duration-300 ease-in-out'>
                        {loading ? <Loader size={26} className='animate-spin cursor-not-allowed' /> : 'Acessar'}
                    </Button>

                    <Link href={'/'} className='text-zinc-400 hover:text-neutral-50 underline transition-all duration-300 ease-in-out'>Já possuo uma conta</Link>
                </div>
            </form>

        </div>
    )
}
