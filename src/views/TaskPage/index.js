import React from "react";

import { Add } from "@material-ui/icons";
import { Container, Row, Col, Card } from "react-bootstrap";
import PTModal from "../../components/PTModal";
import "./taskpage.scss";
import { connect } from "react-redux";
import { addTask, editTask } from "../../store/actions";
import { getAllTasks } from "../../store/selectors";
import TaskCard from "../../components/TaskCard";

const TaskPage = ({ tasks, addTask, editTask }) => {
  const [isShowModal, setIsShowModal] = React.useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = React.useState(false);
  const [fieldSettings, setFieldSettings] = React.useState([]);
  const [fieldData, setFieldData] = React.useState({});

  const handleShowModal = React.useCallback(() => {
    setIsShowModal(true);
  }, []);

  const handleConfirmAdd = React.useCallback(
    (data) => {
      addTask(data);
    },
    [addTask]
  );

  const handleConfirmEdit = React.useCallback(
    (data) => {
      editTask(data);
    },
    [editTask]
  );

  const handleEdit = React.useCallback((data) => {
    setIsShowModalEdit(true);
    setFieldData(data);
  }, []);

  const handleDoneTask = React.useCallback((data) => {
    setIsShowModalEdit(true);
    setFieldData(data);
  }, []);

  const handleCancelTask = React.useCallback((data) => {
    setIsShowModalEdit(true);
    setFieldData(data);
  }, []);

  React.useEffect(() => {
    setFieldSettings([
      {
        type: "text",
        label: "Name",
        name: "name",
        fullWidth: true,
        required: true,
      },
      {
        type: "textarea",
        label: "Task content",
        name: "content",
        required: true,
      },
    ]);
  }, []);

  React.useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <Container className="py-5 task-page">
      <div className="cover d-flex flex-column align-items-center justify-content-center">
        <h2 className="font-weight-light">Hi! I'm Phan Thong Thanh</h2>
        <h2 className="font-weight-light">
          Welcome to my task management tool using
        </h2>
        <h1 className="text-primary font-weight-bolder">Redux</h1>
      </div>

      <div className="overview">
        <h5 className="mb-5">What can it do</h5>
        <Row className="justify-content-center">
          <Col className="overview-feature" lg="2">
            Create a task
          </Col>
          <Col className="overview-feature" lg="2">
            Track current
          </Col>
          <Col className="overview-feature" lg="2">
            Make changes
          </Col>
          <Col className="overview-feature" lg="2">
            Terminate tasks
          </Col>
        </Row>
      </div>

      <div className="playground">
        <h5 className="mb-5 playground-header">Demo playground</h5>
        <div className="card-containers mt-3">
          <Row>
            <Col lg="3">
              <Card className="task-card" onClick={handleShowModal}>
                <Card.Body className="add-task-button__body">
                  <Add />
                  <span>Add task</span>
                </Card.Body>
              </Card>
            </Col>
            {tasks && tasks.length ? (
              tasks.map((task) => (
                <Col lg="3" className="mb-3">
                  <TaskCard
                    {...task}
                    onEdit={() => handleEdit(task)}
                    onDone={handleDoneTask}
                    onCancel={handleCancelTask}
                  />
                </Col>
              ))
            ) : (
              <></>
            )}
          </Row>
        </div>
        <PTModal
          centered
          isShow={isShowModal}
          onHide={() => setIsShowModal(false)}
          onConfirm={handleConfirmAdd}
          fieldSettings={fieldSettings}
          header={"Create a task"}
        />
        <PTModal
          centered
          isShow={isShowModalEdit}
          onHide={() => setIsShowModalEdit(false)}
          onConfirm={handleConfirmEdit}
          fieldSettings={fieldSettings}
          fieldData={fieldData}
          header={"Save changes"}
        />
      </div>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: getAllTasks(state),
    ...ownProps,
  };
};

const mapDispatchToProps = {
  addTask: addTask,
  editTask: editTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
