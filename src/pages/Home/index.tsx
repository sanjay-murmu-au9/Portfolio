import { styled } from "styled-components";
import { Contact } from "../../components/Contact";
import { HeroSection } from "../../components/HeroSection";
import { WhoAmI } from "../../components/WhoAmI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

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
  const notify = () => toast("Desktop device is recommended for this page!");

  useEffect(() => {
    if (isMobile) {
      notify();
    }
  }, []);

  return (
    <>
      <Container>
        <HeroSection />
        <WhoAmI />
        <Contact />
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export { HomePage };
