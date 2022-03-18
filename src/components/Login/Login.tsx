import { useState } from 'react';
import { Input, Button, FormLabel } from '@chakra-ui/react'

async function loginUser(credentials: {}) {
    return fetch('http://localhost:8080/auth', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
};

const Login = (props: { setToken: any; }) => {
    const { setToken } = props;
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const submitHandler = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const token = await loginUser(formData).then((data)=> {
            if(data.status) {
                setFormData({
                    username: '',
                    password: ''
                });
                return { token: data.token } 
            } else {
                setFormData({
                    username: '',
                    password: ''
                });
            }
        });
        if(!!token) {setToken(token)} else {console.log('error')}
        
    };

    return(
        <form style={{maxWidth: '400px', margin: '50px auto'}} onSubmit={(e)=>submitHandler(e)}>
            <div>Use username: Alex && password: 123456</div>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Input 
                id='username' 
                name='username' 
                type="text" 
                placeholder='Username' 
                value={formData.username} 
                onChange={(e)=>setFormData({...formData, [e.target.name]: e.target.value})}
            />
            <FormLabel mt='10px' htmlFor='password'>Password</FormLabel>
            <Input 
                id='password' 
                name='password' 
                type="password" 
                placeholder='Password' 
                value={formData.password} 
                onChange={(e)=>setFormData({...formData, [e.target.name]: e.target.value})}
            />
            <Button mt='10px' colorScheme='blue' type="submit">Login</Button>
        </form>
    )
};

export default Login;