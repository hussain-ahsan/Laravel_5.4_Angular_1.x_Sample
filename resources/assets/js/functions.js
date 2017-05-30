function showLoading() {
    $('#loadingAnimation').show();
}
function hideLoading() {
    $('#loadingAnimation').hide();
}

function httpRequest(url, method, data, callback){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        method: method,
        url: url,
        data: data?data:{},
        success: function(response) {
            callback(response, true)
        },
        error:function (response) {
            callback(response, false)
        }
    })
}
function httpFileUploadRequest(url, data, dataType, callback){
    $.ajax({
        method: "POST",
        url: url,
        dataType: dataType,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        success: function(response) {
            callback(response, true)
        },
        error:function (response) {
            callback(response, false)
        }
    })
}
