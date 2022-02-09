import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import MaterialTable from "material-table";
import {authAxios} from '../../services/httpServices'

const { default: Header } = require("components/Headers/Header")

const AcademicYear = (props) => {
   
    return ( 
        <>
            <Header/>
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="d-flex justify-content-between align-items-center">
                                <b>2020/2021</b>
                                {/* Render if terms are not upto 3 */}
                                <Button color='danger' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Create New Term</Button>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col>
                                        <Card>
                                            <CardHeader>
                                                Term 1
                                            </CardHeader>
                                            <CardBody>
                                                <ul class="list-group">
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        Number of students
                                                        <span class="badge badge-primary badge-pill">14</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        Number of teachers
                                                        <span class="badge badge-primary badge-pill">2</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        Number of subjects
                                                        <span class="badge badge-primary badge-pill">1</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-end align-items-center">
                                                        <Link to={`/admin/term`}>
                                                            <Button color='info' >Details</Button>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <CardHeader>
                                                Term 2
                                            </CardHeader>
                                            <CardBody>
                                                <ul class="list-group">
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        Number of students
                                                        <span class="badge badge-primary badge-pill">14</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        Number of teachers
                                                        <span class="badge badge-primary badge-pill">2</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        Number of subjects
                                                        <span class="badge badge-primary badge-pill">1</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-end align-items-center">
                                                        <Link to={`/admin/term`}>
                                                            <Button color='info' >Details</Button>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <CardHeader>
                                                Term 3
                                            </CardHeader>
                                            <CardBody>
                                                <ul class="list-group">
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        Number of students
                                                        <span class="badge badge-primary badge-pill">14</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        Number of teachers
                                                        <span class="badge badge-primary badge-pill">2</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        Number of subjects
                                                        <span class="badge badge-primary badge-pill">1</span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-end align-items-center">
                                                        <Link to={`/admin/term`}>
                                                            <Button color='info' >Details</Button>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <div className="row mt-3 d-flex justify-content-end align-items-center">
                                    <Link to={`/admin/academic-years`} className="mx-3">
                                        <Button color='danger' className="float-right">Back </Button>
                                    </Link>
                                </div> 
                                <div>
                                    {/* Modal */}
                                    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">New Term</h5>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">
                                                    <div className="mr-3">Select a term</div>
                                                    <select name="term" id="" className="mb-3">
                                                        <option value="">--------</option>
                                                        <option value="Term 1">Term 1</option>
                                                        <option value="Term 2">Term 2</option>
                                                        <option value="Term 3">Term 3</option>
                                                    </select>
                                                </div>
                                                <p>
                                                    <div className="row">
                                                        <div className="mr-3">
                                                            From: <input type="date" />
                                                        </div>
                                                        <div className="">
                                                            To: <input type="date" />
                                                        </div>
                                                    </div>
                                                </p>
                                                <p>Clicking the create button will create a new academic term for <b>2021/2022</b> academic year</p>
                                            </div>
                                            <div className="modal-footer">
                                            <button type="button" className="btn bg-danger" data-bs-dismiss="modal"><span className="text-white">Close</span></button>
                                            <button type="button" className="btn bg-success">Create</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </Container>   
        </>
        );
}
 
export default AcademicYear