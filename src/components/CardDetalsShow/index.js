import "./index.css";

const CardDetalsShow = (props) => {
    const { data } = props;
    const { imageUrl, description } = data;
    return (
        <li className="moreli">
            <div>
                <img src={imageUrl} alt="img" />
                <p>{description}</p>
            </div>
        </li>
    );
};

export default CardDetalsShow;
