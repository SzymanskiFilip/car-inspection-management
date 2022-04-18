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

const row2: dashboardData = {
    id: 4,
    brand: "AUDI",
    model: "R8",
    dueDate: "18.04.2022",
    year: 2014,
}
const row3: dashboardData = {
    id: 2,
    brand: "AUDI",
    model: "R8",
    dueDate: "18.04.2022",
    year: 2014,
}

let mockRows: dashboardData[] = [row1, row2, row3, row1, row2];


function DashboardTable(): JSX.Element{

    let darkRow: Boolean = false;
    let darkRowClass: string = "bg-purple-100";

    return(
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
                            <tr>
                                <td className={"table-cell " + darkRowClass}>{row.brand}</td>
                                <td className={"table-cell " + darkRowClass}>{row.model}</td>
                                <td className={"table-cell " + darkRowClass}>{row.dueDate}</td>
                                <td className={"table-cell " + darkRowClass}>{row.year}</td>
                                <td className={"table-cell " + darkRowClass}>OPEN</td>
                                <td className={"table-cell " + darkRowClass}>FINISH</td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                    

                </table>
    )
}

export default DashboardTable;
