import { styled } from "styled-components";
import { ContrastButton } from "../../styles/mixins";
import { IndianMap } from "../Map/India";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

type Props = {};

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 200;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  ${ContrastButton}
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  padding: 15px;
`;

const MapContainer = styled.div`
  flex: 1;
`;

const Contact = (props: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
          formRef.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
        )
        .then(
          (result) => {
            console.log(result.text);
            setEmailSuccess(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Section>
      <FormContainer>
        <Form
          ref={formRef}
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handelSubmit}
          data-netlify-honeypot="bot-field"
        >
          <Title>Contact Us</Title>
          <Input type="text" name="name" placeholder="Name" />
          <Input type="email" name="email" placeholder="Email" />
          <TextArea
            name="message"
            placeholder="Write your message here..."
            rows={10}
          />
          <Button type="submit">Send</Button>
          {emailSuccess ? (
            `Your message has been sent!, We'll get back to you soon :`
          ) : (
            <></>
          )}
        </Form>
      </FormContainer>
      <MapContainer>
        <IndianMap />
      </MapContainer>
    </Section>
  );
};

export { Contact };
