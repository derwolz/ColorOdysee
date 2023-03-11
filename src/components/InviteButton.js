import React from 'react';
import {css} from "@emotion/react";
import { Link } from 'gatsby';
const projectPortalButton = ({ theme }) => css`
    
  padding: 1rem;
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
    box-shadow: none;
  }
`;
const InviteButton = () => {
    return (
        <div>
            <Link to="/PaletteGenerator">
                <button
                    css={[
                        (theme) => ({
                            color: "White",
                            boxShadow: "4px 4px #333",
                            backgroundColor: "#f66",

                            
                        }),
                        projectPortalButton,
                    ]}
                >
                    Let's Get Started
                </button>
            </Link>
        </div>
    )
}
export default InviteButton;