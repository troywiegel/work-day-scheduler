var currentDay = moment().format('MMMM Do YYYY, h:mm a');
$('#currentDay').html(currentDay);


$('.saveBtn').on('click', function () {

    localStorage.setItem($(this).attr('name'), $('#' + $(this).attr('name')).val());

});

function timeTracking() {

    $('.time-block').each(function () {

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

    for (var key in localStorage) {
        $('#hour' + key + ' .description').val(localStorage.getItem(key))
    }
};
getStorage();
timeTracking();