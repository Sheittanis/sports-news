import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider, Grid } from "semantic-ui-react";

import CustomDotGroup from "../actions/CustomDotGroup";

import windowDimensions from "../actions/WindowDimensions"

const ImageCarousel = (props) => {
    const dimensions = windowDimensions();

    const dynamicWidth = dimensions.width * 0.9;
    const dynamicHeight = dimensions.height * 0.55;

    const slidePreviews = (
        props.data.map((option) =>
            <Grid.Column>
                <Image src={option.imageSrc} style={{ maxWidth: dynamicWidth / props.data.length, maxHeight: dynamicHeight / props.data.length }} />

            </Grid.Column>
        )
    );
    const slides = (
        props.data.map((option) =>
            <Slide tag="a" index={option.id} key={option.id}>
                <Image src={option.imageSrc} size="mini" style={{ maxWidth: dynamicWidth, maxHeight: dynamicHeight }} />
                <Grid columns={props.data.length}>
                    {slidePreviews}
                </Grid>
            </Slide>
        )
    );



    return (
        <CarouselProvider naturalSlideWidth={14} naturalSlideHeight={8} totalSlides={props.data.length}>
            <Slider>
                {slides}
            </Slider>
            <Divider />
            <CustomDotGroup slides={props.data.length} />
        </CarouselProvider>
    );
}

export default ImageCarousel;
