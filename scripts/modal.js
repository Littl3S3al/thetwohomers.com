if (!sessionStorage.modal) {
    setTimeout(function() {
        $('#myModal').find('.item').first().addClass('active');
        $('#myModal').modal({
            keyboard: false
        });
    }, 3000);
    
    sessionStorage.modal = 1;}