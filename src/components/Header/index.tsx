import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const NavBar = styled.div`
    display: flex;
    padding: 1.75rem 3.938rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`
const NavList = styled.div`
    display: flex;
    gap: 2rem;
`
const ListItem = styled.div`
    display: flex;
`
const size = {
    width: '25px',
    height: '25px',
};
export const Header: React.FC = () => {
    const router = useRouter()
    const toHome = () => router.push('/')
    const toCart = () => router.push('/Cart')

    return (
        <NavBar>
            <h1 style={{ display: 'flex', alignItems: 'center', margin: 0 }} onClick={toHome}>
                <img src="./logo.svg" alt="logo" />
                <span style={{ marginLeft: 5 }}>SC.</span>
            </h1>
            <NavList>
                <ListItem>New arrivals</ListItem>
                <ListItem>Men</ListItem>
                <ListItem>Woman</ListItem>
                <ListItem>Kids</ListItem>
            </NavList>
            <NavList>
                <Image {...size} src="/cart.svg" alt="cart" onClick={toCart} />
                <Image {...size} src="/heart.svg" alt="cart" />
                <Image {...size} src="/user.svg" alt="cart" />
            </NavList>
        </NavBar>
    )
}