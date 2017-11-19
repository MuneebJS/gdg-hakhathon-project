import React from 'react';
import Radium from 'radium';
import Carousel from './Carousel';
import FeaturedServices from './featuredServices/FeaturedServices';
import Renovation from './renovation/Renovation';


class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <Carousel />
                <FeaturedServices />
                <Renovation />
            </div>
        )
    }
}

Home = Radium(Home);
export default Home;