import { BlogContainer, BlogImage, BlogImageBack, BlogImages } from "./blog.styles";

import White from "../../../../../assets/projectBlogBgOne.png";
import Dark from "../../../../../assets/projectBlogBgTwo.png";


export function Blog() {
    return (
        <BlogContainer>
            <BlogImages className="blog-images">
            <BlogImage>
                <img src={White} alt="blog no tema claro" style={{ width:'490px', height:'270px' }} />
            </BlogImage>
            <BlogImageBack>
                <img src={Dark} alt="blog no tema escuro" style={{ width:'490px', height:'270px' }} />
            </BlogImageBack>
            </BlogImages>
        </BlogContainer>
        )
}