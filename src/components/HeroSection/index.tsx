import { styled } from "styled-components";
import { Navbar } from "../Navbar";

type Props = {};

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const HeroSection = (props: Props) => {
  return (
    <Section>
      <Navbar />
    </Section>
  );
};

export { HeroSection };
