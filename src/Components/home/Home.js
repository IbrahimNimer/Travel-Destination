import Header from '../header/Header.js';
import Tours from '../tours/tours.js';
import Footer from '../footer/Footer.js';


const travelData = require('../../Data/db.json');

function Home() {
    
    return ( 
        <div>
            <Header />
            <div>
                {travelData.map((element) => (
                    <Tours key={element.id} city_name={element.name} city_image={element.image} />
                ))}
            </div>
            <Footer />
        </div>
    );
    
}

export default Home;

