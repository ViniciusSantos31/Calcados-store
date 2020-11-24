import React from 'react';
import CardHome from '../CardProduto';
import './styles.css';

const Content = ({ data, inv }) => {

    return (
        <div className="conteudo">
            <h1>{data.title}</h1>
            <div className={inv % 2 == 0 ? "notitle inverse" : "notitle"}>
                <div className="promo">
                    <img src={data.imgPromo} alt="cara correndo"/>
                    <div className="float">
                        <h2>{data.textPromo}</h2>
                        <a href={data.linkTitle}>Ver +</a>
                    </div>
                </div>
                <div className="cards">
                    {data.items.map((item) => (
                        <CardHome data={item} />
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Content;