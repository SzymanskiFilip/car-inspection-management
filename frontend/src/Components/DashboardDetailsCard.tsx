import { useState } from "react";
import svg from "../images/cross.svg";
import AreYouSure from "./AreYouSure";

interface props {
    windowTrigger: Boolean;
    setWindowTrigger: (setWindowTrigger: boolean) => void;
}

function DashboardDetailsCard({windowTrigger, setWindowTrigger}: props): JSX.Element{

    const [popupActive, setPopupActive] = useState<Boolean>(false);

    function handleXClick(){
        setWindowTrigger(false);
    }

    function handleRemoveClick(){
        setPopupActive(true);
    }

    function handleRemove(){
        console.log("DELETION CONFIRMED")
    }

    return(
        <div>
            {
                popupActive ? <AreYouSure firePassedFunction={handleRemove} setWindowTrigger={setWindowTrigger}/> : null
            }
            {
                !popupActive ? 
                <div className="inspection-window px-2 py-2">
                    <div className="absolute top-0 right-0">
                        <img src={svg} alt="" className="w-8 hover:cursor-pointer" onClick={handleXClick}/>
                    </div>
                    <div className="mx-4 my-2 flex flex-col items-center">
                        <h1 className="tracking-wide text-2xl">Filip Szymanski</h1>
                        <h1>E-Mail: filip@gmail.com</h1>
                        <h1>Code: 1234-abcd-5678-efgh</h1>
                        <h1 className="remove-button" onClick={handleRemoveClick}>REMOVE INSPECTION</h1>
                    </div>
                </div>
                : null
            }
            
        </div>
        
    )
}

export default DashboardDetailsCard;