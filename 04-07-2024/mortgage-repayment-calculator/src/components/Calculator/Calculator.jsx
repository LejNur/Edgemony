import styles from "./Calculator.module.css";
import iconCalculator from "../../assets/icons/iconCalculator.svg";

function Calculator(props) {
  const { onInput, onHandleVisibility, onHandleClear, formObject } = props;

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.titleContainer}>
        <h1>Mortgage Calculator</h1>
        <button className={styles.clearButton} onClick={onHandleClear}>
          Clear All
        </button>
      </div>

      <form onSubmit={(e) => onHandleVisibility(e)}>
        <div className={styles.gridFormContainer}>
          <div>
            <label htmlFor="">Mortgage Amount</label>
            <div className={styles.inputWrapper}>
              <span className={`${styles.icon} ${styles.amount}`}>£</span>
              <input
                type="number"
                name="amount"
                value={formObject.amount}
                onChange={(e) => onInput(e)}
              />
            </div>
          </div>

          <div className={styles.term}>
            <label htmlFor="">Mortgage Term</label>
            <div className={styles.inputWrapper}>
              <span className={styles.icon}>years</span>
              <input
                type="number"
                name="years"
                value={formObject.years}
                onChange={(e) => onInput(e)}
              />
            </div>
          </div>

          <div className={styles.rate}>
            <label htmlFor="">Interest Rate</label>
            <div className={styles.inputWrapper}>
              <span className={styles.icon}>%</span>
              <input
                type="number"
                name="rate"
                value={formObject.rate}
                onChange={(e) => onInput(e)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="">Mortgage Type</label>
            <div className={styles.mortgageType}>
              <input
                type="radio"
                name="mortgageType"
                value={formObject.mortgageType}
                onChange={(e) => onInput(e)}
              />
              <label htmlFor=""> Repayment</label>
            </div>
            <div className={styles.mortgageType}>
              <input
                type="radio"
                name="mortgageType"
                value={formObject.mortgageType}
                onChange={(e) => onInput(e)}
              />
              <label htmlFor="">Interest Only</label>
            </div>
          </div>

          <button className={styles.calculateButton}>
            <img src={iconCalculator} alt="icon-calculator" />
            <span>Calculate Repayments</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export { Calculator };
