var currentDay = moment().format('MMMM Do YYYY, h:mm a');
$('#currentDay').html(currentDay);


$('.saveBtn').on('click', function() {

    localStorage.setItem($(this).attr('name'), $('#' + $(this).attr('name')).val());

});

function timeTracking() {

    $('.time-block').each(function() {

        var currentTime = moment().hour();
        var calendarTime = parseInt($(this).attr('id').split('hour')[1]);

        if (calendarTime < currentTime) {

            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
            
        } else if (calendarTime === currentTime) {

            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');

        } else {

            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');

        }
    })
};

function getStorage() {

$('#hour9 .description').val(localStorage.getItem('9'));
$('#hour10 .description').val(localStorage.getItem('10'));
$('#hour11 .description').val(localStorage.getItem('11'));
$('#hour12 .description').val(localStorage.getItem('12'));
$('#hour13 .description').val(localStorage.getItem('13'));
$('#hour14 .description').val(localStorage.getItem('14'));
$('#hour15 .description').val(localStorage.getItem('15'));
$('#hour16 .description').val(localStorage.getItem('16'));
$('#hour17 .description').val(localStorage.getItem('17'));

};
getStorage();
timeTracking();