import React from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Buttoncancle  from "../components/Buttoncancle";
import Buttonlog  from "../components/ButtonLogin";

export default function Log() {
    const navigate = useNavigate();

    const Cancel = () => {
        navigate('/news'); // Перенаправляє на сторінку з новинами
    };
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 300px)', // Висота контейнера з відрахуванням 500px знизу
        marginBottom: '300px',
    };

    const innerDivStyle = { 
        width: '370px',
        height: '450px',
        padding: '20px',
        backgroundColor: 'lightblue',
        textAlign: 'center',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)'
    };

    const Inputcontainer = {
        display: 'block',
        width: '350px',
        height: '70px',
        float: 'left',
        borderRadius: '10px'
      };
      
    const Inputcontainer2 = {
        display: 'block',
        width: '350px',
        height: '70px',
        float: 'left',
        marginTop: '40px',
        marginBottom: '40px',
        borderRadius: '10px'
        };

    const Inputcontainer3 = {
        display: 'block',
        width: '350px',
        height: '70px',
        float: 'left',
        marginBottom: '40px',
        borderRadius: '10px'
        };

    const imput = {
        width: '342px',
        height: '30px'
    }
    
    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        hight: '50px',
        marginTop: '50px'
    };

    return (
        <>
            <NavBar />
            <div style={containerStyle}>
                <div style={innerDivStyle}>
                    <h2>Registration</h2>
                    <div style={Inputcontainer}>
                        Plese enter your login
                        <input type="text" placeholder="Enter text" style={imput}/>
                    </div>  
                    <div style={Inputcontainer2}>
                        Plese enter your e-mail
                        <input type="text" placeholder="Enter text" style={imput}/>
                    </div>
                    <div style={Inputcontainer3}>
                        Plese enter your password
                        <input type="text" placeholder="Enter text" style={imput}/>
                    </div>
                    <div style={buttonContainerStyle}>
                        <Buttoncancle style={{ marginLeft: '20px' }} onClick={Cancel}/>
                        <Buttonlog />
                    </div>
                </div>
            </div>
        </>
    );
}
