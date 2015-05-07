$("body").ready(function () {
    // Create table
    var $pt = '<table id="mytable" width="100%">';
    // For-loop to create rows
    for (var y = 0; y < 10; y++) {
        $pt += '<tr>';
        for (var x = 0; x < 10; x++) {
            var textArr = 'jQuery makes things like HTML document traversal and manipulation and Ajax much simpler with an easy-to-use API that works across a multitude of browsers'.split(' ');
            var txt = textArr[Math.round(Math.random() * textArr.length)];
            var txt = typeof txt === 'undefined' ? 'undefined' : txt;
            $pt += "<td>" + txt + "</td>";
        }
        $pt += '</tr>';
    }
    $pt += '</table>';
    $("body").append($pt);


    //Search in cells at exact match
    $('#btn').click(function () {
        $('#mytable td').css('background-color', 'white');
        var search = $('#field').val();
        $('#mytable td:contains("' + search + '")').css('background-color', 'red');
    })
});

function hideShowRows() {
    $("body").ready(function () {
        var find = $('#field').val();
        if ($('#hideRow').is(':checked')) {
            $('#mytable td:first-child').parent('#mytable tr:not(:contains("' + find + '"))').toggle();
        } else {
            $('#mytable td:first-child').parent('#mytable tr:not(:contains("' + find + '"))').show();
        }
    })
}