function BMI710(){
  var x=document.getElementById('sintyo1').value;
  var y=document.getElementById('taiju1').value;
  var BMI2=Number(y)/((Number(x)/100)*(Number(x)/100));

  var classif;
  if(('BMI2')<18.5){('classif')='低体重';}
  else if(('BMI2')<25){('classif')='普通';}
  else{('classif')='肥満';}

  alert('あなたのBMIは'+'BMI2'+'です。この体重は'+'「'+'classif'+'」'+'となります。');}
  
  //if(document.getElementById('answer79').value=='夢'){
    //alert('あたり！');}
  //else if(document.getElementById('answer79').value=='ゆめ'){
    //alert('あたり！');}
  //else{
    //alert('はずれ！');}
  //}
  //BMIの求め方：BMI=体重[kg]÷（身長×身長）[m]
