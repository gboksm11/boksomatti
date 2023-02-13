import "./BlackButton.css";

const BlackButton = (props) => {
    return(
        <div className="black-button">
            <p className="button-label">{props.label}</p>
        </div>
    )
}

export default BlackButton;