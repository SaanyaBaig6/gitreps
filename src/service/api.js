const Api = {
    /*global fetch:true*/
    /*eslint no-undef: "error"*/
    get(url) {
        return this.performFetch(url, 'GET', '');
    },

    post(url, body) {
        return this.performFetch(url, 'POST', JSON.stringify(body));
    },

    put(url, body) {
        return this.performFetch(url, 'PUT', JSON.stringify(body));
    },

    delete(url, body) {
        return this.performFetch(url, 'DELETE', JSON.stringify(body));
    },

    performFetch(url, method, body) {
                const headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                };
                let request = {};
                switch (method) {
                    case "GET":
                        request = {
                            method: method,
                            headers: headers,
                            retries: 3,
                            retryDelay: 1000
                        };
                        break;
                    case "POST":
                        request = {
                            method: method,
                            headers: headers,
                            body: body,
                            retries: 3,
                            retryDelay: 1000
                        };
                        break;
                    case "PUT":
                        request = {
                            method: method,
                            headers: headers,
                            body: body,
                            retries: 3,
                            retryDelay: 1000
                        };
                        break;
                    case "DELETE":
                        request = {
                            method: method,
                            headers: headers,
                            body: body,
                            retries: 3,
                            retryDelay: 1000
                        };
                        break;
                    default:
                        break;
                }
                return fetch(url, request).then( res => { 
                  //console.log("res" + JSON.stringify(res));
                  return res.json().then((json) => {
                      json.status = res.status;
                      console.log("json" + JSON.stringify(json));
                      return json;
                  });     
                })
            }
};

/*global module:true*/
/*eslint no-undef: "error"*/
export default Api;