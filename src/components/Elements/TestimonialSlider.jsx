import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
       {/* <HeaderInfo> */}
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
            A testimonial is a statement that expresses a person's positive experience or opinion about a product, service, or individual. 
              <br />
              way to build credibility and trust with potential customers.
            </p>
          {/* </HeaderInfo> */}
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="I recently worked with Animesh Singh on a web design project for my business and I cannot speak highly enough of his exceptional work. He is a true professional, who listened to my needs and preferences with patience and empathy. He is very descent man."
            author="Sidhant Singh"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="I recently hired a Intern and I can't express enough how thankful I am to have found such an amazing trainer like Nir doshi sir. He not only helped me achieve my goals but also made me feel more confident and motivated. He is patient, friendly, and always ready to answer any questions."
            author="Abhishek Kumar"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="I recently hired a Intern and I can't express enough how thankful I am to have found such an amazing trainer like Nir doshi sir. He not only helped me achieve my goals but also made me feel more confident and motivated. He is patient, friendly, and always ready to answer any questions."
            author="Ashish Ranjan"
          />
        </LogoWrapper>
        {/* <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper> */}
        {/* <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper> */}
        {/* <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper> */}
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
