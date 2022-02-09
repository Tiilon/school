import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import {authAxios} from '../../services/httpServices'

const { default: Header } = require("components/Headers/Header")

const Teachers = (props) => {
   
    const columns = [
        {
            title: '#ID',
            field: 'id',
        },
        {
            title: 'First Name',
            field: 'fn',
        },
        {
            title: 'Last Name',
            field: 'ln',
        },
        {
            title: "Number of subjects",
            field: 'ns',
        },
        {
            title: 'Action',
            field: 'action',
        },
    ];

    const data = [
        {
        id: "8699",
        fn: "John",
        ln: "Doe",
        ns: "3",
        // action: <Button color='danger' onClick={(e)=>(deleteBranch(branch.id))}>Delete</Button>,
        action: <Button color='danger' >Details</Button>,
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
                                title="All Teachers"
                                data={data}
                                columns={columns}
                                options={{
                                    exportButton:true,
                                    searchAutoFocus:true,
                                    sorting:true
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
 
export default Teachers