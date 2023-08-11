import { styled } from "styled-components";

type Props = {};

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const WhoAmI = (props: Props) => {
  return <Section>WhoAmI</Section>;
};

export { WhoAmI };
