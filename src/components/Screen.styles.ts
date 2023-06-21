import { styled } from "../styles";

export const ScreenContainer = styled("section", {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    variants: {
        heightMin: {
            true: {
                '@sm': {
                    minHeight: "50vh",
                }
            },
            false: {
                '@sm': {
                    minHeight: "100vh",
                }
            }
        }
    },
    defaultVariants: {
        heightMin: false
    }
    
});

