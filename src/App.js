import React, {Component} from 'react';
import logo from './img/logo.png';
import './App.css';
import TitleBar from './TitleBar.js';
import HeroCard from './HeroCard.js';
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      heroes: [],
      heroesExibidos: []
    }
  }

  componentDidMount() {
    this.fetchHeroes();
  }

  fetchHeroes (){
    const urlString = "https://api.opendota.com/api/heroes"

    fetch(urlString)
      .then(res => res.json())
      .then(
        (result) => {
          result.sort((a,b) => {
            return a.localized_name > b.localized_name;
          });

          this.setState({
            isLoaded: true,
            heroes: result,
            heroesExibidos: result
          })
          return result;
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }

  buscarHero (termoBusca) {

    var regexp = new RegExp(termoBusca, 'i');
    var buscaHeroes = []

    if(termoBusca === ""){
      this.setState({heroesExibidos : this.state.heroes})
    }else{
      this.state.heroes.forEach((hero) => {
         if (hero.localized_name.search(regexp) !== -1) {
           buscaHeroes.push(hero)
         }
      })
      this.setState({heroesExibidos: buscaHeroes})
    }
  }

  buscarHeroHandler(event){
    const termoBusca = event.target.value
    this.buscarHero(termoBusca)
  }


  render() {
    const appName = "Dota 2";

    let HeroCards = this.state.heroesExibidos.map(hero => {
      return (
        <Col md="4" lg="4" xl="2" key={hero.id}>
          <HeroCard hero ={hero}/>
        </Col>
      )
    })

    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <TitleBar logo={logo} appName={appName}/>
          <input className="searchInput" placeholder = "Buscar Heróis" onChange={this.buscarHeroHandler.bind(this)}/>
          <Container className="HeroesContainer" fluid>
            <Row>
              {HeroCards}
            </Row>
          </Container>
        </div>

      );
    }
  }
}

export default App;