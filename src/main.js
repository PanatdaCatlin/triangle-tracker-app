import { Triangle } from './triangle';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Reusable reset
const resetValue = () => {
    $('#side1').val('');
    $('#side2').val('');
    $('#side3').val('');
};

// Gather input from form
$('#triangle-tracker').submit((event) => {
    event.preventDefault();

    const side1 = parseInt($('#side1').val());
    const side2 = parseInt($('#side2').val());
    const side3 = parseInt($('#side3').val());
    console.log(side1, side2, side3);
    // Validates input from form
    if (!side1 || side1 === '' || !side2 || side2 === '' || !side3 || side3 == '') {
        $("#myModal").modal("show");
        resetValue();
        return;
    }


    // Creates new result with input from form and displays output
    const output = new Triangle(side1, side2, side3);
    $('.card').show();
    $('#solution').text(output.checkType().toString());
    $('#triangle-tracker').hide();
    resetValue();
});



// reset button and UI state changes
$(".reset").click(() => {
    $('.card').hide();
    $('#triangle-tracker').show();
    $("#solution").empty();
});