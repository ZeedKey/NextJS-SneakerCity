import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

interface ISearchProps {
  state: string;
  onChange: (value: string) => void;
}
export const Search: React.FC<ISearchProps> = (props) => {
  const changeState = (e: React.FormEvent<HTMLInputElement>) => {
    props.onChange(e.currentTarget.value);
  };
  return (
    <Input
      placeholder="Search for a product"
      onChange={changeState}
      value={props.state}
    />
  );
};
