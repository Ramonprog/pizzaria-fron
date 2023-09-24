
import ButtonLogOut from "@/components/ui/custom/ButtonLogOut"
import Image from "next/image"
import Link from "next/link"


export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <header className='mt-3 max-w-7xl m-auto' >
            <nav className="flex justify-between items-center">
                <Link href={'/dashboard'}>
                    <Image src={'/logo.png'} width={100} height={100} alt={'logo'} />
                </Link>
                <ul className="flex gap-4 items-center">
                    <li className="hover:text-red-600 ease-in-out duration-500">
                        <Link href={'/category'}>
                            Categoria
                        </Link>
                    </li>
                    <li className="hover:text-red-600 ease-in-out duration-500">
                        <Link href={'/product'}>
                            Menu
                        </Link>
                    </li>
                    <ButtonLogOut />
                </ul>
            </nav>
            {children}
        </header>
    )
}