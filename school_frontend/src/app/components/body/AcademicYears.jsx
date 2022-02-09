import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import {authAxios} from '../../services/httpServices'
import { Link } from 'react-router-dom';

const { default: Header } = require("components/Headers/Header")

const AcademicYears = (props) => {
    const [academicYears,setAcademicYears] = useState([])

    useEffect(() => {
        async function getAcademicYears(){
            const {data} = await authAxios.get('school/register/')
          //   const {data:branches} = await authAxios.get('management/branches')
          setAcademicYears(data)
        }
        getAcademicYears();
      }, [])
   
    const columns = [
        {
            title: 'Name',
            field: 'name',
        },
        {
        title: 'Number of Terms',
        field: 'nos',
        },
        {
            title: 'Action',
            field: 'action',
        },
    ];

    const data = [
        {
        name: "01/01/2022 - 01/04/2022",
        nos: 3,
        action: 
        <Link to={`/admin/academic-year`}>
            <Button color='danger' >Details</Button>
        </Link>,
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
                                title="Academic Years"
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
 
export default AcademicYears