import classes from './MealItmeForm.module.css';
import Input from '../../UI/Input';
import { useRef } from 'react';

const MealItemForm = props => { 
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        console.log(+enteredAmount)
        props.onSubmit(+enteredAmount)
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef}label="Amount" input={{
            id:'amount',
            type:'number',
            max:'5',
            min:'1',    
            step:'1',
            defaultValue:'1'
        }} />
        <button type='submit'>Add meal</button>
    </form>
};

export default MealItemForm