import { useHistory } from "react-router-dom";

const NotFound = () => {

    let history = useHistory();

    const handleClickButton = () => {
        history.push('/')
    }

    return (
        <div>
            <h5>This page Isn't Available</h5>
            <h4>Maybe the link is broken or the page has been deleted. Please check if the link you are trying to open is correct.</h4>
            <button className="btn btn-warning" onClick={() => handleClickButton()}>Go to Homepage</button>
        </div>
    )
}

export default NotFound;