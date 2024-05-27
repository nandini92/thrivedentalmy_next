import styled from "styled-components";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import Image from 'next/image'

import { Text } from "../contexts/LanguageContext";

const About = ({ opacity }) => {
  const imageCarouselGenerator = () => {
    const images = [];

    for (let i = 1; i < 11 + 1; i++) {
      images.push(
        <img src={`/assets/clinic/clinic_${i}.jpg`} alt={`clinic_${i}`} key={`clinic_${i}`}/>
      );
    }

    return images;
  };

  return (
    <Wrapper id="about-us" opacity={opacity}>
      <Separator opacity={opacity} />
      <Title>Our Clinic</Title>
      <Content>
        <Founder>
          <Avatar src="/assets/MeeraAsokan.jpg" alt="Founder" />
          <Name>Meera Asokan</Name>
          <Qualification>
            BDS from Rajiv Gandhi University of Health Sciences, India (2011)
          </Qualification>
          <Qualification>
            Head of Special Care Dentistry Unit, Cheras Rehabilitation Hospital
            (2017-2019)
          </Qualification>
          <Qualification>
            Member of International Association for Disability and Oral Health
            (iADH)
          </Qualification>
        </Founder>
        <Description opacity={opacity}>
          <p>
            <QuotesL />{" "}
            <span>
              <Text tid="aboutUsDescription" />
            </span>{" "}
            <QuotesR />
          </p>
        </Description>
      </Content>
      <Carousel>{imageCarouselGenerator()}</Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  margin: 0 10% 5% 10%;
  opacity: ${(props) => props.opacity};

  @media (width < 1000px) {
    display: block;
    margin: 10%;
  }
`;

const Separator = styled.div`
  border-top: 1px solid var(--eerie-black);
  display: flex;
  justify-content: center;
  width: 100%;

  animation: ${(props) => props.opacity && "expand"} 1s;

  @keyframes expand {
    from {
      width: 0px;
    }
  }
`;
const Title = styled.h2`
  padding: 50px;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;

  @media (width < 1000px) {
    padding: 10% 0 0;
  }
`;
const Founder = styled.div`
  width: 60%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (width < 1000px) {
    width: 100%;
    padding: 0 0 10% 0;
  }
`;
const Name = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 2rem;
`;

const Qualification = styled.p`
  font-size: 0.8rem;
  margin-bottom: 5px;
  font-size: 0.9rem;
  text-align: center;
`;

const Avatar = styled.img`
  z-index: 100;
  height: 150px;
  width: 150px;
  margin-bottom: 10px;
  border-radius: 75px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 80px;

  @media (width < 1000px) {
    display: block;
    padding: 5%;
  }
`;

// const Icons = styled.div`
//   width: 50%;
//   padding: 100px 0 0 0;
//   align-self: center;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   div {
//     height: 80px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
//   }

//   @media (width < 1000px) {
//     width: 100%;
//     padding: 10% 0;
//   }
// `;

const Description = styled.div`
  width: 50%;
  font-weight: 300;
  line-height: 45px;
  font-size: 1.1rem;
  font-style: italic;
  align-self: center;
  position: relative;
  z-index: 100;

  @media (width < 1000px) {
    width: 100%;
    line-height: 3rem;
    text-align: center;
  }

  animation: ${(props) => props.opacity && "slideLeft"} 1s;

  @keyframes slideLeft {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;

const QuotesL = styled(RiDoubleQuotesL)`
  opacity: 0.7;
  font-size: 35px;
`;
const QuotesR = styled(RiDoubleQuotesR)`
  opacity: 0.7;
  font-size: 35px;
`;
const Carousel = styled.div`
  margin-top: 5%;
  height: 50vh;
  display: flex;
  transform: translate3d(0, 0, 0);
  -webkit-animation: bannermove 30s linear infinite;
  -moz-animation: bannermove 30s linear infinite;
  -ms-animation: bannermove 30s linear infinite;
  -o-animation: bannermove 30s linear infinite;
  animation: bannermove 30s linear infinite;

  * {
    margin-right: 5%;
    object-fit: cover;
    max-width: 30%;
  }

  @media (width < 1000px) {
    -webkit-animation: bannermove 20s linear infinite;
    -moz-animation: bannermove 20s linear infinite;
    -ms-animation: bannermove 20s linear infinite;
    -o-animation: bannermove 20s linear infinite;
    animation: bannermove 20s linear infinite;

    * {
      max-width: 100%;
    }
  }

  @keyframes bannermove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-280%, 0);
    }
  }
`;
export default About;
