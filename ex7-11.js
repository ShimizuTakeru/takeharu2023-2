function uru711(){
  if(Number(seireki)/4){alert(Number(seireki)+'は閏年です。');}
    else if(Number(seireki)/100 && Number(seireki)/400){alert(Number(seireki)+'は閏年です。');}
      else if(Number(seireki)/100){alert(Number(seireki)+'は平年です。');}
  else{alert(Number(seireki)+'は平年です。');}
}

//閏年、平年の定義
//閏年：西暦が4で割り切れる年、西暦が100でも400でも割り切れる年
//平年：西暦が100で割り切れるが400で割り切れない年
