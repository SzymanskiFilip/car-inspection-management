import svg from "../images/cross.svg";

interface props{
    firePassedFunction: () => void;
    setWindowTrigger: (setWindowTrigger: boolean) => void;
}

function AreYouSure({firePassedFunction, setWindowTrigger}: props): JSX.Element{

    function handleWindowDisable(){
        setWindowTrigger(false);
    }

    function executePassedFunction(){
        firePassedFunction();
    }


    return(
        <div className="inspection-window px-2 py-2">
                    <div className="absolute top-0 right-0">
                        <img src={svg} alt="" className="w-8 hover:cursor-pointer" onClick={handleWindowDisable}/>
                    </div>
                    <div className="mx-4 my-2 flex flex-col items-center">
                        <h1 className="tracking-wide text-3xl">Are you sure?</h1>
                        <div className="flex flex-row">
                            <h1 className="remove-button mx-2" onClick={executePassedFunction}>YES</h1>
                            <h1 className="remove-button-no mx-2" onClick={handleWindowDisable}>NO</h1>
                        </div>
                    </div>
                </div>
    )
}

export default AreYouSure;