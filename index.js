function* fibonacci() {
    let a = 0;
    let b = 1; 
    while (true) {
        let current = a;
        a = b;
        b = current + a;
        yield current;
    }
  }
  
  const fib = fibonacci();
  const findForFirstValues = 10;
  
  for (let i = 1; i <= findForFirstValues; i++) {
    console.log(`F${i}: ${fib.next().value}`);
  }