import styles from "./Output.module.css";
import illustrationEmpty from "../../assets/icons/illustrationEmpty.svg";

function Output(props) {
  const { isVisible, formObject } = props;

  function calculateMonthlyMortgage(principal, annualInterestRate, years) {
    // Convert the annual interest rate to a monthly rate
    const monthlyInterestRate = annualInterestRate / 12 / 100;

    // Calculate the number of monthly payments
    const numberOfPayments = years * 12;

    // Calculate the monthly mortgage payment using the formula
    const numerator =
      monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    const monthlyPayment = principal * (numerator / denominator);

    // Calculate the total amount paid over the term
    const totalPayments = monthlyPayment * numberOfPayments;

    // Return both the monthly payment and total payments
    return {
      monthlyPayment: monthlyPayment,
      totalPayments: totalPayments,
    };
  }

  const principal = formObject.amount; // Mortgage amount
  const annualInterestRate = formObject.rate; // Annual interest rate in percentage
  const years = formObject.years; // Mortgage term in years

  const mortgageDetails = calculateMonthlyMortgage(
    principal,
    annualInterestRate,
    years
  );
  const monthlyPayment = mortgageDetails.monthlyPayment;
  const totalPayments = parseFloat(mortgageDetails.totalPayments);

  return (
    <>
      {!isVisible && (
        <div className={styles.defaultScreen}>
          <img src={illustrationEmpty} alt="icon-calculator" />
          <h2>Results shown here</h2>
          <p>
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      )}

      {isVisible && (
        <div className={styles.outputContainer}>
          <h2>Your Results</h2>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div className={styles.result}>
            <p className={styles.subtitle}>Your monthly repayments</p>
            <h3 className={styles.monthlyRepayments}>
              £{monthlyPayment.toFixed(2)}
            </h3>
            <hr />
            <p className={styles.totalPaymentParagraph}>
              Total you'll pay over the term
            </p>
            <p className={styles.totalPayment}>£{totalPayments.toFixed(4)}</p>
          </div>
        </div>
      )}
    </>
  );
}

export { Output };
