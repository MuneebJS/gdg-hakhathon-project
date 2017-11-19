import React from 'react';
import Radium from 'radium';
import slide1 from '../../assets/images/slide-01.jpg'
import slide2 from '../../assets/images/slide-02.jpg'
import slide3 from '../../assets/images/slide-03.jpg'
import {Carousel} from 'react-bootstrap'


class HomePageCarouse extends React.Component {
    render() {
        return (
            <Carousel >
            <Carousel.Item>
              <img alt="slide 1" src={slide1}/>
              <Carousel.Caption>
                <h3>Eletetrician</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="slide 2" src={slide1}/>
              <Carousel.Caption>
                <h3>Plumbing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item>
              <img alt="slide 3" src={slide1}/>
              <Carousel.Caption>
                <h3>Bike  Tune-up</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
    }
}



HomePageCarouse = Radium(HomePageCarouse);
export default HomePageCarouse;

