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

    return(
        <div>
            <div className="inspection-window px-2 py-2">
                <div className="absolute top-0 right-0">
                    <img src={svg} alt="" className="w-8 hover:cursor-pointer" onClick={handleXClick}/>
                </div>
                <div className="mx-4 my-2 flex flex-col items-center">
                    <h1 className="tracking-wide text-2xl">Filip Szymanski</h1>
                    <h1>E-Mail: filip@gmail.com</h1>
                    <h1>Code: 1234-abcd-5678-efgh</h1>
                </div>
            </div>
        </div>
        
    )
}

export default DashboardDetailsCard;