import InspectionListRow from "./InspectionListRow";
import InspectionStatusList from "./InspectionStatusList";


function InspectionCard(): JSX.Element {
    return(
        <div className="inspection flex flex-col container">
            <div className="flex flex-row mx-2 my-2">
                <div className="w-full">
                    <h1>List:</h1>
                    <InspectionListRow todo="CHANGE TIRES" status={1}/>
                    <InspectionListRow todo="CHANGE TIRES" status={2}/>
                    <InspectionListRow todo="CHANGE TIRES" status={3}/>


                </div>
            </div>
            <InspectionStatusList make="BMW" model="M4" year={2014} status={3}/>
        </div>
    )
}

export default InspectionCard;