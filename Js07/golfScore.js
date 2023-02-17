module . exportations  =  golfScore

function  golfScore ( par ,  coups ) {
    const  names  =  [ "Trou d'un coup !" ,  "Aigle" ,  "Birdie" , 
"Par" ,  "Bogey" ,  "Double Bogey" ,  "Rentrez chez vous !" ] ;
si  ( coups - par === 0  &&  par > 1  ) {
    renvoie  les noms [ 3 ] ;
}  else  if ( traits - par < - 1  &&  traits > 1 ) {
    renvoie  les noms [ 1 ] ;
}  sinon  si ( traits === par - 1 ) {
    renvoie  les noms [ 2 ] ;
}  sinon  si ( traits === par + 1 ) {
    renvoie  les noms [ 4 ] ;
}  sinon  si ( traits === par + 2 ) {
    renvoie  les noms [ 5 ] ;
}  sinon  si ( traits === par + 3 ) {
    renvoie  les noms [ 6 ] ;
}  sinon  si ( traits === 1 ) {
    renvoie  les noms [ 0 ] ;
} 
   
}


consoler . log ( golfScore ( 4 ,  1 ) ) ;
consoler . log ( golfScore ( 4 ,  2 ) ) ;
consoler . log ( golfScore ( 5 ,  2 ) ) ;
consoler . log ( golfScore ( 4 ,  3 ) ) ;
consoler . log ( golfScore ( 4 ,  4 ) ) ;
consoler . log ( golfScore ( 1 ,  1 ) ) ;
consoler . log ( golfScore ( 5 ,  5 ) ) ;