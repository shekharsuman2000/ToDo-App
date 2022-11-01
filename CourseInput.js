import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length>0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.isValid}`}>
        <label style={{color: !isValid ? 'red' : 'black'}}>Add ToDo</label>
        <input style={{backgroundColor: !isValid ? 'red' : 'white'}} type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add ToDo</Button>
    </form>
  );
};

export default CourseInput;