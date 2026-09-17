import { ReactNode } from 'react'
import './NavbarList.css'

type Props = {
    children: ReactNode
}

export function NavbarList({ children }: Props) {
    return (
        <nav>
            <ul className="navbar-list">
                {children}
            </ul>
        </nav>
    )
}

export function NavbarListItens({ children }: Props) {
    return (
        <li className='navbar-list-itens'>{children}</li>
    )
}