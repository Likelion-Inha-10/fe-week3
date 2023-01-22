import styled from "styled-components";
import { TextBox } from "../Styled";

const FooterText = styled.div`
  padding-top: 27px;
  padding-left: 12.5%;
  padding-right: 12.5%;
`;

const Bottom = () => {
  return (
    <>
      <FooterText>
        <TextBox
          fontSize="1rem"
          float="right"
          color="#007bff"
          cursor="pointer"
          hoverTextDecoration="underline"
          hoverColor="#0063cc"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          Back to top
        </TextBox>
        <TextBox fontSize="1rem" color="#6c757d" lineHeight="1.8">
          Album example is &copy; Bootstrap, but please download and customize
          it for yourself!
        </TextBox>
        <TextBox
          fontSize="1rem"
          color="#6c757d"
          display="inline-block"
          lineHeight="1.8"
        >
          New to Bootstrap?&nbsp;
        </TextBox>
        <TextBox
          fontSize="1rem"
          color="#007bff"
          cursor="pointer"
          hoverTextDecoration="underline"
          hoverColor="#0063cc"
          display="inline-block"
          lineHeight="1.8"
          onClick={() => {
            window.location.href = "https://getbootstrap.com/";
          }}
        >
          Visit the homepage
        </TextBox>
        <TextBox
          fontSize="1rem"
          color="#6c757d"
          display="inline-block"
          lineHeight="1.8"
        >
          &nbsp;or read our&nbsp;
        </TextBox>

        <TextBox
          fontSize="1rem"
          color="#007bff"
          cursor="pointer"
          hoverTextDecoration="underline"
          hoverColor="#0063cc"
          display="inline-block"
          lineHeight="1.8"
          onClick={() => {
            window.location.href =
              "https://getbootstrap.com/docs/4.3/getting-started/introduction/";
          }}
        >
          getting started guide.
        </TextBox>
      </FooterText>
    </>
  );
};
export default Bottom;
