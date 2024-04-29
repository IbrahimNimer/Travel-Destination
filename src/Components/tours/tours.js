import'./tours.css';

function Tours(props) {
    return (
        <div className="tour">
            <h2>{props.city_name}</h2>
            <img src={props.city_image} alt={props.city_name} />
        </div>
    );
}

export default Tours;