import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card"

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [oldTitle, setOldTitle] = useState(title);
  
  const clickHandler = () =>{
    setOldTitle(title);
    setTitle('Updated!');
    console.log("title changes");
  }

  const unclickHandler = () =>{
    setTitle(oldTitle);
    console.log("title changes");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
      <button onClick={unclickHandler}>Revert</button>
    </Card>
  );
}

export default ExpenseItem;
