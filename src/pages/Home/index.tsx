import { styled } from "styled-components";
import { Contact } from "../../components/Contact";
import { Experience } from "../../components/Experience";
import { HeroSection } from "../../components/HeroSection";
import { WhoAmI } from "../../components/WhoAmI";

type Props = {};

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  background-image: url("./img/bg.jpeg");

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HomePage = (props: Props) => {
  return (
    <Container>
      <HeroSection />
      <WhoAmI />
      {/* <Experience /> */}
      <Contact />
    </Container>
  );
};

export { HomePage };
