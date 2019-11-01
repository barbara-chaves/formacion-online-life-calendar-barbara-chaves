import React from "react";

import { MiniState } from "./MiniState";

const Form = ({ date, message, status, reset, save, newState, datesList }) => {
  const handleChange = e => {
    const event = e.target;
    if (event.name === "date") {
      date(event.value);
    } else if (event.name === "status") {
      // if (newState.status === "happy") {
      //   message("");
      // }
      status(event.value);
    } else if (event.name === "message") {
      if (newState.status === "happy"){
        message(event.value)
      }
    }
  };

  const handleClick = e => {
    e.preventDefault();
    if (e.target.id === "save") {
        save(newState);
    } else if (e.target.id === "reset") {
      reset();
    }
  };

  const isChecked = (status) => {
    return newState.status === status ? true : false
  }

  const isDesabled = () => {
    return newState.status === 'sad' ? true : false
  }

  const isSaveDisabled = () => {
    return datesList.includes(newState.date) || !newState.date ? true : false
  }

  return (
    <form>
      <div className="form__date">
        <label>
          Fecha
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={newState.date}
          />
        </label>
      </div>
      <div className="form_status">
        <label>
          <MiniState status="happy" />
          <input
            type="radio"
            name="status"
            value="happy"
            onChange={handleChange}
            checked={isChecked('happy')}
          />
        </label>
        <label>
          <MiniState status="sad" />
          <input
            type="radio"
            name="status"
            value="sad"
            onChange={handleChange}
            checked={isChecked('sad')}
          />
        </label>
      </div>
      <div className="form__message">
        <label>
          Mensaje
          <textarea
            type="text"
            name="message"
            onChange={handleChange}
            value={newState.message}
            rows='1'
            disabled={isDesabled()}
          />
        </label>
      </div>
      <div className="form__buttons">
        <button id="save" onClick={handleClick} disabled={isSaveDisabled()}>
          Guardar
        </button>
        <button id="reset" onClick={handleClick} >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default Form;
