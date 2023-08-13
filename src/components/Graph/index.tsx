import { keyframes, styled } from "styled-components";
import { ContrastColor } from "../../styles/variables";

type graphElement = { name: string; value: number };
type graphData = {
  title: string;
  items: graphElement[];
};

type Props = { graphData: graphData };

const Container = styled.div``;

const Title = styled.h3``;

const fillWidthAnimation = ({ width }: { width: string }) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${width};
  }
`;

const GraphBox = styled.div`
  border: 1px solid ${ContrastColor};
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GraphItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const GraphItemTextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 400;
`;
const SkillName = styled.span``;
const SkillValue = styled.span``;
const GraphBar = styled.div<{ width: string }>`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${ContrastColor};
  position: relative;

  &::after {
    content: "";
    height: 100%;
    border-radius: 10px;
    background-color: ${ContrastColor};
    position: absolute;
    top: 0;
    left: 0;
    /* width: ${(props) => props.width}; */
    width: 0;
    animation: ${(props) => fillWidthAnimation({ width: props.width })} 0.5s
      linear both;
  }
`;

const SkillGraph = ({ graphData }: Props) => {
  return (
    <Container>
      <Title>{graphData.title}</Title>
      <GraphBox>
        {graphData.items.map((item) => (
          <GraphItem key={item.name}>
            <GraphItemTextContainer>
              <SkillName>{item.name}</SkillName>
              <SkillValue>{item.value}%</SkillValue>
            </GraphItemTextContainer>
            <GraphBar width={`${item.value}%`} />
          </GraphItem>
        ))}
      </GraphBox>
    </Container>
  );
};

export { SkillGraph };
