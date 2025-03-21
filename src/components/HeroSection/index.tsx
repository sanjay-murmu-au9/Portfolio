import { styled } from "styled-components";
import { Navbar } from "../Navbar";
import { BodyContainer, ContrastButton } from "../../styles/mixins";
import { ContrastColor } from "../../styles/variables";

type Props = {};

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  ${BodyContainer}
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    height: 100%;
  }
`;

const HeroTextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    gap: 25px;
  }
`;
const HeroTextSectionHeading = styled.h1`
  font-size: 62px;

  @media only screen and (max-width: 768px) {
    font-size: 52px;
  }
`;
const HeroTextSectionQuote = styled.div`
  color: ${ContrastColor};
  display: flex;
  gap: 10px;
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const HeroTextSectionQuoteBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #ccc;
  border-radius: 15px;
  @media only screen and (max-width: 768px) {
    width: 25px;
  }
`;
const HeroTextSectionQuoteText = styled.h2`
  font-size: 34px;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
const HeroTextSectionDescription = styled.p`
  color: lightgray;
  font-weight: 500;
  font-style: italic;
`;
const ButtonAnchorWrapper = styled.a`
  text-decoration: none;
`;
const HeroTextSectionButton = styled.div`
  ${ContrastButton}
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;
const HeroImageSection = styled.img`
  flex: 1;
  height: 800px;
  width: 800px;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const HeroSection = (props: Props) => {
  return (
    <Section>
      <Navbar />
      <Container>
        <HeroTextSection>
          <HeroTextSectionHeading>Think. Make. Solve.</HeroTextSectionHeading>
          <HeroTextSectionQuote>
            <HeroTextSectionQuoteBar />
            <HeroTextSectionQuoteText>What I Do</HeroTextSectionQuoteText>
          </HeroTextSectionQuote>
          <HeroTextSectionDescription>
            I convert ideas into .html, .css, .tsx files, put them in a
            container (Docker) and ship them to Digital Ocean.
          </HeroTextSectionDescription>
          <ButtonAnchorWrapper
            href={`${process.env.PUBLIC_URL}/documents/Sanjay_Murmu%20resume.pdf`}
            download="Sanjay_Murmu_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <HeroTextSectionButton>Download Resume</HeroTextSectionButton>
          </ButtonAnchorWrapper>
        </HeroTextSection>
        <HeroImageSection src={`${process.env.PUBLIC_URL}/img/moon.png`} />
      </Container>
    </Section>
  );
};

export { HeroSection };
