import React, {useState} from 'react'
import Navbar from '../../components/common/navbar'
import LogIn from '../../components/LogIn';
import SignUp from '../../components/SignUp';
import { Container } from 'react-bootstrap';

function HomePage() {
    const [activeTab, setActiiveTab] = useState("SignUp");

  return (
    <div>
        <Navbar activeTab={activeTab} setActiiveTab={setActiiveTab} />
        <Container className='d-flex align-items-center justify-content-center mt-5' style={{maxHeight: "100vh"}}>
            <div className='w-100' style={{maxWidth: "400px"}}>
                {getCorrectScreen(activeTab)}
            </div>
        </Container>
    </div>
  );
};

const getCorrectScreen = (tab) => {
    switch(tab) {
        case "SignUp": return <SignUp />
        case "LogIn": return <LogIn />
        default: return <SignUp />
    }
}

export default HomePage