import React, {useRef} from "react";
import classes from "./StockForm.module.css";
import Button from '../../UI/Button'
import Input from "../../UI/Input";

const StockForm = (props) => {
  const amountInputRef = useRef()


  const handleSubmit = (e) => {
    e.preventDefault();


    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

       props.onAddToCart(enteredAmountNumber);
       //console.log(enteredAmount);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.input}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      </div>
      <div className={classes["form-action"]}>
        <Button type="submit">ADD TO CART</Button>
      </div>
    </form>
  );
};

export default StockForm;
