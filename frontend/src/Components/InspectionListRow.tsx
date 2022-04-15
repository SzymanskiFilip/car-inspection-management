interface input {
    todo: string;
    status: number;
}

function InspectionListRow({todo, status} : input): JSX.Element {

    let colorName: string = "";
    const statusName: string[] = ["DONE", "IN PROGRESS", "WAITING"];

    if(status === 1){
        colorName = "bg-green-500";
    } else if (status === 2){
        colorName = "bg-amber-500";
    } else if (status === 3){
        colorName = "bg-red-500";
    }

    return(
        <div className={"flex flex-row justify-between bg-green-500 rounded px-2 my-2 " + colorName}>
            <p className="mr-3">{todo}</p>
            <p>{statusName[status - 1]}</p>
        </div>
    )
}

export default InspectionListRow;