import svg from "../images/cross.svg";

interface props {
    windowTrigger: Boolean;
    setWindowTrigger: (setWindowTrigger: boolean) => void;
}

function AddInspectionWindow({windowTrigger, setWindowTrigger}: props): JSX.Element {

    const options: string[] = ["Standard", "Premium", "Sport"];

    function handleChoice(event: any){
        console.log(event.target.value);
        setWindowTrigger(event.target.value);
    }

    return(
        <div className="inspection-window h-80 flex flex-col px-6 py-6">
            
            <div className="absolute top-0 right-0">
                <img src={svg} alt="" />
            </div>
            <h1 className="text-center">Request new Inspection</h1>
            <input type="text" placeholder="Make" className="request-field"/>
            <input type="text" placeholder="Model" className="request-field"/>
            <input type="text" placeholder="Year" className="request-field"/>
            <br/>

            <select className="px-1 py-1 outline-0" onChange={handleChoice}>
                {
                    options.map(option => {
                        return(
                           <option value={option} className="px-1 py-1">{option}</option> 
                        )
                    })
                }
            </select>

            <button className="bg-sky-500 rounded text-white py-1 my-5 hover:shadow-2xl hover:bg-sky-400
                transition duration-150
            ">Request</button>
        </div>
    )
}

export default AddInspectionWindow;