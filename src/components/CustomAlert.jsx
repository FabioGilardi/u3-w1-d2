import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert
        show={show}
        variant="body"
        className="text-center border border-secondary my-4"
      >
        <Alert.Heading>Welcome to EpiHistory !</Alert.Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          harum, et, dolorem ab laborum totam magnam consequuntur quod quis enim
          pariatur commodi obcaecati minima id. Dicta, alias velit? Molestias,
          voluptate.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => setShow(false)}
            variant="outline-secondary"
            className="text-black"
          >
            Close me
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default AlertDismissible;
