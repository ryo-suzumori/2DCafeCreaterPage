function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent;

    if (userAgent.indexOf('Android') > 0) {
        return "Android";
    }

    if (userAgent.indexOf('iPhone') > 0 || userAgent.indexOf('iPad') > 0 || userAgent.indexOf('iPod') > 0 || (userAgent.indexOf('Macintosh') > 0 && document.ontouchstart !== undefined)) {
        return "iOS";
    }

    return "unknown";
}