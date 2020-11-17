import React from 'react';
import './styles.css';
import heart from '../../assets/heart.svg';

const CardHome = ({ data }) => {

    return(
        <div className="card">
            <img src={data.url} alt="sapato masculino"/>
            <img className="heart" src={heart} alt=""/>
            <div className="infos">
                <p>{data.nome}</p>
                <span>R$ {data.price}</span>
            </div>
        </div>
    );
}

export default CardHome;