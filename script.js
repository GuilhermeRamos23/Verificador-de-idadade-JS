
function verificar ( ){
   var data = new Date( )
   var ano = data.getFullYear( )
   var fano = document.getElementById('txtano') 
   var res = document. getElementById('res')
if(fano.value.length == 0 || fano.value > ano){
    alert('[ERRO] Verifique as informações inseridas')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ' '
    var img = document.createElement('img')
    img.setAttribute('id',  'foto')
       
    if (fsex[0].checked){
            genero = 'Homem'
                if(idade >=0 && idade <10){
                        //Criança
                        img.setAttribute('src', 'CriancaHomem.jpg')
                }else if( idade <21 ){
                    //jovem
                    img.setAttribute('src', 'Jovem1020.jpg')
                    } else if (idade <30 ) {
                        //adulto
                        img.setAttribute('src', 'Homem2030.jpg')
                        }
                        else if(idade <50){
                            img.setAttribute('src', 'Homem40.jpg')

                        }
                        else {
                            //idoso
                            img.setAttribute('src', 'idoso.jpg')
                        }
                
        } else if (fsex[1].checked){
            genero ='Mulher'
            if(idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'CriancaMenina.jpg')
        }else if( idade <21 ){
            //jovem
            img.setAttribute('src', 'JovemF1020.jpg')
            } else if (idade <30 ) {
                //adulto
                img.setAttribute('src', 'Mulher2030.jpg')
                }
                else if(idade <50){
                    img.setAttribute('src', 'Mulher40.jpg')

                }
                else {
                    //idoso
                    img.setAttribute('src', 'idosa.jpg')
                }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
}

}