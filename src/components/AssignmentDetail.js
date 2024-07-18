import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Card, Row, Col, Form, Button, ListGroup, Dropdown, DropdownButton } from "react-bootstrap";
// import CommentList from "../components/CommentList";

const AssignmentDetail = () => {
    const { id, slotid, assignmentid } = useParams();
    const { assignments, users, currentUser, comments, setComments, getUserNameById,submissions } = useContext(UserContext);
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();


    if (!currentUser) {
        console.log("Not logged in");
        return navigate("/login");
    }
    console.log(currentUser.id," ", assignmentid);

    const findSubmission = () => {
        return submissions.find((submission) => submission.assignmentid === parseInt(assignmentid) && submission.userid == currentUser.id);
    };

    const submission = findSubmission();

    console.log("Submission",submissions);

    // Find the specific assignment based on assignmentid , slotid, and subjectid
    const assignment = assignments.find(
        assignment => assignment.assignmentid === parseInt(assignmentid)
    );

    console.log(assignment);


    // Handle comment submission
    const handleCommentSubmit = (e) => {
        console.log("Answer:", answer);
        e.preventDefault();
        if (answer) {
            const newComment = {
                assignmentid: parseInt(assignmentid),
                userid: currentUser.id,
                comment: answer,
                created: new Date().toISOString().slice(0, 10),
            };
            console.log(newComment);
        }
    };

    return (
        <div>
            <Row>
                {assignment && (
                <Col md={9} className="mt-5 mx-auto">
                    <h3>Assignment Details</h3>

                    <div className="container">
                        <Card>
                            <Card.Body>
                                <Card.Title><h4>Content</h4></Card.Title>
                                <hr />
                                <Card.Text>{assignment.assignmentDescription}</Card.Text>

                                <Card.Text> </Card.Text>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <Row>
                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>Due Date: {assignment.duedate}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>Score: Undifined</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                        <hr />
                        <Row>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>Submission Status: {submission ? "Submitted" : "Not Submitted"}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>Submission Date: {submission ? submission.submissiondate : "NaN"}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>Link/File Assignment: {submission ? <a href={`${submission.submissionContent }`}> Submission</a>: "NaN"}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <h4 className="mt-5">Submission</h4>
                    <Form onSubmit={handleCommentSubmit}>
                        <Form.Group controlId="answer">
                            <Form.Label>Answer</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Submit
                        </Button>
                    </Form>


                </Col>
                )}
            </Row>
        </div>
    );
};

export default AssignmentDetail;