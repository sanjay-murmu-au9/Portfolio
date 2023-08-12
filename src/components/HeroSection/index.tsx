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
`;

const HeroTextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const HeroTextSectionHeading = styled.h1`
  font-size: 62px;
`;
const HeroTextSectionQuote = styled.div`
  color: ${ContrastColor};
  display: flex;
  gap: 10px;
  align-items: center;
`;
const HeroTextSectionQuoteBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #ccc;
  border-radius: 15px;
`;
const HeroTextSectionQuoteText = styled.h2`
  font-size: 34px;
`;
const HeroTextSectionDescription = styled.p`
  color: lightgray;
  font-weight: 500;
  font-style: italic;
`;
const HeroTextSectionButton = styled.div`
  ${ContrastButton}
`;
const HeroImageSection = styled.img`
  flex: 1;
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
          <HeroTextSectionButton>Learn More</HeroTextSectionButton>
        </HeroTextSection>
        <HeroImageSection src="/img/moon.png" />
      </Container>
    </Section>
  );
};

export { HeroSection };
