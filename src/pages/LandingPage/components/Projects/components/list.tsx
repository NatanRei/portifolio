import { ListContainer } from "./list.styles";

export function List() {
    const items = [
        "S.O.L.I.D.",
        "Testes Unitários",
        "Testes E2E",
        "Docker",
        "GitHub Actions",
        "JWT",
        "TypeScript",
        "Prisma",
        "Fastify",
        "PostgreSQL"
    ];
    return (
        <ListContainer target="_blank" href="https://github.com/NatanRei/ntn-api-solid">
            <ul>
                {
                    items.map((item, i) => <li key={i}>{item}</li>)
                }
            </ul>
        </ListContainer>
    )
}