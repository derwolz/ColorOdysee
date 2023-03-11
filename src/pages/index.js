import * as React from "react";
import { Layout } from "../components/Layout";
import { css } from "@emotion/react";
// import styled from "@emotion/styled";
import BackgroundHero from "../components/BackgroundHero"
// import AboutSection from "../components/AboutSection";
// import { Link } from "gatsby";
import InviteButton from "../components/InviteButton";
const hero = css`
  margin-top: calc(17%);
  display: flex;
  
  flex-direction: column;
  align-items: center;
  strong {
    font-size: calc(10vmin);
    /* position: relative;
    top: calc(5.3vmin); */
    color: #fff;
    text-shadow: 0 0 1vmin #000;
    text-shadow: 0 0 2vmin #000;
    text-shadow: 0 0 3vmin #000;
    text-shadow: 0 0 4vmin #111;
    text-shadow: 0 0 5vmin #444;
    
  }
  h1 {
    font-size: calc(4vmin);
    color: #fff;
    text-shadow: 0 0 1vmin #000;
    text-shadow: 0 0 2vmin #000;
    text-shadow: 0 0 3vmin #111;
    text-shadow: 0 0 4vmin #444;
    
  }
`;


const heroVideo = css`
top:0;
left:0;
width:100vw;
position:absolute;
overflow:hidden;
z-index: -1;
`
const strongTitle = css`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  display: flex;
  justify-content: space-between
  ;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

// const AboutWhatWeAre = styled("section")`
//   background-color: #357a92;
//   display: flex;
//   justify-content: center;
// `;

// const aboutWhatWeAreWrapper = css`
//   padding-top: 1rem;
//   padding-left: 0.5rem;
//   padding-bottom: 1rem;
//   display: flex;
//   gap: 2rem;
//   align-items: center;
//   justify-content: space-around;
//   flex-direction: column;
//   max-width: 700px;
//   background-color: #357a92;
//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
//   img {
//     width: 300px;
//     @media (min-width: 425px) {
//       width: 400px;
//     }
//   }
// `;

// const paragraphExplanationWrapper = css`
//   display: flex;
//   flex-direction: column;
//   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
//     "Lucida Sans", Arial, sans-serif;
//   max-width: 30ch;
//   color: white;
// `;

// const aboutTeam = css``;

// const warranty = css``;

// const contactUs = css``;

export const Head = () => (
  <>
    <title>ColorOdysee</title>
    <meta name="Custom Eye Shadow Palette Generator" content="No more digging through endless catalogues looking for that perfect shade. Get fast and personalized results in seconds!" />
  </>
);

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <section css={heroVideo}>
          <BackgroundHero/>
          </section>
          <section css={hero}>
          <div css={strongTitle}>
            <strong>ColorOdysee</strong>

            <h1>Revolutionize your color story</h1>
            <InviteButton/>
          </div>
        </section>


       
      </main>
    </Layout>
  );
};

export default IndexPage;
/*
 <AboutWhatWeAre>
          <div css={aboutWhatWeAreWrapper}>
            <img src={manWithLaptop} />
            <div css={paragraphExplanationWrapper}>
              <p>
                New Peak Computing is a Website development firm with over 20
                years of experience in blockchain, manufacturing, and other
                industries.
              </p>
              <p>
                We provide Web development services to small business, startups
                and enterprises across a range of industries.
              </p>
            </div>
          </div>
        </AboutWhatWeAre>

        <section css={aboutTeam}></section>
        <section css={warranty}></section>
        */