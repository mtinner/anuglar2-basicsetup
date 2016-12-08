module.exports = (function() {

    var inputEmail = element.all(by.className('input--login')).get(0).element(by.tagName('input'));
    var loginButton = element(by.className('btn'));

    return {
        loginButton: () => loginButton,
        inputEmail: () => inputEmail,
        getUrl: () => 'http://localhost:8080/login'
    };
})();
