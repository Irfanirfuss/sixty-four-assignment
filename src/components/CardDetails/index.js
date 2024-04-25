import "./index.css";

const CardDetails = (props) => {
    const { data } = props;
    const { imageUrl, description } = data;
    return (
        <li className="card-details">
            <div>
                <img src={imageUrl} alt="img" />
                <p>{description}</p>
            </div>
        </li>
    );
};

export default CardDetails;
