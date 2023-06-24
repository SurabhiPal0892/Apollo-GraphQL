import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <FaExclamationTriangle />
      404 Page Not Found !!
      <Link to="/">Go Back</Link>
    </>
  );
}
