import { Container, Row, Col, Card, CardHeader, CardBody, Button,FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup, } from "reactstrap";
import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import { Accordion } from '@material-ui/core';
import {authAxios} from '../../services/httpServices'
import NewSchool from "./NewSchool";
import { useStateValue } from "../StateProvider";

const { default: Header } = require("components/Headers/Header")

const SchoolPage = () => {
    const [{user}, dispatch] = useStateValue()

    const columns = [
        {
            title: 'Name',
            field: 'name',
          },
          {
            title: 'Number of Staff',
            field: 'nos',
          },
        //   {
        //     title: 'Action',
        //     field: 'action',
        //   },
    ];

    const data = [
        {
        name: "Hi",
        nos: 2,
        // action: <Button color='danger' onClick={(e)=>(deleteBranch(branch.id))}>Delete</Button>,
        },
    ]

    const submit= async (e) =>{
        e.preventDefault();
        console.log("success")
            // try {
            //     const {data} = await authAxios.post("user/login/", {"email":email,"password":password})
            //     localStorage.setItem("access_token", data.access)
            //     localStorage.setItem("refresh_token", data.refresh)
            //     authAxios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem("access_token")
            //     window.location = `/`;
                
            // } catch (ex) {
            //     if (ex.response && ex.response.status === 400){
            //         console.log(ex.response.data)
            //         // setError(ex.response.data)
            //     }
            // }
        }

    return ( 
        <>
            <Card className="shadow">
                <CardHeader className="bg-transparent">
                    <h3 className="mb-0">Welcome to your home view {user}</h3>
                </CardHeader>
                <CardBody>
                    <div className="row">
                        <div className="col">
                                <h2>School name goes here</h2>
                            <br />
                            
                           <h2><p className="mt-4">School Info goes here</p></h2>
                        </div>
                    </div>   
                </CardBody>
            </Card> 
        </>
        );
}
 
export default SchoolPage