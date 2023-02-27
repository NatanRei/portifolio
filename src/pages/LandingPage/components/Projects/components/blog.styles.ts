import { styled } from "../../../../../styles";

export const BlogContainer = styled("div", {
    backgroundColor: 'transparent',
    width: 490,
    height: 270,
    perspective: 1200,
    "&:hover .blog-images": {
        transform:'rotateY(180deg)'
    },
    '@lg': {
        marginTop: '1rem',
        width: 343,
        height: 189,
    }
});

export const BlogImages = styled("div", {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    
});

export const BlogImage = styled("div", {
    position: 'absolute',
  width: '100%',
  height: '100%',
  '-webkit-backface-visibility': 'hidden',
  backfaceVisibility: 'hidden',
  "img": {
    width: 490,
    height: 270,
    '@lg': {
        width: 343,
        height: 189,
    }
  }
});

export const BlogImageBack = styled(BlogImage, {
    transform:'rotateY(180deg)'
});