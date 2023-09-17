'use client'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import { InputCustomComponent } from '@/components/ui/custom/InputCustomComponent'
import { Button } from "@/components/ui/button"
import { Loader } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'


export default function Home() {

  const [initialState, setInitialState] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)

  }

  return (
    <div className='w-full h-full flex flex-col items-center mt-10'>

      <Image src={Logo} height={300} width={300} alt='Logo da fratelli pizzaria' className='mx-auto' />


      <form className='max-w-lg w-full px-4 m-auto'>

        <div className='mb-3'>
          <InputCustomComponent type='text' htmlfor='email' label='E-mail' placeholder='Digite seu e-mail' />
        </div>

        <div>
          <InputCustomComponent type='password' htmlfor='password' label='Senha' placeholder='Digite sua senha' />
        </div>
      </form>

      <div className='max-w-lg w-full px-4 m-auto'>
        <Button onClick={handleLogin} className='mt-3 w-full bg-red-600 hover:bg-red-900 transition-all duration-300 ease-in-out'>
          {loading ? <Loader size={26} className='animate-spin cursor-not-allowed' /> : 'Acessar'}
        </Button>

        <span className='text-sm'>Não possui conta? <Link href={'/signup'} className='text-zinc-400 hover:text-neutral-50 underline transition-all duration-300 ease-in-out'>Cadastre-se</Link> </span>
      </div>
    </div>
  )
}
