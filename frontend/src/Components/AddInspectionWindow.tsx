interface props {
    windowTrigger: Boolean;
    setWindowTrigger: (setWindowTrigger: boolean) => void;
}

function AddInspectionWindow({windowTrigger, setWindowTrigger}: props): JSX.Element {
    return(
        <div className="inspection-window">
            {/*dać guzik odlikania i na tlo odlkikanie*/}
        </div>
    )
}

export default AddInspectionWindow;