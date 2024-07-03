import styles from "../Modal/Modal.module.css";

function Modal({ data }) {
  const { firstName, lastName, email, message, query } = data;

  return (
    <div className={styles.modalCard}>
      <p>
        <span>First Name:</span> {firstName}
      </p>
      <p>
        <span>Last Name:</span> {lastName}
      </p>
      <p>
        <span>Email:</span> {email}
      </p>
      <p>
        <span>Message:</span> {message}
      </p>
      <p>
        <span>Query: </span> {query}
      </p>
    </div>
  );
}

export { Modal };
