import { styled } from "../styles";

export const ScreenContainer = styled("section", {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    variants: {
        heightMin: {
            true: {
                    minHeight: "50vh",
            },
            false: {
                    minHeight: "100vh",
            }
        }
    },
    defaultVariants: {
        heightMin: false
    }
    
});

