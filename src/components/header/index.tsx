import { ReactNode } from 'react'
import './Header.css'

type Props = {
    children: ReactNode
}

function Header({ children }: Props) {
    return (
        <header className="header-container">
            {children}
        </header>
    )
}

export default Header;