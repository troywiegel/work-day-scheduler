var currentDay = moment().format('MMMM Do YYYY, h:mm a');
$('#currentDay').html(currentDay);

// onclick function that saves the content from the textbox to browser local storage
$('.saveBtn').on('click', function () {

    localStorage.setItem($(this).attr('name'), $('#' + $(this).attr('name')).val());

});

// function to check what the current time is and compare that to the time on the current time block on the scheduler
function timeTracking() {

    $('.time-block').each(function () {

        // checks current time using momentjs
        var currentTime = moment().hour();

        // takes the id string for each time block, turns it into an int, splits it into an array, and grabs the number from the array
        var calendarTime = parseInt($(this).attr('id').split('hour')[1]);

        // if statement to compare current time to claendar block number and change background color accordingly
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

// function to grab key entries from storage and put them in the text box
function getStorage() {

    for (var key in localStorage) {
        $('#hour' + key + ' .description').val(localStorage.getItem(key))
    }
};

// calling functions
getStorage();
timeTracking();