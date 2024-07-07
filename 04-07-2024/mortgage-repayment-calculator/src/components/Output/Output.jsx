import styles from "./Output.module.css";
import illustrationEmpty from "../../assets/icons/illustrationEmpty.svg";

function Output(props) {
  const { isVisible, formObject } = props;

  function calculateMonthlyMortgage(
    principal,
    annualInterestRate,
    years,
    mortgageType
  ) {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numberOfPayments = years * 12;
    let monthlyPayment;
    let totalPayments;

    if (mortgageType === "Repayment") {
      const numerator =
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments);
      const denominator =
        Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
      monthlyPayment = principal * (numerator / denominator);
      totalPayments = monthlyPayment * numberOfPayments;
    } else if (mortgageType === "Interest") {
      monthlyPayment = principal * monthlyInterestRate;
      totalPayments = monthlyPayment * numberOfPayments;
    } else {
      return {
        monthlyPayment: 0,
        totalPayments: 0,
      };
    }

    return {
      monthlyPayment: monthlyPayment,
      totalPayments: totalPayments,
    };
  }

  const principal = parseFloat(formObject.amount); // Mortgage amount
  const annualInterestRate = parseFloat(formObject.rate); // Annual interest rate in percentage
  const years = parseFloat(formObject.years); // Mortgage term in years
  const mortgageType = formObject.mortgageType; // Mortgage type

  const mortgageDetails = calculateMonthlyMortgage(
    principal,
    annualInterestRate,
    years,
    mortgageType
  );
  const monthlyPayment = mortgageDetails.monthlyPayment;
  const totalPayments = mortgageDetails.totalPayments;

  // Format monthlyPayment and totalPayments as currency
  const monthlyPaymentFormatted = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(monthlyPayment);

  const totalPaymentsFormatted = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(totalPayments);

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
              {monthlyPaymentFormatted}
            </h3>
            <hr />
            <p className={styles.totalPaymentParagraph}>
              Total you'll pay over the term
            </p>
            <p className={styles.totalPayment}>{totalPaymentsFormatted}</p>
          </div>
        </div>
      )}
    </>
  );
}

export { Output };
