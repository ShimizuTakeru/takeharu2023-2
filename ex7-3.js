function BMI(){
  var x=document.getElementById('sintyo').value;
  var y=document.getElementById('taiju').value;
  
  //BMIの求め方：BMI=体重[kg]÷（身長×身長）[m]
  alert(Number(y)/((Number(x)*100)*(Number(x)*100)));
}
