(function($) {
        $.fn.extend({
            deleteConfirm: function(options)
            {
                var defaults =
                {
                    message: 'Are you sure you wish to perform this action?',
                    ok_text: 'Proceed',
                    cancel_text: 'Back',
                    log: false
                };

                options = $.extend(defaults,options);

                $('body').append('
                  <div class="modal fade" id="bs-delete-confirm" tabindex="-1" role="dialog" aria-labelledby="bs-delete-confirm-label" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="bs-delete-confirm-label">Please confirm</h4>
                            </div>
                            <div id="bs-delete-confirm-body" class="modal-body">
                                BODY
                            </div>
                            <div class="modal-footer">
                                <a id="bs-delete-confirm-cancel" class="btn btn-default" data-dismiss="modal" aria-hidden="true">Close</a>
                                <a id="bs-delete-confirm-ok" class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Proceed</a>
                            </div>
                        </div>
                    </div>
                </div>
                ');

                $('#bs-delete-confirm-body').html(defaults.message);
                $('#bs-delete-confirm-cancel').html(defaults.cancel_text);
                $('#bs-delete-confirm-ok').html(defaults.ok_text);
                
                this.each().on('click',function(e) {
                  e.preventDefault();
                  link = $(this).prop('href');
                  $('#bs-delete-confirm-ok').prop('href',link);
                  if(options.log == true){
                    console.log('Clicked link = ' + link);
                  }
                });
            }
        });
    })(jQuery);
