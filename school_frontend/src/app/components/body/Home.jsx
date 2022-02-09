import { Container, Row, Col, Card, CardHeader, CardBody, Button,FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup, } from "reactstrap";
import React, {useEffect, useState} from 'react';
// import MaterialTable from "material-table";
import {authAxios} from '../../services/httpServices'
import NewSchool from "./NewSchool";
import SchoolPage from "./SchoolPage";
import { useStateValue } from "../StateProvider";

const { default: Header } = require("components/Headers/Header")

const Home = (props) => {
    const [username, setUserName] = useState('')
    const [{user}, dispatch] = useStateValue()
    
    // useEffect(() => {
    //     async function getUserName(){
    //         try{
    //         const name=localStorage.getItem("full_name")
    //         setUserName(name)
    //         }catch(err){
    //             console.log(err.message);
    //         }
    //     }
    //     getUserName()
    // },[])
   
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
            <Header/>
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <NewSchool/>
                        <SchoolPage/>
                    </div>
                </Row>
            </Container>   
        </>
        );
}
 
export default Home