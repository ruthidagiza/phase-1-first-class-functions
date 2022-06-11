function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction() {
    return function callfunction() {};
  }
  function returnsAnAnonymousFunction() {
    return function () {};
  }