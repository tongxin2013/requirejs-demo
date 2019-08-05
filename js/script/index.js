define(function () {
  var indexAlert = function () {
    $(function () {
      alert('hello index');
    });
  };
  var indexLog = function () {
    console.log('hello index');
  };
  var buttonClick = function () {
    alert('点击了');
  };

  return {
    indexAlert: indexAlert,
    indexLog: indexLog,
    buttonClick: buttonClick
  }
});