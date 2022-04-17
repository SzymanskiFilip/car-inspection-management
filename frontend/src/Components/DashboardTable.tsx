function DashboardTable(): JSX.Element{
    return(
        <table className="table-style">
                    <thead>
                        <tr>
                            <th className="table-head-cell">Brand</th>
                            <th className="table-head-cell">Due Date</th>
                            <th className="table-head-cell">Year</th>
                            <th className="table-head-cell">Status</th>
                            <th className="table-head-cell">Details(BTN)</th>
                            <th className="table-head-cell">Finish</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="table-cell">12333333333333</td>
                            <td className="table-cell">12333333333333</td>
                            <td className="table-cell">12333333333333</td>
                            <td className="table-cell">12333333333333</td>
                            <td className="table-cell"><button>123</button></td>
                            <td className="table-cell"><button>finish</button></td>
                        </tr>
                    </tbody>
                </table>
    )
}

export default DashboardTable;