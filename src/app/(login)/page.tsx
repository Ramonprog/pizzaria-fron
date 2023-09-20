'use client'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import { InputCustomComponent } from '@/components/ui/custom/InputCustomComponent'
import { Button } from "@/components/ui/button"
import { Loader } from 'lucide-react'
import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useAuthContext } from '@/contexts/AuthContext'
import { toast } from '@/components/ui/use-toast'


export default function Home() {


  const { singIn } = useAuthContext()

  const [initialState, setInitialState] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()
    const data = initialState
    if (data.email === '' || data.password === '') return toast({
      description: "Todos os campos devem ser preenchidos"
    })

    setLoading(true)

    try {
      await singIn(data)
      setLoading(false)
    } catch (error) {
      console.log("🚀 ~ file: page.tsx:28 ~ handleLogin ~ error:", error)

    }


  }

  return (
    <div className='w-full h-full flex flex-col items-center mt-10'>

      <Image src={Logo} height={300} width={300} alt='Logo da fratelli pizzaria' className='mx-auto' />


      <form onSubmit={handleLogin} className='max-w-lg w-full px-4 m-auto'>

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

        <div className='max-w-lg w-full  m-auto'>
          <Button type='submit' className='mt-3 w-full bg-red-600 hover:bg-red-900 transition-all duration-300 ease-in-out'>
            {loading ? <Loader size={26} className='animate-spin cursor-not-allowed' /> : 'Acessar'}
          </Button>

          <span className='text-sm'>Não possui conta? <Link href={'/signup'} className='text-zinc-400 hover:text-neutral-50 underline transition-all duration-300 ease-in-out'>Cadastre-se</Link> </span>

        </div>
      </form>

    </div>
  )
}
