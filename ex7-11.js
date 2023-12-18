function uru711(){
  var a=document.getElementById('seireki').value;
  
  if((Number(a)%4==0 && Number(a)%100!=0) || Number(a)%400==0){alert(Number(a)+'年は閏年です。');}
  else{alert(Number(a)+'年は平年です。');}
}

//閏年、平年の定義
//閏年：西暦が4で割り切れる年、西暦が400でも割り切れる年、西暦が100では割り切れない年
//平年：西暦が100で割り切れる年
