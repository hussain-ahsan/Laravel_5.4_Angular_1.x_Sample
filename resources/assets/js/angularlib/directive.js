/***************************************************************************************
* Directive for html templates
* Please used these directives when we are using plain html
***************************************************************************************/
/**
 * Custom select directive
 * Please used selectpicker into tag
 */
app.directive('selectpicker', function( $timeout ) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            $timeout ( function () {
                scope.$apply( function(){
                    element.selectpicker({ showSubtext:true });
                });
                scope.$watch(function() {
                    $('.selectpicker').selectpicker('refresh');
                });
            }, 0);
        }
    };
});
/**
 * Custom date picker directive
 * Please used datetimepicker into tag
 */
app.directive('datepicker', function( $timeout ) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            $timeout ( function () {
                scope.$apply( function(){
                    element.datetimepicker({
                        format: 'DD/MM/YYYY'
                    });
                });
            }, 0);
        }
    };
});
/**
 * Custom time picker directive
 * Please used datetimepicker into tag
 */
app.directive('timepicker', function( $timeout ) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            $timeout ( function () {
                scope.$apply( function(){
                    element.datetimepicker({
                        format: 'LT'
                    });
                });
            }, 0);
        }
    };
});
/**
 * Custom file upload directive
 * Please used fileModel into tag
 */
app.directive('fileModel', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var onChangeHandler = scope.$eval(attrs.fileModel);
            element.bind('change', onChangeHandler);
        }
    };
});