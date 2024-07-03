import styles from "../Form/Form.module.css";
import { useState } from "react";

function Form(props) {
  const { onInput, onHandleVisibility, formObject } = props;

  const [isChecked, setIsChecked] = useState(false);
  const isFormEmpty = Object.values(formObject).every(
    (value) => value.trim() === ""
  );
  console.log(isFormEmpty);

  return (
    <form className={styles.formCard} onSubmit={(e) => onHandleVisibility(e)}>
      <h1>Contact us</h1>

      <div className={styles.inputFirstName}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" onChange={(e) => onInput(e)} />
      </div>

      <div className={styles.inputLastName}>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" onChange={(e) => onInput(e)} />
      </div>

      <div className={styles.inputEmail}>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" onChange={(e) => onInput(e)} />
      </div>

      <div className={styles.queryType}>
        <label htmlFor="queryType">Query Type</label>

        <div>
          <input
            type="radio"
            name="query"
            value="generalEquiry"
            checked={formObject.query === "generalEquiry"}
            onChange={(e) => onInput(e)}
          />
          <label htmlFor="generalEquiry">General Enquiry</label>
        </div>
        <div>
          <input
            type="radio"
            name="query"
            value="supportEquiry"
            checked={formObject.query === "supportEquiry"}
            onChange={(e) => onInput(e)}
          />
          <label htmlFor="supportEquiry">Support Enquiry</label>
        </div>
      </div>

      <div className={styles.inputMessage}>
        <label htmlFor="message">Message</label>
        <div>
          <textarea name="message" onChange={(e) => onInput(e)}></textarea>
        </div>
      </div>

      <div className={styles.consent}>
        <input
          type="checkbox"
          name="consent"
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
        />
        <label htmlFor="consent">
          I consent to being contacted by the team
        </label>
      </div>

      <button className={styles.button} disabled={!isChecked || isFormEmpty}>
        Submit
      </button>
    </form>
  );
}

export { Form };
