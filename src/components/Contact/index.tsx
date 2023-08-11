import { styled } from "styled-components";

type Props = {};

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Contact = (props: Props) => {
  return <Section>Contact</Section>;
};

export { Contact };
