import Image from 'next/image'
import Logo from '../../../public/logo.png'
import { InputCustomComponent } from '@/components/ui/custom/InputCustomComponent'
import { Button } from "@/components/ui/button"
import ButtonLoginCustom from '@/components/ui/custom/ButtonLoginCustom'


export default function Home() {

  return (
    <div className='w-full h-full flex flex-col items-center mt-10'>

      <Image src={Logo} height={300} width={300} alt='Logo da fratelli pizzaria' />

      <div className='w-96 m-auto'>
        <div className='mb-5'>
          <InputCustomComponent type='text' htmlfor='email' label='E-mail' placeholder='Digite seu e-mail' />
        </div>

        <div>
          <InputCustomComponent type='password' htmlfor='password' label='Senha' placeholder='Digite sua senha' />
        </div>
      </div>
      <ButtonLoginCustom children='Acessar' loading={false} />
    </div>
  )
}
