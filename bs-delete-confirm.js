(function($) {
    $.fn.extend({
        deleteConfirm: function(options)
        {
            var defaults =
                {
                    heading: "Please confirm",
                    body: 'Are you sure you wish to perform this action?',
                    ok_text: 'Proceed',
                    cancel_text: 'Back',
                    class: 'primary',
                    log: false
                };

            options = $.extend(defaults,options);

            $('body').append('<div tabindex="-1" class="modal fade" id="bs-delete-confirm" tabindex="-1" role="dialog" aria-labelledby="bs-delete-confirm-label" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="bs-delete-confirm-label">Please confirm</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"></button></div><div id="bs-delete-confirm-body" class="modal-body"></div><div class="modal-footer"><a id="bs-delete-confirm-cancel" class="btn btn-default" data-dismiss="modal" aria-hidden="true"></a><a id="bs-delete-confirm-ok" class="btn btn-' + options.class + '"></a></div></div></div></div>');

            $('#bs-delete-confirm-label').html(options.heading);
            $('#bs-delete-confirm-body').html(options.body);
            $('#bs-delete-confirm-cancel').html(options.cancel_text);
            $('#bs-delete-confirm-ok').html(options.ok_text);

            this.each(function() {
                $(this).on('click',function(e){
                    e.preventDefault();
                    link = $(this).prop('href');
                    $('#bs-delete-confirm-ok').prop('href',link);
                    $('#bs-delete-confirm').modal();
                    if(options.log == true){
                        console.log('Clicked link = ' + link);
                    }
                });
            });
        }
    });
})(jQuery);

