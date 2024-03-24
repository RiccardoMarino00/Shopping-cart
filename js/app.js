const contentMainTable = document.querySelector(".tabella");
console.log(contentMainTable)
const itemsNumber = document.querySelector(".itemsNumber");



const cartItems = [
    {
      quantity: 1,
      product: {
        name: "Burger", //string
        img: "burger.png", //string
        price: 8.5, //number
      },
    },
    {
      quantity: 1,
      product: {
        name: "French Fries", //string
        img: "french-fries.png", //string
        price: 5.5, //number
      },
    },
    {
      quantity: 5,
      product: {
        name: "Kebab", //string
        img: "kebab.png", //string
        price: 7, //number
      },
    },
    {
      quantity: 1,
      product: {
        name: "Pizza", //string
        img: "pizza.png", //string
        price: 10,  //number
      },
    },
    
  ];

render(cartItems)


  function render (items){
    for (let i = 0; i < items.length; i++){
      
        contentMainTable.innerHTML += `
        <tbody>
            <tr class="riga">
                <td class="cella-lunga">
                    <div class="col-6"><img src="./img copy/${items[i].product.img}" alt=""></div>
                    <div class="col-6">
                        <p>${items[i].product.name}</p>
                        <p class="remove"><a href="#">remove</a></p>
                    </div>
                </td>
                <td class="cella-corta"> 
                <a href="#" class="less">-</a>
                <input type="text" class="inputNumber" disabled value="${ items[i].quantity}">
                <a href="#" class="more">+</a>
                </td>
                <td class="cella-corta">${items[i].product.price} &euro;</td>
                <td class="cella-corta">${ totalPrice (items[i].product.price, items[i].quantity)} &euro;</td>
            </tr>
        </tbody>`
      }
  }



  
  function totalPrice (price, quantity ){
    return quantity * price
  }


  const moreButton = document.querySelectorAll(".more")
  const lessButton = document.querySelectorAll(".less")
  const removeButton = document.querySelectorAll(".remove")
  const riga = document.querySelectorAll(".riga")
  console.log(riga)


// moreButton.addEventListener ("click", function (){
//   console.log("ciaoo")
// })


for(let i = 0; i < lessButton.length; i++){
  currentLess = lessButton[i]
  currentLess.addEventListener ("click", function (){
    console.log( "Removed 1 ", cartItems[i].product.name)
    let numbersOfItemsRemoved = cartItems[i].quantity -- 
    console.log(numbersOfItemsRemoved)

  })

}

for(let index = 0; index < moreButton.length; index++){
  currentMore = moreButton[index]
  currentMore.addEventListener ("click", function (){
    console.log( "Added 1 ", cartItems[index].product.name)
    let numbersOfItemsAdded = cartItems[index].quantity ++
    console.log(numbersOfItemsAdded)
  })

}

// function addedProduct (value){
//   for(let i = 0; i < moreButton.length; i++){
//     currentMore = moreButton[i]
//     currentMore.addEventListener ("click", function (){
//       console.log( "Added 1 ", cartItems[i].product.name)
//       let numbersOfItemsAdded = value ++
//       console.log(numbersOfItemsAdded)
//     })
//   }
// }

// AL click sulla scritta remove deve sparire il prodotto corrispondente 
  // controllo su chi viene premuto il tasto remove 
  for (let indice = 0; indice < removeButton.length; indice++) {
    currentRemoveButton = removeButton[indice];
    // const newArray = cartItems.length
    currentRemoveButton.addEventListener ("click", function(){
       // rimuovo la lista 
       riga[indice].innerHTML = ``;
       const newArray = cartItems.slice(indice)
       console.log(newArray)
       itemsNumber.innerHTML = newArray.length + " Items"
       console.log(itemsNumber)


    })
  }

// Aggiorno numero item in caso di rimozione