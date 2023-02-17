module . exportations  =  factoriel

fonction  factorielle ( n ) {
    soit  x  =  1 ;
    pour ( soit  je  = 2 ;  je <= n ;  je ++ ) {
        x *= je ;
    }
    retour  x
}
consoler . log ( factorielle ( 4 ) ) ;
