import Form from "../../components/contact/form/Form";
import VisitUs from "../../components/contact/visitUs/VisitUs";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.font}>
      <Form />
      <VisitUs />
    </div>
  );
}
