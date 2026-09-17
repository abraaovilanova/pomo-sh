import ManagementList from "./ManagementList"

type ManagementProps = {
    title: String
}

function Management({ title }: ManagementProps) {
    return <div className="management">
        <div>
            <button>Add <b>{title}</b></button>
        </div>
        <ManagementList>
            {title} List
        </ManagementList>
    </div>
}

export default Management