import React from 'react';
import CardHome from '../../Components/CardProduto';
import Content from '../../Components/Content';
import './styles.css';

const datas = [{
    "id": 1,
    "title": "Corrida",
    "linkTitle": "#",
    "textPromo": "ROUPAS, TÊNIS E EQUIPAMENTOS PARA TODOS OS EXERCÍCIOS",
    "imgPromo": "https://imgcentauro-a.akamaihd.net/05_Campanhas/2020/JaeBlack/Chaordics/desk/Corrida.jpg",
    "items": [{
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
},{
    "id": 2,
    "title": "Mais Vendidos",
    "linkTitle": "#",
    "textPromo": "OS CAMPEÕES DE VENDA DA CENTAURO",
    "imgPromo": "https://imgcentauro-a.akamaihd.net/05_Campanhas/2020/JaeBlack/Chaordics/desk/Maisvendidos.jpg",
    "items": [{
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
},{
    "id": 3,
    "title": "Futebol",
    "linkTitle": "#",
    "textPromo": "PROMOÇÕES IMPERDÍVEIS PARA VESTIR SUA PAIXÃO",
    "imgPromo": "https://imgcentauro-a.akamaihd.net/05_Campanhas/2020/JaeBlack/Chaordics/desk/Futebol.jpg",
    "items": [{
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
}]

const Home = () => {


    return(
        <div className="home-contente">
            <nav className="navbar">
                <div className="barra">
                    <a className="logo" href="/login">D'Ellen</a>
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

                {datas.map((data) => (
                    <Content data={data} inv={data.id}/>
                ))}

            </div>
        </div>
    );

}

export default Home;