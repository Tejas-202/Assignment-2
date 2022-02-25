import React, { useRef, useState } from 'react'
import {signup,useAuth, logout} from '../../firebase'
import { Card, Form, Button } from 'react-bootstrap';

function SignUp() {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    async function handleSignUp() {
        setLoading(true);
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
        }
        catch {
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            if(password.length < 6 ) {
                alert("Password should contain atleast 6 characters");
            }
            else if(!email) {
                alert("Please Enter Valid Email")
            }
            else {
                alert("User Already Exits");
            }
        }
        setLoading(false);
    }

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

    const emailRef = useRef();
    const passwordRef = useRef();

  return (
    <div>
        <div className='text-center mb-3 border'>Currenly logged in as: {currentUser?.email}</div>
        <Card className='shadow-xl'>
        <h2 className='text-center'>Sign Up</h2>
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
                <Button className='w-50' disabled={loading || currentUser} onClick={handleSignUp}>Sign-Up</Button>
                <Button className='w-50' disabled={loading || !currentUser}  onClick={handleLogout}>Log-Out</Button>
            </div>
        </Card.Body>
        <div className='text-center mt-3 mb-2'>Already have Account? Go to Log-In Page</div>
    </Card>
    </div>
  )
}

export default SignUp