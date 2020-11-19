import React, { useState } from 'react';
import './styles.css';
import heart from '../../assets/heart.svg';
import heartc from '../../assets/heartc.svg';
import star from '../../assets/star.svg';
import starc from '../../assets/starc.svg'

const CardHome = ({ data }) => {

    const [ fav , setFav ] = useState(data.fav);

    function Fav(data){

        if (data.fav == true){
            data.fav = false;
            setFav(data.fav);
        } else {
            data.fav = true;
            setFav(data.fav);
        }

    }

    return(
        <div className="card">
            <img src={data.url} alt="sapato masculino"/>
            <img onClick={() => Fav(data)} className="heart" src={fav ? heartc : heart} alt=""/>
            <div className="infos">
                <p>{data.nome}</p>
                <span>R$ {data.price}</span>
                <div className="stars">
                    <img className="star" src={1 <= data.hate ? starc : star} alt="estrela" />              
                    <img className="star" src={2 < data.hate ? starc : star} alt="estrela" />
                    <img className="star" src={3 < data.hate ? starc : star} alt="estrela" />
                    <img className="star" src={4 < data.hate ? starc : star} alt="estrela" />
                    <img className="star" src={5 <= data.hate ? starc : star} alt="estrela" />
                </div>
            </div>
        </div>
    );
}

export default CardHome;