/* 
split delle due stringhe, controllo lunghezza sia uguale, con questi array controllo il primo numero se 1=0? no, sposto il numero
*/

function SwapMinimi(){
     var a = document.getElementById("a").value;
     var b = document.getElementById("b").value;
     var sw = 0; var result = 0;

     a_array = a.split("");
     b_array = b.split("");
     
     var count_a = controlloN(a_array, "a");
     var count_b = controlloN(b_array, "b");

         if(count_a[0] == count_b[0] && count_a[1] == count_b[1]){
            a = PaInt(a, 2);
            b = PaInt(b, 2);
                if(a > b){
                result = a - b;
                }else{
                result = a - b;
                }
                result = result.toString(2);
                for(j = 0; j < result.length; j++){
                 if (result.charAt(j) == "1"){
                    sw++;
                }
                }
                document.getElementById("n_swap").innerHTML = sw;
            }else{
                alert("I numeri binari devono avere la stessa lunghezza e devono avere lo stesso numero");
          }

}