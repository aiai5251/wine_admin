function getHeadUrl() {
//	return "http://localhost:9090/wine/";
	return "http://main-zha.com/chimu/wine/";
}

// Request
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var context = "";
    if (r != null)
        context = r[2];

    reg = null;
    r = null;

    return context == null || context == "" || context == "undefined" ? "" : context;
}

function GetQueryInt(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var context = "";
    if (r != null)
        context = r[2];

    reg = null;
    r = null;

    return context == null || context == "" || context == "undefined" ? 0 : new Number(context);
}