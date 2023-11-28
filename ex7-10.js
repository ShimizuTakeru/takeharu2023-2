function BMI710(){
  var x=document.getElementById('sintyo1').value;
  var y=document.getElementById('taiju1').value;
  
  //if(document.getElementById('answer79').value=='夢'){
    //alert('あたり！');}
  //else if(document.getElementById('answer79').value=='ゆめ'){
    //alert('あたり！');}
  //else{
    //alert('はずれ！');}
  //}
  //BMIの求め方：BMI=体重[kg]÷（身長×身長）[m]
  if(Number(y)/((Number(x)/100)*(Number(x)/100))<18.5);{
    alert('あなたの体重は+'(Number(y)/((Number(x)/100)*(Number(x)/100)))'+です。この体重は「低体重」となります。');}
  else if(Number(y)/((Number(x)/100)*(Number(x)/100))<25);{
    alert('あなたの体重は+'(Number(y)/((Number(x)/100)*(Number(x)/100)))'+です。この体重は「普通」となります。');}
  else if(Number(y)/((Number(x)/100)*(Number(x)/100))>=25);{
    alert('あなたの体重は+'(Number(y)/((Number(x)/100)*(Number(x)/100)))'+です。この体重は「肥満」となります。');}
}
