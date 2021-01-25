import React from "react";
import { Button, Card } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const TaskCard = ({
  name = "",
  content = "",
  createDate = "",
  onDone = () => {},
  onCancel = () => {},
  onEdit = () => {},
  ...rest
}) => {
  return (
    <Card className="task-card">
      <Card.Header className="bg-primary text-white font-weight-bold d-flex justify-content-between">
        <div className="d-flex flex-column">
          <span>{name}</span>
          <span className="small">{createDate}</span>
        </div>
        <IconButton
          className="p-0 text-white"
          style={{ outline: "none" }}
          onClick={onEdit}
        >
          <Edit fontSize="small" />
        </IconButton>
      </Card.Header>
      <Card.Body className="task-body">
        <div className="task-content">
          <span>{content}</span>
        </div>
        <div className="task-actions d-flex justify-content-end">
          <Button variant="outline-success mr-2" onClick={onDone}>
            Done
          </Button>
          <Button variant="outline-danger" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default React.memo(TaskCard);
