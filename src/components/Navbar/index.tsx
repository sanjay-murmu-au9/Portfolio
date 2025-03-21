import { styled } from "styled-components";
import ReactGa from "react-ga4"
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

const ButtonAnchor = styled.a`
  text-decoration: none;
`;

const Navbar = (props: Props) => {
  // Function to scroll to the top (Home)
  const scrollToHome = () => {
    // Refresh the page instead of just scrolling to top
    window.location.reload();
  };

  // Function to scroll to the Skills section (WhoAmI component)
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Both Skills and Work buttons will scroll to the skills section
  const scrollToWork = scrollToSkills;

  // Function to scroll to the Contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section>
      <Container>
        <Links>
          <Logo src={`${process.env.PUBLIC_URL}/img/ayushLogo.png`} />
          <List>
            <ListItem onClick={scrollToHome}>Home</ListItem>
            <ListItem onClick={scrollToSkills}>Skills</ListItem>
            <ListItem onClick={scrollToWork}>Work</ListItem>
            <ListItem onClick={scrollToContact}>Contact</ListItem>
          </List>
        </Links>
        <Actions>
          <SearchIcon src={`${process.env.PUBLIC_URL}/img/search.png`} />
          <ButtonAnchor
            href={`${process.env.PUBLIC_URL}/documents/Sanjay_Murmu%20resume.pdf`}
            download="Sanjay_Murmu_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button onClick={() => {
              ReactGa.event({
                category: "Core Action",
                action: "Hire Now",
                value: 99
              });
            }} >Hire Now</Button>
          </ButtonAnchor>
        </Actions>
      </Container>
    </Section>
  );
};

export { Navbar };
