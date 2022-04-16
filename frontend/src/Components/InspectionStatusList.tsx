interface data {
    make: string;
    model: string;
    year: number;
    status: number;
};

function InspectionStatusList({make, model, year, status}: data): JSX.Element {

    let statusName: string = "";

    if(status === 3){
        statusName = "WAITING";
    } else if (status === 2){
        statusName = "IN PROGRESS";
    } else if (status === 1){
        statusName = "DONE";
    }

    return(
        <div className="w-full flex flex-row justify-around text-stone-900 my-2">
            <h1>{make}</h1>
            <h1>{model}</h1>
            <h1>{year}</h1>
            <h1 className="bg-white rounded px-1">{statusName}</h1>
        </div>
    )
}

export default InspectionStatusList;