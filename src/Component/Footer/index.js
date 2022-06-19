import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  font-size: 1rem;
  font-weight: 400;
  color: #6c757d;
  line-height: 1.5;
  text-align: left;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const FooterWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1140px;
`;

const FooterText = styled.div`
  margin: 0;
`;

const FooterLeftFirst = styled.p`
  margin-top: 0;
  margin-bottom: 0.25rem;
`;

const FooterLeftSecond = styled.p`
  margin: 0;
`;

const HyperLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;

const Footer = (props) => {
  return (
    <FooterBox>
      <FooterWrap>
        <div>
          <FooterLeftFirst>
            Album example is © Bootstrap, but please download and customize it
            for yourself!
          </FooterLeftFirst>
          <FooterLeftSecond>
            New to Bootstrap?
            <HyperLink href="https://getbootstrap.com/">
              {" "}
              Visit the homepage{" "}
            </HyperLink>
            or read our
            <HyperLink href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">
              {" "}
              getting start guide.
            </HyperLink>
          </FooterLeftSecond>
        </div>
        <FooterText>
          <HyperLink href="#">Back to top</HyperLink>
        </FooterText>
      </FooterWrap>
    </FooterBox>
  );
};

export default Footer;
