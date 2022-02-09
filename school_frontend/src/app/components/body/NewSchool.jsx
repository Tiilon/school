import { Container, Row, Col, Card, CardHeader, CardBody, Button,FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup, } from "reactstrap";
import React, {useEffect, useState} from 'react';
// import MaterialTable from "material-table";
import {authAxios} from '../../services/httpServices'
import Register from '../../../views/examples/Register';
import { useStateValue } from "../StateProvider";

const { default: Header } = require("components/Headers/Header")

const NewSchool = () => {
    const [{user}, dispatch] = useStateValue()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [schoolGps, setSchoolGps] = useState('')
    const [schoolImage, setSchoolImage] = useState('')
    const [showForm, setShowForm] = useState(false)

    const  getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            console.log("Called", reader);
            baseURL = reader.result;
            console.log(baseURL);
            resolve(baseURL);
          };
        });
      };

    const  handleFileInputChange = e => {
            let file
        
            file = e.target.files[0];
        
            getBase64(file)
            .then(result => {
                setSchoolImage(result)
            })
            .catch(err => {
                console.log(err);
            });
    }
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
            <h3 className="mb-0">Welcome to your home view, {user}</h3>
        </CardHeader>
        <CardBody>
            <div className="row">
                {showForm ? 
                <div className="col">
                    Please fill the form on the right or click the button below to cancel
                    <p className="mt-4">
                        <Button className="btn-danger" onClick={(e)=>setShowForm(!showForm)}>
                            {showForm && "Cancel"}
                        </Button>
                    </p>
                </div> :
                <div className="col">
                        <h3>You Don't Currently Have A School Registered</h3>
                    <p className="mt-4">Please click on the button below to register</p>
                    <p className="mt-4">
                        <Button className="btn-danger" onClick={(e)=>setShowForm(!showForm)}>
                            Register your new school
                        </Button>
                    </p>
                </div>}
                <div className="col">
                    {showForm &&
                        <Form role="form">
                            <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-building" />
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                placeholder="What is the name of your school?"
                                type="text"
                                autoComplete="new-name"
                                onChange={(e)=> setName(e.target.value)}
                                />
                            </InputGroup>
                            </FormGroup>
                            <FormGroup>
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-chat-round" />
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                placeholder="Short description"
                                type="text"
                                autoComplete="new-description"
                                onChange={(e)=> setDescription(e.target.value)}
                                />
                            </InputGroup>
                            </FormGroup>
                            <FormGroup>
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-square-pin" />
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                placeholder="School Gps"
                                type="text"
                                autoComplete="new-school-gps"
                                onChange={(e)=> setSchoolGps(e.target.value)}
                                />
                            </InputGroup>
                            </FormGroup>
                            <FormGroup>
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-image mx-1" /> Upload School Logo
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                placeholder="SchoolImage"
                                type="file"
                                autoComplete="new-school-image"
                                onChange={handleFileInputChange}
                                />
                            </InputGroup>
                            {schoolImage && 
                            <div className="text-center mt-2">
                                <img src={schoolImage} alt="" height="200" width="250"/>
                            </div>
                            }
                            </FormGroup>
                            <div className="text-center">
                            <Button className="my-1" color="primary" type="submit" onClick={submit}>
                                Register
                            </Button>
                            </div>
                        </Form>
                    }
                    
                </div>
            </div>
            
            
        </CardBody>
        </Card>             
        </>
        );
}
 
export default NewSchool