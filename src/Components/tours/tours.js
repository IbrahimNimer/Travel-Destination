import './tours.css';
import Tour from '../tours/tour/tour.js';
import travelData from '../../Data/db.json';

function Tours() {
    return (
        <div>
            {travelData.map((element) => (
                <Tour  id={element.id} city_name={element.name} city_image={element.image} />
            ))}
        </div>
    );
}

export default Tours;