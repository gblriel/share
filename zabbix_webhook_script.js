try {
    var params = JSON.parse(value),
        req = new HttpRequest(),
        response;
        fields = {};

    if (params.HTTPProxy) {
        req.setProxy(params.HTTPProxy);
    }

    data = JSON.stringify(params);
    req.addHeader('Content-Type: application/json');
    // Zabbix.log(4, '[ Slack webhook ] Webhook request with value:' + value);
    response = req.post('http://lamp.tossinvest.biz/sender/zabbix/', data);
    Zabbix.log(4, '[ Slack webhook ] Responded with code: ' + req.getStatus() + '. Response: ' + response);

    /*
    try {
        response = JSON.parse(response);
        if (req.getStatus() < 200 || req.getStatus() >= 300) {
            // throw 'Request failed with status code';
            throw 'Request failed with status code : ' + req.getStatus();
        } else {
            throw 'Request success, but response parsing failed.';
        }
    }

    if (req.getStatus() != 200) {
        throw response.error;
    }

    return 'OK';
    */

} catch (error) {
    Zabbix.log(3, '[ LAMP webhook ] Sending failed. Error: ' + error);
    throw 'Failed with error: ' + error;
}
