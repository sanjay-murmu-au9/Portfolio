import { css, styled } from "styled-components";
import { BodyContainer } from "../../styles/mixins";
import { SkillGraph } from "../Graph";
import { useState } from "react";
import SKILLS from "../../helpers/jsons/skills.json";

type Props = {};

const Section = styled.div`
  ${BodyContainer};
  height: 100vh;
  scroll-snap-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SkillList = styled.div`
  flex: 1;

  @media screen and (max-width: 768px) {
    flex: unset;
  }
`;
const SkillGraphBox = styled.div`
  flex: 1;
  width: 100%;
  padding: 20px 0;

  @media screen and (max-width: 768px) {
    flex: unset;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

const activeSkillCss = css`
  &::after {
    animation: moveText 0.5s linear both;

    @keyframes moveText {
      to {
        width: 100%;
      }
    }
  }
`;

const ListItem = styled.li<{ afterText: string; active: boolean }>`
  font-size: 55px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  ${(props) => (props.active ? activeSkillCss : null)};

  &::after {
    content: "${(props) => props.afterText}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const WhoAmI = (props: Props) => {
  const [ActiveSkill, setActiveSkill] = useState(SKILLS[0]);

  return (
    <Section id="skills-section">
      <SkillList>
        <List>
          {SKILLS.map((skill, index) => (
            <ListItem
              key={skill.title}
              afterText={skill.title}
              active={ActiveSkill.title === skill.title}
              onMouseEnter={() => {
                setActiveSkill(skill);
              }}
            >
              {skill.title}
            </ListItem>
          ))}
        </List>
      </SkillList>
      <SkillGraphBox>
        <SkillGraph graphData={ActiveSkill} />
      </SkillGraphBox>
    </Section>
  );
};

export { WhoAmI };
