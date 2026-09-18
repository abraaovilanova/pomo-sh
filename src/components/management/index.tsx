import { useState } from 'react'
import ManagementList from "./ManagementList"
import './Management.css'

type ManagementProps = {
    title: String
}

type ManagementModalProps = {
    title: String
    display: boolean
    setDisplay: (f:boolean) => void
}

function Management({ title }: ManagementProps) {
    const [item, setItem] = useState(['a','b','c'])
    const [displayModal, setDisplayModal] = useState<boolean>(false)
    return <div className="management">
        <div>
            <button onClick={() => {
                setDisplayModal(prev => !prev)
            }}>Add <b>{title}</b></button>
        </div>
        <ManagementList>
            {item.map(el => <li>{el}</li>)}
        </ManagementList>
        <ManagementModal display={displayModal} title={title} setDisplay={setDisplayModal} />
    </div>
}

function ManagementModal({ title, display, setDisplay }: ManagementModalProps){
    return (
        <div className="modal" style={{display: display ? 'block' : 'none'}}>
            <div className="modal-content ">
                <span className="close" onClick={()=>setDisplay(false)}>&times;</span>
                <p>Add {title}</p>
                <input type='text' />
            </div>

        </div>
    )
}

export default Management