import React from 'react'
import ContainerStyle from './styles'
import { sendRequest } from '../../../../services/http.service'
import Card from './Cards/Card';

const url = 'https://gist.githubusercontent.com/AnDrOlEiN/b626d327c77b7a4f2cc105bdb0c44786/raw/90374f0b3bb23533ea7c67cf9f66ed9c8152ffb0/data.json';

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cards: [] };
    }

    componentDidMount = () => {
        sendRequest(url, "GET").then(result => {
            this.setState(() => ({
                cards: result
            }));
        })
    }

    render() {
        return (
            <ContainerStyle>
                <div>                  
                    {               
                         this.state.cards.map((card) => (<Card key={card.title} card={card}></Card>))
                    }
                </div>
            </ContainerStyle>
        )
    }
}

export default Container