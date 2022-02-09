import { Container, Row, Card, CardHeader, CardBody,Button } from "reactstrap";
import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import {authAxios} from '../../services/httpServices'

const { default: Header } = require("components/Headers/Header")

const Term = (props) => {
    const [classsName,setClasssName] = useState('')
    
    const columns = [
        {
            title: 'Class',
            field: 'cl',
        },
        {
            title: 'Action',
            field: 'ac',
        },
    ];

    const data = [
        {
        cl: "Class 1",
        ac: <div>
                <Button color="info" classname="btn-sm">Details</Button>
                <Button color="danger" classname="btn-sm">Delete</Button>
            </div>,
        },
    ]
    return ( 
        <>
            <Header/>
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                        <CardHeader className="d-flex justify-content-between align-items-center">
                                <b>Term 1 of 2020/2021 Academic Year</b>
                            </CardHeader>
                        <CardBody>
                            <h1>You currently do not have a class registered for this term</h1>
                            <div className="row">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="mr-3">
                                            <div className="my-5 mx-3">
                                                To register a new class, please input class name below:
                                            </div>
                                            <div className="my-5 mx-3">
                                                <input type="text" placeholder="Type here....." onChange={(e)=>setClasssName(e.target.value)}/>
                                                <Button type="button" color="success" className="btn btn-lg mx-3">Create</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <MaterialTable 
                                    title="Registered classes"
                                    data={data}
                                    columns={columns}
                                    options={{
                                        exportButton:true
                                    }}
                                    />
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
 
export default Term