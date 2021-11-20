import React, { Component } from 'react';
import image1 from "../../../assets/img/9.Greenscreen View.jpg"
import image2 from "../../../assets/img/iphone_x copy.png"

const initData = {
    iconClass: "far fa-lightbulb text-primary mr-1",
    preHeading: "Awesome",
    preHeadingspan: "Interface",
    heading: "Simple & Beautiful Interface",
    headingText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    headingTexttwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati."
}

const data = [
    {
        image: "/img/screenshot_2.jpg"
    },
    {
        image: "/img/screenshot_2.jpg"
    },
    {
        image: "/img/screenshot_3.jpg"
    },
]

class Slider extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <div className="app-screenshots">
                {/* Single Screenshot Item */}
                {data.map((item, idx) => {
                    return(
                        <div key={`so_${idx}`} className="single-screenshot">
                            <img src={item.image} alt=""/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Slider;