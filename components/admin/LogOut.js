import React from 'react';
import {Button} from 'react-bootstrap';
import { auth, firebase } from '../database'
import router from 'next/router';

const LogOut = () => {
    const handleLogOut = () => {
        firebase.auth().signOut();
        router.push('/admin/login')
    }
    return(
        <Button variant="info" onClick={handleLogOut}>Logout</Button>
    )
}

export default LogOut;
