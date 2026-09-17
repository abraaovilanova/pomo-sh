import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

function ManagementContainer({ children }:Props) {
    return (
        <div>
            {children}
        </div>
    )
}

export default ManagementContainer