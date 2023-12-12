function BMI710(){
  var x=document.getElementById('sintyo1').value;
  var y=document.getElementById('taiju1').value;
  var z=(Number(y)/((Number(x)/100)*(Number(x)/100)));
  
  if(Number(z)<18.5){alert('あなたのBMIは'+(Number(z))+'です。この体重は「低体重」となります。');}
  else if(Number(z)<25){alert('あなたのBMIは'+(Number(z))+'です。この体重は「普通」となります。');}
  else{alert('あなたのBMIは'+(Number(z))+'です。この体重は「肥満」となります。');}
}

  //alert('あなたのBMIは+'Number(BMI2)'+です。この体重は'+'「'+'classif'+'」'+'となります。');}
  
  //if(document.getElementById('answer79').value=='夢'){
    //alert('あたり！');}
  //else if(document.getElementById('answer79').value=='ゆめ'){
    //alert('あたり！');}
  //else{
    //alert('はずれ！');}
  //}
  //BMIの求め方：BMI=体重[kg]÷（身長×身長）[m]
//alert(Number(y)/((Number(x)/100)*(Number(x)/100)));
