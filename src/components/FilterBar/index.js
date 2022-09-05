import DropDownList from "../DropDownList";
import InputWithLabel from "../InputWithLabel";
import styles from './.module.css';

const FilterBar = () => {
    return (
        <div className={styles.div}>
            <b>FILTER BAR</b>
            <InputWithLabel/>
            <DropDownList/>
        </div>
    )
}

export default FilterBar;