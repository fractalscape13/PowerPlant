const initialState = { soil: 0, water: 0, light: 0};

const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateChanger = storeState(initialState);
const fern = storeState(initialState);
const daffodil = storeState(initialState);
const rubberPlant = storeState(initialState);

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

const blueFood = feed(5);
const greenFood = feed(10);
const yuckyFood = feed(-5);

const fullSoak = hydrate(10);
const lightSoak = hydrate(5);

const fullSun = giveLight(10);
const partialSun = giveLight(5);


const fedPlant = stateChanger(blueFood);
// console.log("fedPlant", fedPlant);
const fedPlantAgain = stateChanger(yuckyFood);
// console.log("FedPlantAgain", fedPlantAgain);

const fedDaf = daffodil(greenFood);
console.log("fedDaf", fedDaf);
const fedFern = fern(yuckyFood);
console.log("fedFern", fedFern);
const fedRubber = rubberPlant(blueFood); 
console.log("fedRubber", fedRubber);


// $(document).ready(function(){
//   $('#feed').click(function() {
//     const newState = stateChanger(blueFood);
//     $('#soil-value').text(newState.soil);
//   });
// });



