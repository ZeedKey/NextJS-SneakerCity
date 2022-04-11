import styled from "styled-components"

const Input = styled.input`
    padding: 0.5rem;
`

interface ISearchProps {
    onChange: any
    state : string
}
export const Search: React.FC<ISearchProps> = ({onChange, state}) => {
    return(
        <Input value={state} aria-label="Search" type="text" placeholder="Search for a product" onChange={onChange}/>
    )
}