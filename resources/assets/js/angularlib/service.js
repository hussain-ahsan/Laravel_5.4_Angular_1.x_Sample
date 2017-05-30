/**
* Service for file upload
*/
app.service('fileUpload', function ($http) {
    this.uploadFileToUrl = function(uploadUrl, file, callback){
       /* var fd = new FormData();
        fd.append('picture', file);*/
        $http.post(uploadUrl, file, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function(response){
                callback(response)
            })
            .error(function(response){
                callback(response)
            });
    }
});

/**
 * Service for ajax request
 * URL on which we want to send information
 * data
 * call back function
 */
app.service('requestService', function ($http) {
    this.httpPostAjax = function (requestURL, requestData, callBack) {
        $http.post(requestURL, requestData, {
            headers: {'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"}
        })
            .success(function(response){
                callBack(response, true)
            })
            .error(function(response){
                callBack(response, false)
            });
    };
    this.httpGetAjax = function (requestURL, callBack) {
        $http.get(requestURL)
            .success(function(response){
                callBack(response, true)
            })
            .error(function(response){
                callBack(response)
            });
    }
});