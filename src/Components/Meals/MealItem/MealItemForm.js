import classes from './MealItmeForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => { 
    return <form className={classes.form}>
        <Input label="Amount" input={{
            id:'ampunt',
            type:'number',
            max:'5',
            step:'1',
            defaultValue:'1'
        }} />
        <button>Add meal</button>
    </form>
};

export default MealItemForm