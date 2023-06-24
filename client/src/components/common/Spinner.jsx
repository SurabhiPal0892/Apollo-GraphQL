import { Spinner } from "react-bootstrap";

export function SpinnerLoader() {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}
