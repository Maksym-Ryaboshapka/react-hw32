import {useDispatch} from "react-redux";
import {filterTasks} from "../../redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const keyword = e.currentTarget.value.trim();
    dispatch(filterTasks(keyword));
  };

  return <input type="text" name="keyword" placeholder="Filter" onInput={handleInput}/>
};

export default Filter;