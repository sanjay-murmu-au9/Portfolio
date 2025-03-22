import { styled } from "styled-components";
import { ContrastButton } from "../../styles/mixins";
import { IndianMap } from "../Map/India";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";

type Props = {};

interface FormData {
  name: string;
  email: string;
  comments: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  comments?: string;
}

// API endpoint with fallback for CORS issues
const API_ENDPOINT = "https://property-management-fu5c.onrender.com/api/contact/portfolio/message";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 20px 0;
    overflow: hidden;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 94%;
  }
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    gap: 15px;
  }
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

  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;

  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const Button = styled.button`
  ${ContrastButton}
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  padding: 15px;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    padding: 10px;
  }
`;

const MapContainer = styled.div`
  flex: 1;
`;

const ErrorText = styled.p`
  color: #ff3333;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

const ApiErrorContainer = styled.div`
  background-color: #ffebee;
  border: 1px solid #ffcdd2;
  border-radius: 4px;
  color: #d32f2f;
  margin-top: 10px;
  padding: 10px;
  font-size: 14px;
`;

const SuccessMessage = styled.p`
  color: #4CAF50;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;

const Contact = (props: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");
  const [usedCorsProxy, setUsedCorsProxy] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    comments: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.comments.trim()) {
      newErrors.comments = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field if it exists
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const sendToApi = async (data: FormData, useCorsProxy: boolean = false): Promise<Response> => {
    const endpoint = useCorsProxy ? `${CORS_PROXY}${API_ENDPOINT}` : API_ENDPOINT;

    // Log what we're about to send
    console.log(`Sending to ${endpoint} with payload:`, data);

    return fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        ...(useCorsProxy ? { "X-Requested-With": "XMLHttpRequest" } : {})
      },
      body: JSON.stringify(data),
    });
  };

  const handelSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setApiError("");
    setEmailSuccess(false);

    try {
      console.log("Starting form submission with data:", formData);

      // Try direct API call first
      let response: Response;
      let responseData: any;

      try {
        console.log("Attempting direct API call");
        response = await sendToApi(formData);

        const responseText = await response.text();
        console.log("Raw API response:", responseText);

        try {
          responseData = JSON.parse(responseText);
        } catch (e) {
          responseData = { error: "Invalid JSON response", raw: responseText };
        }

        console.log("API Response Status:", response.status);
        console.log("API Response Data:", responseData);
      } catch (error) {
        console.error("Initial API call failed with error:", error);

        try {
          // Try with CORS proxy as fallback
          console.log("Trying with CORS proxy as fallback");
          setUsedCorsProxy(true);
          response = await sendToApi(formData, true);

          const responseText = await response.text();
          console.log("Raw API proxy response:", responseText);

          try {
            responseData = JSON.parse(responseText);
          } catch (e) {
            responseData = { error: "Invalid JSON response from proxy", raw: responseText };
          }

          console.log("API Proxy Response Status:", response.status);
          console.log("API Proxy Response Data:", responseData);
        } catch (proxyError) {
          console.error("CORS proxy attempt also failed with error:", proxyError);
          throw new Error("API unavailable. Please try again later or contact support.");
        }
      }

      if (!response.ok) {
        const errorMessage =
          (responseData && responseData.message) ||
          (responseData && responseData.error) ||
          `Error: ${response.status} - ${response.statusText || "Unknown error"}`;

        console.error("API call not successful:", errorMessage);
        throw new Error(errorMessage);
      }

      console.log("API call successful, proceeding with EmailJS backup");

      // Try emailjs as backup
      try {
        if (formRef.current) {
          // Create a temp FormData object for emailjs with the required field names
          const emailjsFormData = new FormData(formRef.current);

          // EmailJS might be expecting 'message' instead of 'comments'
          // We'll ensure both fields exist in the form before sending
          if (!formRef.current.querySelector('input[name="message"]')) {
            const hiddenMessageField = document.createElement('input');
            hiddenMessageField.type = 'hidden';
            hiddenMessageField.name = 'message';
            hiddenMessageField.value = formData.comments;
            formRef.current.appendChild(hiddenMessageField);
          }

          const emailResult = await emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
            formRef.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
          );

          // Clean up the temporary field if we added it
          const hiddenField = formRef.current.querySelector('input[name="message"][type="hidden"]');
          if (hiddenField) {
            formRef.current.removeChild(hiddenField);
          }

          console.log("EmailJS result:", emailResult.text);
        }
      } catch (emailError) {
        console.error("EmailJS Error:", emailError);
        // Continue even if emailjs fails, since the API call succeeded
      }

      // Reset form
      setFormData({ name: "", email: "", comments: "" });
      setEmailSuccess(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setApiError(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact-section">
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

          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <ErrorText>{errors.name}</ErrorText>}

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}

          <TextArea
            name="comments"
            placeholder="Write your message here..."
            rows={isMobile ? 6 : 10}
            value={formData.comments}
            onChange={handleChange}
          />
          {errors.comments && <ErrorText>{errors.comments}</ErrorText>}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </Button>

          {apiError && (
            <ApiErrorContainer>
              <strong>Error:</strong> {apiError}
              {usedCorsProxy && (
                <div>
                  <small>Note: CORS proxy was used to attempt the submission.</small>
                </div>
              )}
            </ApiErrorContainer>
          )}

          {emailSuccess && (
            <SuccessMessage>Your message has been sent! We'll get back to you soon.</SuccessMessage>
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
