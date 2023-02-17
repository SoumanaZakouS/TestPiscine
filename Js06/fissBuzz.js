fonction  fizzBuzz ( ) {
    pour ( var  je  =  1 ;  je <= 100 ;  je ++ ) {
        si  ( je % 3 === 0 ) {
            consoler . log ( "Fizz" ) ;
        } sinon  si ( je % 5 === 0 ) {
            consoler . log ( 'Buzz' ) ;
        }  sinon  si  ( je % 3 === 0  &&  je % 5 === 0 ) {
            consoler . log ( 'FizzBuzz' ) ;
        } sinon {
            consoler . journal ( je ) ;
        }
    }
}
fizzBuzz ( ) ;
module . exporte  =  fizzBuzz ;
