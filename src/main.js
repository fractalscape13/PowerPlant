import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('#feed').click(function() {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });
});