import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import { changeUserData } from "../../../../../store/apiReducer";
import { Search as SearchInput } from "../../../../constraints";

interface ISearchProps {}
export const Search: React.FC<ISearchProps> = () => {
  const [text, setText] = useState<string>("");
  const apiData = useSelector((store: RootState) => store.apiReducer.apiData);
  const dispatch = useDispatch();
  const doChangeText = (e) => {
    setText(e.target.value);
    const filteredData = apiData.data.filter((el: any) =>
        el.title.includes(text)
    );
    dispatch(changeUserData(filteredData));
  };

  return (
    <>
      <h4>Search</h4>
      <SearchInput state={text} onChange={doChangeText} />
    </>
  );
};
