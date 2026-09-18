import { useState, type Dispatch, type SetStateAction } from 'react'
import ManagementList from "./ManagementList"
import './Management.css'

type ManagementProps = {
    title: String
}

type ManagementModalProps = {
    title: String
    display: boolean
    setDisplay: (f: boolean) => void
    setItem: Dispatch<SetStateAction<String[] | undefined>>
}

function Management({ title }: ManagementProps) {
    const [item, setItem] = useState<String[] | undefined>(undefined)
    const [displayModal, setDisplayModal] = useState<boolean>(false)
    return <div className="management">
        <div>
            <button onClick={() => {
                setDisplayModal(prev => !prev)
            }}>Add <b>{title}</b></button>
        </div>
        <ManagementList>
            {item?.map(el => <li>{el}</li>)}
        </ManagementList>
        <ManagementModal display={displayModal} title={title} setDisplay={setDisplayModal} setItem={setItem} />
    </div>
}

function ManagementModal({ title, display, setDisplay, setItem }: ManagementModalProps) {
    const [itemName, setItemName] = useState<String>('')
    return (
        <div className="modal" style={{ display: display ? 'block' : 'none' }}>
            <div className="modal-content ">
                <span className="close" onClick={() => {
                    setItemName('')
                    setDisplay(false)
                    }}>&times;</span>
                <div>
                    <input type='text' onChange={(e) => {
                        setItemName(e.target.value)
                    }} />
                    <button onClick={() => {
                        setItem(prev => [...(prev ?? []), itemName])
                        setItemName('')
                        setDisplay(false)
                    }

                        }>Add {title}</button>
                </div>

            </div>
        </div>
    )
}

export default Management