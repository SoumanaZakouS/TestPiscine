module . exports  =  displayOrder ;

 nombres  constants =  [ 5 ,  2 ,  9 ,  1 ,  3 ] ;
fonction  displayOrder ( ) {
    for (  let  i  =  0 ;  i  <  nombres . longueur ;  i ++ ) {
    for ( soit  j  =  i  +  1 ;  j  <  nombres . longueur ;  j ++ ) {
        si  ( nombres [ je ] > nombres [ j ] ) {
            let  popCorn  =  nombres [ i ] ;
            nombres [ je ]  =  nombres [ j ] ;
            nombres [ j ] =  popcorn ;
        }
    }
}
}
displayOrder ( ) ;
consoler . log ( nombres ) ;