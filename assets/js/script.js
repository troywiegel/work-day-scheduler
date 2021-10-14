// add entry to calendar and it saves it to local storage
//label entries by time of day

//one part want to be able to type in box and click save so it goes to local storage
//two part each time the page is refreshed, entries need to be pulled from local storage and added to page
//three part change the class names in text areas based on what hour it is

// use textarea for entries
//one div per entry with a p tag, textarea and a button at the end

//style isn't super important but functionality is

// use bootstrap grid to setup? maybe get rid of css file or elements? make time and button take up a little amount of space and the text area big

// colors don't need to update in real time just when page is refreshed

// want one onclick to work for every saveBtn don't want a separate one for each
//use class names not ID for the onlick part
// see office hours for tuesday on how to setup onclick

// console.log('moment', moment(), hour())

// maybe make an array and set var names to an int to compare with moment time??

var time = moment().format('hh');
var nine = $('#9')

$('.saveBtn').on('click', function() {

    localStorage.setItem($(this).attr('name'), $('#' + $(this).attr('name')).val());

});

if (time > (nine)) {

    $(nine).addClass('past')
    console.log('getting assigned class?', nine);

}