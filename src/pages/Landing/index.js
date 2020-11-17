import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const Landing = () => {

    return (
        <div className="content">
            <div className="inicial-info">
                <h1 className="marca">
                    D'Ellen
                </h1>
                <p className="slogan">
                    Os melhores calçados da região<br /> você encontra aqui
                </p>
            </div>
            <div className="buttons">
                <Link className="link" to='/login'>
                    Entrar
                </Link>
                <Link className="link" to="signup">
                    Cadastrar
                </Link>
            </div>
        </div>
    );

}

export default Landing;