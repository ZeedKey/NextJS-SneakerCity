import { Layout } from "../Layout"
import { BrandList } from "../Lists/Brands"
import { PriceRangeList } from "../Lists/PriceRange"
import { SizeButtonList } from "../Lists/SizeButtons"
import styled from "styled-components"
import { CardList } from "../Lists/Cards"
import { Footer } from "../Footer"

const Container = styled.div`
    display:grid;
    grid-template-areas: 
    "brand cards" 
    "range cards"
    "buttons cards"
    "buttons footer";
    grid-template-columns: 15% 85%;
`
export const HomePage: React.FC = () => {
    return (
        <Layout>
            <Container>
                <BrandList />
                <PriceRangeList />
                <SizeButtonList />
                <CardList />
                <Footer/>
            </Container>
        </Layout>
    )
}
