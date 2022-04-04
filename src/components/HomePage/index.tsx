import { FC } from "react"
import { Layout } from "../Layout"
import { BrandList } from "../Lists/Brands"
import { PriceRangeList } from "../Lists/PriceRange"
import { SizeButtonList } from "../Lists/SizeButtons"
import styled from "styled-components"
import { CardList } from "../Lists/Cards"

const Container = styled.div`
    display:grid;
    grid-template-columns: 30% 70%;
`

export const HomePage: FC = () => {
    return (
        <Layout>
            <Container>
                <div>
                    <BrandList />
                    <PriceRangeList />
                    <SizeButtonList />
                </div>
                <div>
                    <CardList />
                </div>
            </Container>
        </Layout>
    )
}
