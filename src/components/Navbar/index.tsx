import { styled } from "styled-components";

type Props = {};

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 85vw;
  max-width: 1200px;
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
`;
const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
          <Logo src="./img/logo.png" />
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
