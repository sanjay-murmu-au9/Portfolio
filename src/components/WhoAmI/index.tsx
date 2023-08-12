import { styled } from "styled-components";
import { BodyContainer } from "../../styles/mixins";

type Props = {};

const SkillsArray = [
  "Frontend",
  "Backend",
  "Deployment",
  "Computer Science",
  "Business",
];

const Section = styled.div`
  ${BodyContainer};
  height: 100vh;
  scroll-snap-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillList = styled.div`
  flex: 1;
`;
const SkillLogo = styled.div`
  flex: 1;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.li<{ afterText: string }>`
  font-size: 55px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  cursor: pointer;
  position: relative;
  white-space: nowrap;

  &::after {
    content: "${(props) => props.afterText}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const WhoAmI = (props: Props) => {
  return (
    <Section>
      <SkillList>
        <List>
          {SkillsArray.map((skill) => (
            <ListItem key={skill} afterText={skill}>
              {skill}
            </ListItem>
          ))}
        </List>
      </SkillList>
      <SkillLogo></SkillLogo>
    </Section>
  );
};

export { WhoAmI };
