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

export const Header = () => {
    return (
        <NavBar>
            <h2 style={{ display: 'flex', alignItems: 'center' }}>
                <img src="./logo.svg" alt="logo" />
                <span style={{marginLeft: 5 }}>SC.</span>
            </h2>
            <NavList>
                <ListItem>New arrivals</ListItem>
                <ListItem>Men</ListItem>
                <ListItem>Woman</ListItem>
                <ListItem>Kids</ListItem>
            </NavList>
            <NavList>
                <img src="./cart.svg" alt="cart" />
                <img src="./heart.svg" alt="heart" />
                <img src="./user.svg" alt="user" />
            </NavList>
        </NavBar>
    )
}