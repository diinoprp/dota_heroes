import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardHeader, Button, Collapse } from 'reactstrap';
import AttributeBadge from "./AttributeBadge";

class HeroCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  getHeroImage(){
    var heroImageUrl = this.props.hero.name.substring('npc_dota_hero_'.length);
    heroImageUrl = "http://cdn.dota2.com/apps/dota2/images/heroes/"+heroImageUrl+"_full.png";
    return heroImageUrl
  }

  render() {
    var heroImageUrl = this.getHeroImage()
    let HeroRoles = this.props.hero.roles.map(role => {
      return (
        <li key={role}>{role}</li>
      )
    })

    return (
      <React.Fragment>
        <Card className="HeroCard">
          <CardHeader>
            <div className="CardAttribute">
              <AttributeBadge attribute={this.props.hero.primary_attr}/>
            </div>
              <CardTitle className="CardTitle">{this.props.hero.localized_name}</CardTitle>
          </CardHeader>
          <CardImg top width="100%" src={heroImageUrl} alt="Hero image cap" />
          <CardBody>
            <Button color="primary" onClick={this.toggle} className="VerMaisBtn" style={{ marginBottom: '1rem' }}>Ver Mais</Button>
            <Collapse isOpen={this.state.collapse}>
              <CardText>Atribute: {this.props.hero.primary_attr}</CardText>
              <CardText>{this.props.hero.attack_type}</CardText>
              <CardText>{this.props.hero.legs} Legs</CardText>
              Roles:
              <ul>
                {HeroRoles}
              </ul>
            </Collapse>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default HeroCard;
