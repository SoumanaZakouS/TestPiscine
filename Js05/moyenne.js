fonction  moyenne ( )  {
  var  notes  =  [ 20 ,  12 ,  8 ,  9 ] ;
    var  somme  =  0 ;
   
  
    pour  ( var  je  =  0 ;  je  <  notes . longueur ;  je ++ )  {
      somme  +=  notes [ je ] ;
    }
     retour  somme  /  notes . longueur ;
    
    
    
    
  }
  consoler . log ( moyenne ( ) ) ;
  
 
  

  module . exportations  =  moyenne ;
