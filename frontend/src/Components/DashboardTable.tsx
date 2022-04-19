import BlackBackground from "./BlackBackground";
import {useState} from "react";

interface dashboardData {
    id: number;
    brand: string;
    model: string;
    dueDate: string;
    year: number;
}

const row1: dashboardData = {
    id: 1,
    brand: "BMW",
    model: "M4",
    dueDate: "18.04.2022",
    year: 2014,
}


let mockRows: dashboardData[] = [row1];


function DashboardTable(): JSX.Element{

    let darkRow: Boolean = false;
    let darkRowClass: string = "bg-purple-100";

    const [windowTrigger, setWindowTrigger] = useState<Boolean>(false);

    function handleDetailsClick(id: number){
        setWindowTrigger(true);
    }

    function handleFinishClick(){
        //opens pop up to ask if sure if finished
    }

    

    return(
        <div>
            {
                windowTrigger ? <BlackBackground windowTrigger={windowTrigger} setWindowTrigger={setWindowTrigger}/> : null
            }
            <table className="table-style">
                 <thead>
                    <tr>
                        <th className="table-head-cell">Brand</th>
                        <th className="table-head-cell">Model</th>
                        <th className="table-head-cell">Due Date</th>
                        <th className="table-head-cell">Year</th>
                        <th className="table-head-cell">Details</th>
                        <th className="table-head-cell">Finish</th>
                    </tr>
                </thead>

                <tbody>
                {
                mockRows.map((row) => {
                    if(darkRow === false){
                        darkRow = true;
                        darkRowClass = "bg-purple-100";
                    } else if(darkRow === true){
                        darkRow = false;
                        darkRowClass = "";
                    }
                    return(
                        <tr key={row.id}>
                            <td className={"table-cell " + darkRowClass}>{row.brand}</td>
                            <td className={"table-cell " + darkRowClass}>{row.model}</td>
                            <td className={"table-cell " + darkRowClass}>{row.dueDate}</td>
                            <td className={"table-cell " + darkRowClass}>{row.year}</td>
                            <td className={"table-cell " + darkRowClass}>
                                <h1 className="table-button" onClick={() => handleDetailsClick(row.id)}>Details</h1>
                            </td>
                            <td className={"table-cell " + darkRowClass}>
                                <h1 className="table-button">Finish</h1>
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
