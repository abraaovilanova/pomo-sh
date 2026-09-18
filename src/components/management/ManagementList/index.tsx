import { ReactNode } from 'react'
type Props = {
    children: ReactNode
}

function ManagementList({children}:Props){
    return (
        <ul>
            {children}
        </ul>
    )
}

export default ManagementList;