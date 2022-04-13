import InspectionListRow from "./InspectionListRow";


function InspectionCard(): JSX.Element {
    return(
        <div className="inspection flex flex-col">
            <div className="flex flex-row mx-2 my-2">
                <div className="w-full h-full">
                    <h1>List:</h1>
                    <div className="flex flex-col">

                        <InspectionListRow todo="hello" status="hello"/>


                    </div>
                </div>
            </div>

            <div className="w-full h-full flex flex-row justify-around my-5 text-stone-900">
                <h1>Mercedes-Benz</h1>
                <h1>C63 AMG</h1>
                <h1>2014</h1>
                <h1>TO BE PICKED UP</h1>
            </div>
        </div>
    )
}

export default InspectionCard;