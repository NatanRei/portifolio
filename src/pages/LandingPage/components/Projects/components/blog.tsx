import { BlogContainer, BlogImage, BlogImageBack, BlogImages } from "./blog.styles";

export function Blog() {
    return (
        <BlogContainer>
            <BlogImages className="blog-images">
            <BlogImage>
                <img src="https://ntnconsultoria.com.br/webAcess/img/portifolio/projectBlogBgOne.webp" alt="blog no tema claro" />
            </BlogImage>
            <BlogImageBack>
                <img src="https://ntnconsultoria.com.br/webAcess/img/portifolio/projectBlogBgTwo.webp" alt="blog no tema escuro" />
            </BlogImageBack>
            </BlogImages>
        </BlogContainer>
        )
}