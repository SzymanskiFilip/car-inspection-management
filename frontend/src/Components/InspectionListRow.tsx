interface input {
    todo: string;
    status: string;
}

function InspectionListRow({todo, status} : input): JSX.Element {
    return(
        <div className="flex flex-row justify-between bg-green-500 rounded px-2 my-2">
            <p className="mr-3">{todo}</p>
            <p>{status}</p>
        </div>
    )
}

export default InspectionListRow;