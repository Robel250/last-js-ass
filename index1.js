 function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
     
      async function helloWorld() {
        console.log("Hello");
        await delay(2000); 
        console.log("World");
      }
      
      
      helloWorld();