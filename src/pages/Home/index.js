import React from 'react';
import CardHome from '../../Components/CardProduto';
import './styles.css';

const Home = () => {

    const dados = [{
        url: "https://imgcentauro-a.akamaihd.net/230x230/9463510R.jpg",
        nome: "Tênis Nike Renew Run - Feminino",
        price: 199.00,
        hate: 4.1,
        fav: true
    },{
        url: "https://imgcentauro-a.akamaihd.net/230x230/94444703.jpg",
        nome: "Tênis Nike Renew Run - Feminino",
        price: 10.00,
        hate: 1,
        fav: false
    },{
        url: "https://imgcentauro-a.akamaihd.net/230x230/94785731.jpg",
        nome: "Tênis Nike Renew Run - Feminino",
        price: 150.00,
        hate: 4,
        fav: true
    },{
        url: "https://imgcentauro-a.akamaihd.net/230x230/94290602.jpg",
        nome: "Tênis Nike Renew Run - Feminino",
        price: 100.00,
        hate: 2,
        fav: true
    },{
        url: "https://imgcentauro-a.akamaihd.net/230x230/9494020R.jpg",
        nome: "Tênis Nike Renew Run - Feminino",
        price: 1999.00,
        hate: 1,
        fav: true
    },{
        url: "https://imgcentauro-a.akamaihd.net/230x230/94785902.jpg",
        nome: "Tênis Nike Renew Run - Feminino",
        price: 1200.00,
        hate: 5,
        fav: true
    }]

    return(
        <div className="home-contente">
            <nav className="navbar">
                <div className="barra">
                    <h4>D'Ellen</h4>
                    <input type="text" className="search" placeholder="Buscar" />
                    <a href="/profile">Olá, Vinicius</a>
                </div>
                <header>
                    <ul>
                        <li><a href="#">Homens</a></li>
                        <li><a href="#">Mulheres</a></li>
                        <li><a href="#">Crianças</a></li>
                        <li><a href="#">Esportes</a></li>
                        <li><a href="#">Acessórios</a></li>
                        <li><a href="#">Equipamentos</a></li>
                    </ul>    
                </header>
            </nav>
            <div className="home-conteudo">

                <div className="conteudo">
                    <div className="promo">
                        <img src="https://imgcentauro-a.akamaihd.net/05_Campanhas/2020/JaeBlack/Chaordics/desk/Corrida.jpg" alt="cara correndo"/>
                    </div>
                    <div className="cards">
                        {dados.map((dado) => (
                            <CardHome data={dado} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Home;