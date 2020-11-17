import React from 'react';
import './styles.css';

const Login = () => {

    return(
        <div className="section">
            <h3>Entrar</h3>
            <form>
                <input type="email" required name="Nome"placeholder="Email" />
                <input type="password" required name="Email"placeholder="Senha" />
                <div className="links">
                    <button type="submit">
                        Entrar
                    </button>
                    <a href="/signup">Ainda não tem cadastro? Cadastre-se agora.</a>
                </div>
            </form>
        </div>
    );

}

export default Login;