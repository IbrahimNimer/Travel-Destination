import { Link } from 'react-router-dom';
import './tour.css';

function Tour(props) {
    return (
        <div className="tour">
            <Link to={`/city/${props.id}`}>
                <h2>{props.city_name}</h2>
                <img src={props.city_image} alt={props.city_name} />
            </Link>
        </div>
    );
}

export default Tour;
