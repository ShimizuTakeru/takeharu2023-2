function uru711(){
  var a=document.getElementById('seireki').value;
  
  if(Number(a)/4){alert(Number(a)+'は閏年です。');}
    else if(Number(a)/100 && Number(a)/400){alert(Number(a)+'は閏年です。');}
      else if(Number(a)/100){alert(Number(a)+'は平年です。');}
  else{alert(Number(a)+'は平年です。');}
}

//閏年、平年の定義
//閏年：西暦が4で割り切れる年、西暦が100でも400でも割り切れる年
//平年：西暦が100で割り切れるが400で割り切れない年
