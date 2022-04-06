import Image from "next/image"
import styled from 'styled-components'

const Container = styled.div`
    grid-area: footer;
`

interface IFooterProps { }
export const Footer: React.FC<IFooterProps> = () => {
    return (
        <Container>
            <hr />
            <p style={{ display: 'flex', alignItems: 'center' }}>Don’t missout on once-in-a-while-deals:
                <span style={{ display: 'flex', gap: 10, marginLeft: 15 }}>
                    <Image src="/twitter.svg" width="40" height="40" alt="productBrand" />
                    <Image src="/inst.svg" width="40" height="40" alt="productBrand" />
                    <Image src="/facebook.svg" width="40" height="40" alt="productBrand" />
                </span>
            </p>
            <p>Support line: +250 788 467 808</p>
        </Container>
    )
}