interface props {
    windowTrigger: Boolean;
    setWindowTrigger: (setWindowTrigger: boolean) => void;
}

function AddInspectionWindow({windowTrigger, setWindowTrigger}: props): JSX.Element {

    const options: string[] = ["Standard", "Premium", "Sport"];
    const listItems = options.map((option) => {
        <option value={option}>hi</option>
    });

    return(
        <div className="inspection-window h-96">
            <h1 className="text-center">Request new Inspection</h1>
            <input type="text" placeholder="Make"/>
            <input type="text" placeholder="Model"/>
            <input type="text" placeholder="Year"/>
            <br/>

            <select>
                {
                    options.map(option => {
                        return(
                           <option value={option}>{option}</option> 
                        )
                    })
                }
            </select>
        </div>
    )
}

export default AddInspectionWindow;