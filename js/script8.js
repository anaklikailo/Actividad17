$(document).ready(function() 
    function updateStatus() {
        const currentHref = $('#link').attr('href');
        $('#status').text(currentHref ? currentHref : '(empty)');
    }
    $('.buttons button[data-url]').on('click', function(){
        const url = $(this).data('url'); 
        const text = $(this).data('text');
        $('#link').attr('href', url).text(text); 
        updateStatus();
    })

    $('#remove').on('click', function(){
        $('#link').removeAttr('href'); 
        $('#link').text('(no destination)'); 
        updateStatus();
    })
    
    updateStatus();
);