
 const getdata  = async () =>{

    const options = {
        method: 'GET',
        url: 'https://chinese-food-db.p.rapidapi.com/',
        headers: {
          'x-rapidapi-key': 'aa010fa810mshbde243fc609f849p1f912bjsnbdf29d9e839f',
          'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);

          response.data.map((item)=>{

            const imgelement =document. createElement ("img")
            imgelement.src = item.image;
            imgelement.style.width="300px" 
            imgelement.style.height="300px"
            document.getElementById("demo").appendChild(imgelement)


             const  idelement = document.createElement("p")
            const child2 = document.createTextNode("id :" + item.id)
              idelement.appendChild(child2)
              document.getElementById("demo").appendChild(idelement)

                const defelement =document.createElement("p")
                const child3 =document.createTextNode("difficulty :" + item.difficulty)
                defelement.appendChild(child3)
                document.getElementById("demo").appendChild(defelement)


                const paraelement = document.createElement("h4")
                const child4 =document.createTextNode("Title :" + item.title)
                paraelement.appendChild(child4)
                document.getElementById("demo").appendChild(paraelement)

          })
          
            } catch (error) {
          console.error(error);
      }

       

 };
 
 
  // The map() function is used to loop through an array and execute a function on each element of the array.
  // It takes two arguments: a callback function and an optional value to use as 'this' when executing the callback. 
  // The callback functi(on takes three arguments: the value of the element, the index of the element, and the array object being traversed.
  // The return value of the callback function is the value returned in the new array.
  // The map() function returns a new array with the results of calling the provided function on every element in the calling array.

