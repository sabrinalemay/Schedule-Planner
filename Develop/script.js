//Current day and time
const currentDay = document.getElementById('currentDay');
const currentDate = moment();
$("#currentDay").text(currentDate.format("MMM Do, YYYY, h:mm:ss"));

var containerEl = document.getElementsByClassName('container');

const container = ["column1", "column2", "column3", "column4", "column5", "column6", "column7", "column8", "column9", "column10"];

function submitEvent(event) {
    event.preventDefault();

    var columns = $('input[name="calendar-input"]').val();

    var columnEl = $();

    columnEl.text(columns);

    columns.append(columnEl);

    $('input[name="cloumn1","column2","column3","column4","column5"]').val('');

    saveBtn.on('click', function(){
        var value = $(this)
        .siblings('calendar-input')
        .val();
        var time = $(this)
        .parent()
        .attr('id');
    
        localStorage.setItem(time, value);
        renderLastInput();
    });
}

//saving user's inputs into planner
var text = document.getElementsByClassName('text');
var userInput = document.getElementsByClassName('form-input');
var saveBtn = document.getElementsByClassName('saveBtn');

renderLastInput();

function displayText(type, calendarMessage){
    text.textContent = calendarMessage
    text.setAttribute("class", type);
}

function renderLastInput() {
    var calendarInput = localStorage.getItem("calendar-input");
    if (!calendarInput) {
        return;
    }
    userInput.textContent = calendarInput;

/*saveBtn.addEventlistener('click', function(){
    var value = $(this)
    .siblings('calendar-input')
    .val();
    var time = $(this)
    .parent()
    .attr('id');

    localStorage.setItem(time, value);
    renderLastInput();
});*/
}


// make for loop for color change


//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
