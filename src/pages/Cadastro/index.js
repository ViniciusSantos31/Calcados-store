import React from 'react';
import './styles.css';

const Signup = () => {

    return(
        <div className="section">
            <h3>Cadastrar</h3>
            <form>
                <input type="text" required name="Nome"placeholder="Nome" />
                <input type="email" required name="Email"placeholder="Email" />
                <input type="password" required name="Senha"placeholder="Senha" />
                <input type="text" required name="WhatsApp"placeholder="WhatsApp" />

                <div className="links">
                    <button type="submit">
                        Cadastrar
                    </button>
                    <a href="/login">Já tem cadastro? Entre agora.</a>
                </div>
            </form>
        </div>
    );

}

export default Signup;