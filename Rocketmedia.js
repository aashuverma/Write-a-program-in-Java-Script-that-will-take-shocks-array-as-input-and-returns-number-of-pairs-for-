function sortAndCount(n , arr ){
    let sorted = arr.sort((a, b) => a - b);
    
    let pairs = 0;
    
    for (let i = 0; i<n-1; i++){
      if(sorted[i] === sorted[i+1]){
        pairs++;
        i+=1;
      }
    }
    return pairs;
  }
  
  function stockAndCount(n ,arr ){
    
  }
  
  const n =17;
  
  const socks = [1,1,1,1,2,3,3,3,3,3,3,3,4,4,4,4,4];
  
  console.clear();
  console.log(`Total: ${sortAndCount(n ,socks)} pairs`);
  
  