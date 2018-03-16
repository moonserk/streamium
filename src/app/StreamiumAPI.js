import axios from 'axios';

const StreamiumAPI = {
    data: axios.get("fakedata.json").then(
        (response) => {
            this.cards = response.data;
        }),
    cards: [],
    all: () => {return this.cards}
}

export default StreamiumAPI;