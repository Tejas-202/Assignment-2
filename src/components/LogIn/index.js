import React, {useState,useRef} from 'react'
import {login,useAuth, logout} from '../../firebase'
import { Card, Form, Button } from 'react-bootstrap';

function LogIn() {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogout() {
        setLoading(true);
        try {
            await logout();
        }
        catch {
            alert("Error");
        }
        setLoading(false)
    }

    async function handleLogin() {
        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        }
        catch {
            alert("Please Sign-Up First");
        }
        setLoading(false);
    }

  return (
    <div>
        <div className='text-center mb-3 border'>Currenly logged in as: {currentUser?.email}</div>
        <Card className='shadow-xl'>
        <h2 className='text-center'>Log In</h2>
        <Card.Body>
            <Form>
                <Form.Group id="email" className='d-flex mb-3 gap-2'>
                    <Form.Label className='w-25 text-center mt-2'>Email</Form.Label>
                    <Form.Control ref={emailRef} type='email' placeholder='test@test.com' required />
                </Form.Group>
                <Form.Group id="password" className='d-flex mb-3 gap-2'>
                    <Form.Label className='w-25 text-center mt-2'>Password</Form.Label>
                    <Form.Control ref={passwordRef} type='password' placeholder='123456' required />
                </Form.Group>
            </Form>
            <div className='w-100 d-flex gap-3'>
                <Button className='w-50' disabled={loading || currentUser} onClick={handleLogin}>Log In</Button>
                <Button className='w-50' disabled={loading || !currentUser}  onClick={handleLogout}>Log-Out</Button>
            </div>
        </Card.Body>
        <div className='text-center mt-3 mb-2'>Don't have Account? Go to Sign-Up Page</div>
    </Card>
    </div>
  )
}

export default LogIn