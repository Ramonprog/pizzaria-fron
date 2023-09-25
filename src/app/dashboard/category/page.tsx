'use client'
import { Button } from '@/components/ui/button'
import { InputCustomComponent } from '@/components/ui/custom/InputCustomComponent'
import React, { FormEvent, useState } from 'react'
import { api } from '@/services/apiClient'
import { toast } from '@/components/ui/use-toast'

const Category = () => {
    const [data, setData] = useState('')

    async function handleSubmit(event: FormEvent<HTMLElement>) {
        event.preventDefault()
        if (data === '') return

        try {
            const res = await api.post('/category', {
                name: data
            })
            console.log("res:", res.data)
            toast({
                description: 'Categoria cadastrada com sucesso!'
            })
            setData('')
        } catch (error) {
            console.log("🚀 ~ file: page.tsx:17 ~ handleSubmit ~ error:", error)
        }
    }

    return (
        <main className='max-w-lg m-auto mt-16 px-2'>
            <h1 className='text-2xl font-bold mb-4'>Cadastrar nova categoria</h1>

            <form onSubmit={handleSubmit}>
                <InputCustomComponent
                    label={'Nome da Categoria'}
                    type={'text'}
                    placeholder='Selecione uma categoria'
                    value={data}
                    func={(e) => setData(e.target.value)}
                    htmlfor='category'
                />

                <Button type={'submit'} className='w-full mt-4 bg-green-700 hover:bg-green-500 ease-in-out duration-200'>Cadastrar</Button>
            </form>
        </main>
    )
}

export default Category