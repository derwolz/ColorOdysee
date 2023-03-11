import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import {  EmailAPI } from "../../Config/api";
import { getSessionToken } from "../../Config/CookieHandler";
import { buttonPress, buttonPressOffHover } from "../../styles";
//TODO animation styles on submit button

const FormWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.grey["500"]};
  /* max-width: 600px; */
  /* width: 100%; */
  padding: 1rem;
  @media (min-width: 1024px) {
    /* max-width: 800px; */
  }
`;

// const form = css`
//   span {
//     color: white;
//     padding-left: 0.5rem;
//     padding-bottom: 0.25rem;
//     font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
//       "Lucida Sans", Arial, sans-serif;
//     font-size: 1.1rem;
//     user-select: none;
//   }
// `;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  label {
    display: flex;
    flex-direction: column;

    input {
      border: 1px solid ${(props) => props.theme.colors.primary[300]};
      border-radius: 2px;
      font-size: 1.1rem;
      padding: 0.5rem;
      color: ${(props) => props.theme.colors.grey[800]};

      &:focus {
        outline: none;
        border-color: ${(props) => props.theme.colors.primary[300]};
        box-shadow: 0 0 5px ${(props) => props.theme.colors.primary[300]};
      }
    }
  }
`;

// const customerNamesWrapper = css`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* gap: 2rem; */
//   padding-bottom: 2rem;
//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: center;
//     gap: 2rem;
//   }
// `;

// const NameLabelWrapper = styled(LabelWrapper)`
//   label {
//     display: flex;
//     flex-direction: column;

//     input {
//       color: ${(props) => props.theme.colors.grey[700]};
//       font-size: 1.1rem;
//       padding: 0.5rem;
//       /* max-width: 200px; */
//     }
//   }
// `;

// const CompanyNameLabelWrapper = styled(LabelWrapper)``;

// const PhoneLabelWrapper = styled(LabelWrapper)``;

// const EmailLabelWrapper = styled(LabelWrapper)``;

// const SubjectLabelWrapper = styled(LabelWrapper)``;

// const MessageLabelWrapper = styled(LabelWrapper)`
//   label {
//     display: flex;
//     flex-direction: column;

//     textarea {
//       /* border-top: 0.5rem solid ${(props) =>
//         props.theme.colors.primary.light}; */
//       border-radius: 2px;
//       min-height: 25ch;
//       resize: none;
//       box-shadow: 0px 1px 0px 0px ${(props) => props.theme.colors.grey["400"]},
//         0px -1px 0px 0px ${(props) => props.theme.colors.grey["600"]};
//       font-size: 1.1rem;
//       padding: 0.5rem;
//       color: ${(props) => props.theme.colors.grey[800]};
//       /* max-width: 150%; */
//       &:focus {
//         outline: none;
//         border-color: ${(props) => props.theme.colors.primary[300]};
//         box-shadow: 0 0 5px ${(props) => props.theme.colors.primary[300]};
//       }
//       @media (min-width: 768px) {
//         min-height: 12ch;
//         width: 500px;
//       }
//     }
//   }
//   input {
//   }
// `;

// const SubmitButtonWrapper = styled.div`
// display: flex;
// justify-content: flex-end;
// padding: 2rem;

// input {
//   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
//     "Lucida Sans", Arial, sans-serif;
//   font-size: 1rem;
//   font-weight: 500;
//   /* border: 1px solid ${(props) => props.theme.colors.grey[50]}; */
//   width: 25%;
//   min-width: 100px;
//   border-radius: 2px;
//   padding: 0.75rem;
//   border: none;
//   box-shadow: none;
//   background-color: ${(props) => props.theme.colors.primary[700]};
//   color: ${(props) => props.theme.colors.grey[50]};
//   /* box-shadow: 0px 4px 6px 0px ${(props) =>
//     props.theme.colors.grey[800]}; */
//   /* animation: ${buttonPressOffHover} 300ms ease forwards; */
//   &:active {
//     box-shadow: none;
//     opacity: 0.85;
//   }
//   &:hover {
//     /* animation: ${buttonPress} 300ms ease forwards; */
//     opacity: 0.85;
//     cursor: pointer;
//   }
// }
// `;

export const ContactForm = () => {
  // const [inputs, setInputs] = useState({});
  // const [session, setSession] = useState(getSessionToken());
  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   console.log(value);
  //   setInputs((values) => ({ ...values, [name]: value }));
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log("try");
  //   //console.log(inputs);
  //   try {
  //     console.log(inputs);
  //     const response = await EmailAPI("", inputs,{
  //       headers:
  //       {
  //         'Authorization': 'Token ' + session,
  //       },}).then((resp) => {
  //       console.log(resp);
  //     });
  //     console.log(response);
  //     //console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <FormWrapper>
      
    </FormWrapper>
  );
};
