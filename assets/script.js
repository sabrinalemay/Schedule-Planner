//Current day and time
const currentDay = moment().format('dddd, MMM, Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function (){
    $('.saveBtn').on('click', function (){
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        var currentTime = moment().hour();

        $('.time-block').each(function () {
            var timeBlock = parseInt($(this).attr('id').split('hour')[1]);

            if (timeBlock < currentTime){
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            } else if (timeBlock === currentTime){
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            } else {
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            }
        })
    }
    $("#eightAm .description").val(localStorage.getItem("eightAm"));
    $("#nineAm .description").val(localStorage.getItem("nineAm"));
    $("#tenAm .description").val(localStorage.getItem("tenAm"));
    $("#elevenAm .description").val(localStorage.getItem("elevenAm"));
    $("#twelevePm .description").val(localStorage.getItem("twlevePm"));
    $("#onePm .description").val(localStorage.getItem("onePm"));
    $("#twoPm .description").val(localStorage.getItem("twoPm"));
    $("#threePm .description").val(localStorage.getItem("threePm"));
    $("#fourPm .description").val(localStorage.getItem("fourPm"));
    $("#fivePm .description").val(localStorage.getItem("fivePm"));

    timeTracker();
})

