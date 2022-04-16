interface props {
    windowTrigger: Boolean;
    setWindowTrigger: (setWindowTrigger: boolean) => void;
}

function AddInspectionWindow({windowTrigger, setWindowTrigger}: props): JSX.Element {
    return(
        <div className="inspection-window">
            <h1>Request new Inspection123</h1>
        </div>
    )
}

export default AddInspectionWindow;