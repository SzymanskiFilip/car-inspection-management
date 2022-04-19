import svg from "../images/cross.svg";

interface props {
    windowTrigger: Boolean;
    setWindowTrigger: (setWindowTrigger: boolean) => void;
}

function DashboardDetailsCard({windowTrigger, setWindowTrigger}: props): JSX.Element{

    function handleXClick(){
        setWindowTrigger(false);
    }

    return(
        <div className="inspection-window flex flex-col px-4 py-4">
            <div className="absolute top-0 right-0">
                <img src={svg} alt="" className="w-6 hover:cursor-pointer" onClick={handleXClick}/>
            </div>
            <div className="flex flex-row">
                <div className="bg-stone-100 mx-2 my-2 px-1 py-1 rounded flex flex-col">

                    <div className="flex flex-row items-center justify-items-start">
                        <h1>Name:</h1>
                        <h1>Filip</h1>
                    </div>

                    <div className="flex flex-row items-center justify-around">
                        <h1>Last Name:</h1>
                        <h1>Szymanski</h1>
                    </div>

                    <div className="flex flex-row items-center justify-around">
                        <h1>Email:</h1>
                        <h1>Filip@gmail.com</h1>
                    </div>
                </div>

                <div className="bg-stone-100 mx-2 my-2 px-1 py-1 rounded">
                    <h1>User since: 19.02.2022</h1>
                    <h1>User Code: XGLS-123-fdafadxS</h1>
                </div>
            </div>

            <div className="">
                <h1>Make: BMW</h1>
                <h1>Model: M4</h1>
                <h1>Year of Production: 2004</h1>
                <h1>Due Date: 12.21.2002</h1>
            </div>

            <div className="flex flex-row">
                <h1>REMOVE</h1>
                <h1>FINISH</h1>
            </div>
        </div>
    )
}

export default DashboardDetailsCard;