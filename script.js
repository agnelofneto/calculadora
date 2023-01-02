function add_parameter(parameter) {
  document.querySelector("[name='screen']").value += parameter;
}

/* eval  pega o valor da string e transforma em conta*/
function calculate() {
  account = document.querySelector("[name='screen']").value;
  document.querySelector("[name='screen']").value = eval(account);
}
function cleaner() {
  document.querySelector("[name='screen']").value = "";
}
