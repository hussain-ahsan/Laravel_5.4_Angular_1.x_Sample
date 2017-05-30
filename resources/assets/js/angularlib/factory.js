app.factory('commonFunction', function () {
        return{
            Error_function : function(message){
                var html ='<div class="alert alert-danger"><strong>';
                $.each(message, function(index, value) {
                   html += '<p class="text-left">'+ value +'</p>'
               });
               html += '</strong></div>';
               return html;
            },
            Success_function: function(message){
                return '<div class="alert alert-success"><strong><p class="text-left">'+ message +'</p></strong></div>';
            },
            RemoveMessage:function () {
              $('#messages').empty();
            },

            /*
            * show Loader
            */
            showLoader:function () {
                var loader = angular.element(document.getElementById('loadingAnimation'));
                loader.show();
            },
            /*
            * Stop Loader
            */
            hideLoader:function () {
                var loader = angular.element(document.getElementById('loadingAnimation'));
                loader.hide();
            },
            /*
            * Modal
            * Class will be 'modal-sm','modal-lg'
            * In case of default modal send boolean(false) in modalSize
            * If we want to load data from external html form then please used isExternalFile true
            */
            showModal : function (modalObj, modalSize, modalBody, modalController, callBack) {
                var modalInstance = modalObj.open({
                    animation: true,
                    templateUrl: modalBody,
                    controller: modalController,
                    controllerAs: true,
                    size: modalSize?modalSize:''
                });
                if(callBack)
                    callBack(modalInstance)
            },
            /*
             * Initialize core libs
             */
            initializeCoreLib:function () {
                $('.selectpicker').selectpicker();
                $('.date-picker').datetimepicker({
                    format: 'DD/MM/YYYY'
                });
                $('.time-picker').datetimepicker({
                    format: 'LT'
                });
            },
            /*
            * calculate price
            */
            calculatePrice:function (quantity, price) {
                if((quantity && price) && (quantity > 0 && price > 0))
                    return quantity * price;
                else
                    return false;
            },
            SetNotification:function (message) {
                $('#NotificationContainer').html(message);
                $('#NotificationContainer').addClass('Active');
                setTimeout(function() {
                    $('#NotificationContainer').removeClass('Active');
                }, 3000);
            }
        }
    });

/*
* Data sharing between controllers
*/
app.factory('sharedProperties', function(){
   var data = {};

   return {
       setValue: function (key,val){
           data[key] = val;
       },
       getValue: function (key){
           return data[key];
       }
   }
});

