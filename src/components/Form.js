import React from "react";
import "../styles/form.scss";
import { MiniStatus } from "./MiniStatus";

const Form = ({ date, message, status, reset, save, newState, datesList }) => {
  const handleDateChange = e => {
    date(e.target.value);
  };

  const handleStatusChange = e => {
    status(e.target.value);
  };

  const handleMessageChange = e => {
    if (newState.status === "happy") {
      message(e.target.value);
    }
  };

  const handleClick = e => {
    e.preventDefault();
    if (e.target.id === "save") {
      save(newState);
      reset();
    } else if (e.target.id === "reset") {
      reset();
    }
  };

  const isSelected = status => {
    return status === newState.status ? "selected" : "";
  };

  const isChecked = status => {
    return newState.status === status ? true : false;
  };

  const isMessageDesabled = () => {
    return newState.status === "sad" ? true : false;
  };

  const isSaveDisabled = () => {
    return !newState.date || datesList.includes(newState.date) ||
      new Date(newState.date) > Date.now()
      ? true
      : false;
  };

  const tooltip = () => {
    if (new Date(newState.date) > Date.now()) {
      return (
        <div className="tooltip">La fecha tiene que ser de hoy o anterior</div>
      );
    } else if (datesList.includes(newState.date)) {
      return (
        <div className="tooltip">Ya ha sido guardado un status con esta fecha</div>
      );
    } 
    return null;
  };

  return (
    <form className="form">
      <div className="form__date">
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="form__input"
          onChange={handleDateChange}
          value={newState.date}
        />
        {tooltip()}
      </div>
      <div className="form__status">
        <p className="form__status__text">Estado</p>
        <div className="form__status__wrap">
          <label className="form__status__label" tabindex="0">
            <MiniStatus status="happy" selected={isSelected("happy")} />
            <input
              type="radio"
              name="status"
              value="happy"
              onChange={handleStatusChange}
              checked={isChecked("happy")}
            />
          </label>
          <label className="form__status__label" tabindex="0">
            <MiniStatus status="sad" selected={isSelected("sad")} />
            <input
              className="form__input"
              type="radio"
              name="status"
              value="sad"
              onChange={handleStatusChange}
              checked={isChecked("sad")}
            />
          </label>
        </div>
      </div>
      <div className="form__message">
        <label to="text">Mensaje</label>
        <textarea
          className="form__input"
          id="text"
          name="message"
          onChange={handleMessageChange}
          value={newState.message}
          rows="2"
          placeholder="Si estás feliz puedes dejar un mensaje"
          disabled={isMessageDesabled()}
        />
      </div>
      <div className="form__buttons">
        <button
          className="form__input --btn"
          id="save"
          onClick={handleClick}
          disabled={isSaveDisabled()}
        >
          Guardar
        </button>
        <button className="form__input --btn" id="reset" onClick={handleClick}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default Form;
