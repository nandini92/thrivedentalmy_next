import styled from "styled-components";

import Link from "next/link";

const Media = ({opacity}) => {
    return (
    <Wrapper opacity={opacity}>
    <Title>Read about us in detail</Title>
    <Slider>
        <Link href="https://www.freemalaysiatoday.com/category/leisure/health/2021/02/18/5-dental-problems-big-small-and-dangerous/?fbclid=IwAR1UPPQrYPn2nwZ_S-BJUA_FCAKE2NOItHlRbNp4B37JGO_uOuK3fXwSaAg" target="_blank"><Image src="/assets/media/MediaCoverage_1.JPG" alt="MediaCoverage"/></Link>
        <Link href="https://www.freemalaysiatoday.com/category/leisure/2021/02/17/geriatric-dentistry-why-oral-health-is-overall-health/?fbclid=IwAR36whnjNPrp8h1dI6TMkpzOjfGuCv0QjsIVBDriFG1_apzJ4VnhxCku-co" target="_blank"><Image src="/assets/media/MediaCoverage_2.JPG" alt="MediaCoverage"/></Link>
        <Link href="https://relevan.com.my/2023/06/15/jaga-gigi-untuk-jaga-diri/?fbclid=IwAR3S0Nyd4_eNJo2h1GF2SVT0g7b9oOOmMNpPFevaJDJXE8c8na2jO2cqOeg" target="_blank"><Image src="/assets/media/MediaCoverage_3.JPG" alt="MediaCoverage"/></Link>
        <Link href="https://relevan.com.my/2023/06/15/kepentingan-penjagaan-oral-dalam-kalangan-warga-emas/?fbclid=IwAR2-N9plPKmRp6gagGa1W---VyADp4ruNWIG0OF2Ecn079Jn7OzlxA1TKsY" target="_blank"><Image src="/assets/media/MediaCoverage_4.JPG" alt="MediaCoverage"/></Link>
        <Link href="/assets/media/Utusan.pdf" target="_blank"><Image src="/assets/media/MediaCoverage_5.JPG" alt="Utusan"/></Link>
        <Link href="https://relevan.com.my/2023/06/15/petua-menjaga-kesihatan-mulut-di-rumah/?fbclid=IwAR3TakCbkJbyb6TP15rN0kxsJUsAK3LusrXbnCCkoJITofxlFWj6X-zyQlw" target="_blank"><Image src="/assets/media/MediaCoverage_6.JPG" alt="MediaCoverage"/></Link>
    </Slider>
    </Wrapper> );
}

const Wrapper = styled.section`
  opacity: ${(props) => props.opacity};
  padding: 5% 1%;
  background-color: var(--eerie-black);
  transition: opacity 0.2s ease-in-out;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;

  @media (width < 1000px) {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    padding: 10%;
  }

  animation: ${(props) => props.opacity && "slideUp"} 1s;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  color: var(--keppel);

  @media (width < 1000px) {
    padding: 0 0 10% 0;
}
`;
const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  max-width: 100vw;
`
const Image = styled.img`
    padding-left: 5px;
    max-height: 30vh;
`
export default Media;