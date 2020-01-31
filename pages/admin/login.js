import React from 'react';
import LogIn from '../../components/admin/LogIn'
import AdminLayout from '../../components/AdminLayout';

class Login extends React.Component{
    render(){
        return(
            <AdminLayout>
                <LogIn />
            </AdminLayout>
        )
    }
}

export default Login;