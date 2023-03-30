import "./style.scss"; 

export default function ControlToggler({active, toggle, description}) {
    let styles = active ? "inner active" : "inner"; 

    return (
        <div className="control">
            <p>{description}</p>
            <div onClick={toggle} className="select">
                <div className={styles}>                
                </div>
            </div>
        </div>
    )
}