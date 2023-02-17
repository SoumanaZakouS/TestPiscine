module . exportations  =  numéro de contrôle ;

fonction  checkNumber ( b ) {
    b  <=  10 ;
    si  ( b  <  5 )  {
        consoler . log ( 'Faible' ) ;
    }  sinon  si  ( b  ===  5  ||  b  ===  6 )  {
        consoler . log ( 'Moyen' ) ;
    }
    }
    checkNumber ( 4 ) ;
    checkNumber ( 5 ) ;
    checkNumber ( 6 ) ;
