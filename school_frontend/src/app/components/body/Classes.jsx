import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import {authAxios} from '../../services/httpServices'

const { default: Header } = require("components/Headers/Header")

const Classes = (props) => {
    
    const columns = [
        {
            title: 'Class',
            field: 'name',
          },
        {
            title: 'Number of Students',
            field: 'nos',
        },
        {
            title: 'Number of Subjects',
            field: 'nos2',
        },
        {
            title: 'Number of Teachers',
            field: 'not',
        },
        {
            title: 'Action',
            field: 'action',
        },
    ];

    const data = [
        {
        name: "Class 1",
        nos: 23,
        nos2: 9,
        not: 5,
        action: <Button color='danger' >Details</Button>,
        // action: <Button color='danger' onClick={(e)=>(deleteBranch(branch.id))}>Delete</Button>,
        },
    ]
    
    return ( 
        <>
            <Header/>
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                        <CardBody>
                            <MaterialTable 
                                title="All Classes"
                                data={data}
                                columns={columns}
                                options={{
                                    exportButton:true
                                }}
                            />
                        </CardBody>
                        </Card>
                    </div>
                </Row>
            </Container>   
        </>
        );
}
 
export default Classes