import styled from "styled-components";

const Services = ({ opacity }) => {
  return (
    <Wrapper id="services" opacity={opacity}>
      <Title>Care & Services</Title>
      <Content>
        <Block key="block-1">
          <Image src="/assets/services/productType1.jpg" />
          <p key="productType1">Consultation</p>
          <p key="productType2">X-rays</p>
          <p key="productType3">Gum & Bone Assessment</p>
          <p key="productType4">Geriatric (Senior Adult) Dental Assessment</p>
        </Block>
        <Block key="block-2">
          <Image src="/assets/services/productType2.jpg" />
          <p key="productType5">Scaling & Air Polishing</p>
          <p key="productType6">Dental Fillings</p>
          <p key="productType7">Teeth Whitening</p>
        </Block>
        <Block key="block-3">
          <Image src="/assets/services/productType3.jpg" />
          <p key="productType8">Root Canal Treatment</p>
          <p key="productType9">Crown & Bridge</p>
          <p key="productType10">Wisdom Tooth Surgery</p>
          <p key="productType11">Dentures</p>
          <p key="productType12">Dental Implants</p>
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
