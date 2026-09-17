import { ReactNode } from 'react'
type Props = {
    children: ReactNode
}

function ManagementList({children}:Props){
    return (
        <ul>
            <li>teste</li>
            <li>teste2</li>
        </ul>
    )
}

export default ManagementList;