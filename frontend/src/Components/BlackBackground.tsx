interface props {
    windowTrigger: Boolean;
    setWindowTrigger: (setWindowTrigger: boolean) => void;
}

function BlackBackground({windowTrigger, setWindowTrigger}: props): JSX.Element{

    function handleClick(){
        setWindowTrigger(false);
    }

    return(
        <div className="inspection-background" onClick={handleClick}></div>
    )
}

export default BlackBackground;