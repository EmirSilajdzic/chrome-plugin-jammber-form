document.getElementsByName("your-name")[0].value = "Dan";
document.getElementsByName("your-email")[0].value = "dan@stan.com";
document.getElementsByName("your-subject")[0].value = "Support Question";
document.getElementsByName("your-message")[0].value =
  "This is a message for you";
var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
  if (inputs[i].type.toLowerCase() == "submit") {
    inputs[i].click();
  }
}
