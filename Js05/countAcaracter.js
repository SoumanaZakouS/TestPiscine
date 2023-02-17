module . exports  =  countAcaracter ;

function  countAcaracter ( eminem ,  letter )  {
    var  nombre  =  0 ;
  
    pour  ( var  je  =  0 ;  je  <  eminem . longueur ;  je ++ )  {
      si  ( eminem [ je ]  ===  lettre )  {
        compter ++ ;
      }
    }
  
     nombre de retours ;
  }
  
  let  phrase  =  "Bonjour, chers candidats comment vous allez aujourd'hui" ;


  var  lettre  =  "a" ;
  var  count  =  countAcaracter ( phrase ,  lettre ) ;
  consoler . log ( "Le nombre d'occurrences de '"  +  lettre  +   "' est : "  +  nombre ) ;
