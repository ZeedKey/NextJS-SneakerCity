import { FC } from "react"
import { Checkbox } from "../../Filter/Checkbox"
import styled from "styled-components"

const Container = styled.div`
    grid-area: brand;
`
export const BrandList: FC = () => {
    const brandsArr = ['Nike', 'Jordan', 'Adidas', 'Fila', 'Gucci', 'Balenciaga']
    return (
        <Container>
            <h4>Brand</h4>
            <div style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.15)" }}>
                {brandsArr.map(e => <Checkbox brand={e} key={e}/>)}
            </div>
        </Container>
    );
}