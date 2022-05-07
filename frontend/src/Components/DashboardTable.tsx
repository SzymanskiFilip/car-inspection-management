import BlackBackground from "./BlackBackground";
import {useState, useEffect} from "react";
import DashboardDetailsCard from "./DashboardDetailsCard";
import AreYouSure from "./AreYouSure";

interface dashboardData {
    client_id: number;
    id: number;
    inspectionType: string;
    make: string;
    model: string;
    workshop_id: number;
    year_of_production: number;
}



function DashboardTable(): JSX.Element{

    let darkRow: Boolean = false;
    let darkRowClass: string = "bg-purple-100";

    const [windowTrigger, setWindowTrigger] = useState<Boolean>(false);
    const [surePopUp, setSurePopUp] = useState<Boolean>(false);
    const [rows, setRows] = useState<dashboardData[]>([]);
    //const rows: dashboardData[] = [];

    function handleDetailsClick(id: number){
        setWindowTrigger(true);
    }

    function handleFinishClick(){
        setSurePopUp(true);
    }

    function handleFinish(){
        console.log("confirmed finsihing")
    }

    async function fetchInspections(){
        let config : RequestInit = {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }

        await fetch("http://localhost:8080/inspections", config)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            setRows(res)
        })
    }

    useEffect(() => {
        fetchInspections();
    }, []);

    return(
        <div>
            {
                windowTrigger ? <BlackBackground windowTrigger={windowTrigger} setWindowTrigger={setWindowTrigger}/> : null
            }
            {
                windowTrigger ? <DashboardDetailsCard windowTrigger={windowTrigger} setWindowTrigger={setWindowTrigger}/> : null
            }

            {
                surePopUp ? <BlackBackground windowTrigger={windowTrigger} setWindowTrigger={setSurePopUp}/> : null
            }
            {
                surePopUp ? <AreYouSure firePassedFunction={handleFinish} setWindowTrigger={setSurePopUp}/> : null
            }
            
            <table className="table-style">
                 <thead>
                    <tr>
                        <th className="table-head-cell">Brand</th>
                        <th className="table-head-cell">Model</th>
                        <th className="table-head-cell">Year</th>
                        <th className="table-head-cell">User Details</th>
                        <th className="table-head-cell">Finish</th>
                    </tr>
                </thead>

                <tbody>
                {
                rows.map((row) => {
                    if(darkRow === false){
                        darkRow = true;
                        darkRowClass = "bg-purple-100";
                    } else if(darkRow === true){
                        darkRow = false;
                        darkRowClass = "";
                    }
                    return(
                        <tr key={row.id}>
                            <td className={"table-cell " + darkRowClass}>{row.make}</td>
                            <td className={"table-cell " + darkRowClass}>{row.model}</td>
                            <td className={"table-cell " + darkRowClass}>{row.year_of_production}</td>
                            <td className={"table-cell " + darkRowClass}>
                                <h1 className="table-button" onClick={() => handleDetailsClick(row.id)}>Details</h1>
                            </td>
                            <td className={"table-cell " + darkRowClass}>
                                <h1 className="table-button" onClick={handleFinishClick}>Finish</h1>
                            </td>
                        </tr>
                    )
                })
                }
                </tbody>
            </table>
        </div>
    )
}

export default DashboardTable;
