function  nombreVersChaîne ( entiers )  {
    let  noms  =  [ "un" ,  "deux" ,  "trois" ,  "quatre" ,  "cinq" ,  "six" ,  "sept" ,  "huit" ,  "neuf" ,  "dix" ] ;
    let  resultat  =  [ ] ;

    for  ( let  i  =  0 ;  i  <  entiers . length ;  i ++ )  {
        si  ( entiers [ je ]  >=  1  &&  entiers [ je ]  <=  10 )  {
            résultat . push ( noms [ entiers [ i ]  -  1 ] ) ;
        }
    }

    retourner  le résultat ;
}

soit  entiers  =  [ 1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 ,  8 ,  9 ,  10 ] ;
consoler . log ( nombreVersChaîne ( entiers ) ) ;
module . exporte  =  nombreVersChaîne ;