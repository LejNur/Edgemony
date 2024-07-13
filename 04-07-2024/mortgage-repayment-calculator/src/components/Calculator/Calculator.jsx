import styles from "./Calculator.module.css";
import classNames from "classnames";
import iconCalculator from "../../assets/icons/iconCalculator.svg";

function Calculator(props) {
  const { onInput, onHandleSubmit, onHandleClear, formObject, error } = props;

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.titleContainer}>
        <h1>Mortgage Calculator</h1>
        <button className={styles.clearButton} onClick={onHandleClear}>
          Clear All
        </button>
      </div>

      <form onSubmit={(e) => onHandleSubmit(e)}>
        <div className={styles.gridFormContainer}>
          <div>
            <label htmlFor="">Mortgage Amount</label>
            <div className={classNames(styles.inputWrapper)}>
              <span
                className={classNames(styles.icon, styles.amount, {
                  [styles.iconError]: error && !formObject.amount,
                })}
              >
                £
              </span>
              <input
                type="number"
                name="amount"
                value={formObject.amount}
                onChange={(e) => onInput(e)}
                className={classNames({
                  [styles.inputError]: error && !formObject.amount,
                })}
              />
            </div>
            {error && !formObject.amount && (
              <p className={styles.error}>{error}</p>
            )}
          </div>

          <div className={styles.term}>
            <label htmlFor="">Mortgage Term</label>
            <div className={styles.inputWrapper}>
              <span
                className={classNames(styles.icon, {
                  [styles.iconError]: error && !formObject.years,
                })}
              >
                years
              </span>
              <input
                type="number"
                name="years"
                value={formObject.years}
                onChange={(e) => onInput(e)}
                className={classNames({
                  [styles.inputError]: error && !formObject.years,
                })}
              />
            </div>
            {error && !formObject.years && (
              <p className={styles.error}>{error}</p>
            )}
          </div>

          <div className={styles.rate}>
            <label htmlFor="">Interest Rate</label>
            <div className={styles.inputWrapper}>
              <span
                className={classNames(styles.icon, {
                  [styles.iconError]: error && !formObject.rate,
                })}
              >
                %
              </span>
              <input
                type="number"
                name="rate"
                value={formObject.rate}
                onChange={(e) => onInput(e)}
                className={classNames({
                  [styles.inputError]: error && !formObject.rate,
                })}
              />
            </div>
            {error && !formObject.rate && (
              <p className={styles.error}>{error}</p>
            )}
          </div>

          <div>
            <label htmlFor="">Mortgage Type</label>
            <div className={styles.mortgageType}>
              <input
                type="radio"
                name="mortgageType"
                value="Repayment"
                checked={formObject.mortgageType === "Repayment"}
                onChange={(e) => onInput(e)}
              />
              <label htmlFor=""> Repayment</label>
            </div>
            <div className={styles.mortgageType}>
              <input
                type="radio"
                name="mortgageType"
                checked={formObject.mortgageType === "Interest"}
                value="Interest"
                onChange={(e) => onInput(e)}
              />
              <label htmlFor="">Interest Only</label>
            </div>
            {error && !formObject.mortgageType && (
              <p className={styles.error}>{error}</p>
            )}
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
