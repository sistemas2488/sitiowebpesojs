var divbajo=document.getElementById('imagen-bajo');
var divsaludable=document.getElementById('imagen-saludable');
var divobeso=document.getElementById('imagen-obeso');
var divsobrepeso=document.getElementById('imagen-sobrepeso');
var divmorbida=document.getElementById('imagen-morbida');
var diverror=document.getElementById('imagen-error');
divbajo.style.display='none';
divsaludable.style.display='none';
divobeso.style.display='none';
divsobrepeso.style.display='none';
divmorbida.style.display='none';
diverror.style.display='none';

function getprueba() {
  

    axios.get('https://cors-anywhere.herokuapp.com/https://apipythonejemplopeso.herokuapp.com/ping')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    
}

function getStatus() {

    var estatura = document.getElementById('txtestatura').value
    var peso = document.getElementById('txtpeso').value
    var dato = estatura.toString()+"-"+peso.toString()
    if(estatura<=0 && peso <=0){
      document.getElementById('resultado').innerHTML = "los datos ingresados no son validos. verifique por favor";
      divbajo.style.display='none';
         divsaludable.style.display='none';
         divobeso.style.display='none';
         divsobrepeso.style.display='none';
         divmorbida.style.display='none';
         diverror.style.display='none';
         diverror.style.display='';
    }
    else{

      axios.get('https://cors-anywhere.herokuapp.com/https://apipythonejemplopeso.herokuapp.com/data/'+dato)
  .then(function (response) {
    // handle success
   console.log(response.data.resultado);
    console.log(response);
    document.getElementById('resultado').innerHTML = "Con una altura de <b> "+estatura+"cm</b> y un peso de <b>"+peso+"Kg</b> tiene un estado de salud "+"<b>"+ response.data.resultado+"</b>";

   
    ///////////
    if(response.data.resultado=="bajo de peso"){
      divbajo.style.display='';
      divsaludable.style.display='none';
      divobeso.style.display='none';
      divsobrepeso.style.display='none';
      divmorbida.style.display='none';
      diverror.style.display='none';
      diverror.style.display='none';

    }else if(response.data.resultado=="saludable"){
      divbajo.style.display='none';
      divsaludable.style.display='';
      divobeso.style.display='none';
      divsobrepeso.style.display='none';
      divmorbida.style.display='none';
      diverror.style.display='none';
    } else if(response.data.resultado=="obeso"){
      divbajo.style.display='none';
      divsaludable.style.display='none';
      divobeso.style.display='';
      divsobrepeso.style.display='none';
      divmorbida.style.display='none';
      diverror.style.display='none';
    } else if(response.data.resultado=="sobrepeso"){
      divbajo.style.display='none';
      divsaludable.style.display='none';
      divobeso.style.display='none';
      divsobrepeso.style.display='';
      divmorbida.style.display='none';
      diverror.style.display='none';
    }else if(response.data.resultado=="obesidad morbida"){
      divbajo.style.display='none';
      divsaludable.style.display='none';
      divobeso.style.display='none';
      divsobrepeso.style.display='none';
      divmorbida.style.display='';
      diverror.style.display='none';

}
  //////////


    document.getElementById("miForm").reset();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


    }

  


    
}