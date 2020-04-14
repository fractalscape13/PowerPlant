const storeState = () => {
    let currentState = {};
    return (stateChangeFunction) => {
        const newState = stateChangeFunction(currentState);
        currentState = {...newState};
        return newState;
    }
}

const stateChanger = storeState();

const changeState = (prop) => {
    return (value) => {
        return (state) => ({
            ...state,
            [prop] : (state[prop] || 0) + value
        })
    }
}

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

const blueFood = feed(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)



