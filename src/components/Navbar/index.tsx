import { styled } from "styled-components";
import { BodyContainer, ContrastButton } from "../../styles/mixins";

type Props = {};

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  ${BodyContainer}
  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
`;
const Actions = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Logo = styled.img`
  height: 50px;
  width: auto;
  display: flex;
  gap: 20px;
`;

const List = styled.ul`
  display: flex;
  gap: 50px;
  align-items: center;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
`;
const Button = styled.button`
  ${ContrastButton}
`;
const SearchIcon = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const Navbar = (props: Props) => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/ayushLogo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Skills</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Actions>
          <SearchIcon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Actions>
      </Container>
    </Section>
  );
};

export { Navbar };
