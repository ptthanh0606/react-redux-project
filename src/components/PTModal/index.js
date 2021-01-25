import React from "react";
import { Button, Modal } from "react-bootstrap";
import Field from "./Field";

const PTModal = ({
  isShow = false,
  onHide = () => {},
  onConfirm = () => {},
  header = "",
  fieldSettings = [],
  fieldData = {},
  confirmLabel = "Confirm",
  cancelLabel = "Close",
  ...rest
}) => {
  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      let data = {};
      let formData = new FormData(e.target);
      for (const entry of formData.entries()) {
        data = {
          ...data,
          [entry[0]]: entry[1],
        };
      }

      onConfirm(data);
    },
    [onConfirm]
  );

  return (
    <Modal show={isShow} onHide={onHide} {...rest}>
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="taskModal" onSubmit={handleSubmit}>
          {fieldSettings.map((setting) => {
            switch (setting.type) {
              case "text":
                return (
                  <Field
                    variant="outlined"
                    defaultValue={fieldData[setting.name]}
                    {...setting}
                  />
                );

              case "textarea":
                return (
                  <Field
                    multiline
                    fullWidth
                    variant="outlined"
                    defaultValue={fieldData[setting.name]}
                    {...setting}
                  />
                );

              default:
                return <></>;
            }
          })}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {cancelLabel}
        </Button>
        <Button variant="primary" form="taskModal" type="submit">
          {confirmLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(PTModal);
