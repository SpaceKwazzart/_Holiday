import { Button } from '../../shared/ui';
import { FiPlus } from "react-icons/fi";
import style from './addCollection.module.scss';

const AddCollection = () => {
  const onClick = () => {
    alert("Add new collection");
  }

  return (
    <div className={style.container}>
      <h4>Create new collection</h4>
      <Button onClick={onClick} classname={style.button}><FiPlus size={28}/></Button>
    </div>
  );
}
 
export default AddCollection;