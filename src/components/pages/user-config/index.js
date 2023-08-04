import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchGetReq, fetchPostReq } from "../../../services/restService";
import { baseApiUrl } from "../../../config";
import {Container, Row, Col, Button} from "react-bootstrap";
import EditAction from "./actions/edit";
import RemoveAction from "./actions/remove";
import AddAction from "./actions/add";
import {Navigate} from "react-router-dom";

const UserConfigTable = (props) => {
    const get_users = baseApiUrl + '/api/users'
    const user_logout = baseApiUrl + '/api/logout'
    const [rows, setRows] = useState([]);
    const [loggedOut, setLoggedOut] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem('_session_token')){
            setLoggedOut(false)
        }
    },[])

    const columns = [
        { field: "UserID", headerName: "UserID", flex: 1 },
        { field: "_username", headerName: "UserName", flex: 1 },
        { field: "RID",
            headerName: "Role",
            flex: 1,
            valueGetter: (params) => {
                return params.row.RID === 0 ? "user" : "admin";
            },
        },
        {
            field: "actions",
            headerName: "Actions",
            flex: 1,
            sortable: false,
            renderCell: (params) => {
                return (
                    <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ cursor: "pointer" }}
                    >
                        <EditAction data={params.row} onEditSuccess={getUserData} />
                        <RemoveAction index={params.row.UserID} onRemoveSuccess={getUserData} />
                    </div>
                );
            },
        },
    ];

    const getUserData= async () =>{
        try {
            const response = await fetchGetReq(get_users);
            setRows(response);
            console.log(response, "req datas");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserData()
    }, []);

    useEffect(() => {
        if (props.clearData) {
            setRows([]);
        }
    }, [[props.clearData]]);

    // async function userLogout() {
    //     const data ={
    //         _session_token: localStorage.getItem('_session_token')
    //     }
    //     try {
    //         const response = await fetchPostReq(user_logout, data);
    //         if (response === 'logout successful'){
    //             localStorage.removeItem('_session_token');
    //             setLoggedOut(true);
    //         }
    //             if(response === 'Session token missing'){
    //             setLoggedOut(true)
    //         }
    //         console.log(response, "req datas");
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <Container className = "mt-5">
            {loggedOut && <Navigate to={"/"} />}
            <Row className="text-center">
                <h1>
                    USERS TABLE
                </h1>
            </Row>
            <Row className={'text-center'} style={{marginTop: 40}}>
                <Col>
                    <AddAction onUserAdd={getUserData}/>
                </Col>
                {/* <Col>
                    <Button color="secondary" onClick={userLogout}>Logout</Button>
                </Col> */}
            </Row>
            <Row>
                <Col className={'text-center'}>
                    <div style={{ height: "75vh", marginTop: 60, marginBottom: 60,  width: '70vw' }} className={'mx-auto'}>
                        {rows && (
                            <DataGrid rows={rows} columns={columns} disableSelectionOnClick 
                            getRowId={(row) => row.UserID} 
                            />
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default UserConfigTable;
