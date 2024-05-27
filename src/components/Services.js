import styled from "styled-components";

import { Text } from "../contexts/LanguageContext";

const Services = ({ opacity }) => {
  const serviceTextGenerator = (start, end) => {
    const products = [];

    for (let i = start; i < end + 1; i++) {
      products.push(
        <p key={`productType-${i}`}>
          <Text tid={`productType${i}`}/>
        </p>
      );
    }

    return products;
  };

  return (
    <Wrapper id="services" opacity={opacity}>
      <Title>Care & Services</Title>
      <Content>
        <Block key="block-1">
          <Image src="/assets/services/productType1.jpg" />
          {serviceTextGenerator(1, 4)}
        </Block>
        <Block key="block-2">
          <Image src="/assets/services/productType2.jpg" />
          {serviceTextGenerator(5, 7)}
        </Block>
        <Block key="block-3">
          <Image src="/assets/services/productType3.jpg" />
          {serviceTextGenerator(8, 12)}
        </Block>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 10%;
  border-top: 1px solid var(--eerie-black);
  opacity: ${(props) => props.opacity};
  transition: opacity 0.2s ease-in-out;

  animation: ${(props) => props.opacity && "slideUp"} 1s;

  @keyframes slideUp {
    from {
      transform: translateY(800px);
      opacity: 0;
    }
  }
`;
const Title = styled.h2`
  padding: 5%;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (width < 1000px) {
    flex-direction: column;
  }
`;
const Block = styled.div`
  width: 30%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    margin-bottom: 5px;
  }

  @media (width < 1000px) {
    width: 100%;
  }
`;
const Image = styled.img`
  margin-bottom: 10%;
`;
export default Services;
