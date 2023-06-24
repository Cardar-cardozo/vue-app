<template>
<nav class="bg-green-600 px-10 py-4 w-full">
  <div class="flex justify-between items-center ">

    <div class="flex w-full space-x-6 ">

      <div class="pt-3">
        <img alt="Vue logo" class="items-center " src="../assets/home.png">
      </div>

        <div class="pt-3">
          <img alt="Vue logo" class="items-center " src="../assets/box2.png">
        </div>

                <div type="button" class="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-yellow-500 ">
              <span class="inline-flex items-center justify-center w-4 h-4  text-xs font-semibold text-blue-800 ">
                <img alt="Vue logo" class="items-center mx-auto " src="../assets/clock.png">
              </span>
          
            </div>

        <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <span class="inline-flex items-center justify-center w-4 h-4 mr-2 text-xs font-semibold text-blue-800 ">
            <img alt="Vue logo" class="items-center mx-auto " src="../assets/moo.png">
          </span>
          <span class="text-sm">

            Register
          </span>
  </button>
                  <div type="button" class="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-red-500 ">
                <span class="inline-flex items-center justify-center w-6 h-6  text-xs font-semibold text-blue-800 ">
                  <img alt="Vue logo" class="items-center mx-auto " src="../assets/cancel.png">
                </span>
          
              </div>
    </div>

     <div class="pt-3 flex  ">

      <div class="mx-3">

        <img alt="Vue logo" class="items-center " src="../assets/key.png">
      </div>

       <div class="mx-3">

          <img alt="Vue logo" class="items-center " src="../assets/mail.png">
        </div>

               <div @click="toggleTheme" class="mx-3">

            <img alt="Vue logo" class="items-center " src="../assets/sun.png">
          </div>

                 <div class="mx-3">

            <img alt="Vue logo" class="items-center " src="../assets/bell.png">
          </div>

          
       
      </div>

  </div>
</nav>
<div  :class="theme">

  <div class="w-full  h-screen">

    <div class="px-16">
      <div>
    
      <form class=" pt-6 flex justify-between  w-full ">   
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative  w-4/12">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" :class="['block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-400   focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400 ]', theme, textColor ]" placeholder="Enter customer name or mobile number to search"  required>
              <button type="submit" class="text-white absolute right-0 h-full bottom-0 bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 ">Add</button>
            </div>
    
    
          
      <div class=" relative w-4/12 ">
          <input type="text" id="simple-email" :class="['block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-400   focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500', theme, textColor]" placeholder="Enter Product name, Code or scan barcode" required />
          </div>
    
    
        <div class=" relative w-3/12 ">
            <input type="text" id="simple-email" :class="['block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-400   focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500', theme, textColor]" placeholder="All" required />
            </div>
    
      </form>
    
      
    
      </div>
    </div>
    <div class="px-7 w-full mt-4  flex">
      <div class="w-5/12 ml-8  ">
        <div class="flex flex-wrap">
          <div  v-for="(item) in  product"
            :key="item" class="w-1/3 md:w-1/5 p-1">
            <div @click="addProduct(item)">
              <img src="../assets/cake.png" alt="Image" class="w-full h-28 object-cover">
              <div class="p-4 text-center">
                 <p :class="[ textColor]">{{ item.name }}</p>
                <p :class="[textColor]">{{item.price}}</p>
              </div>
            </div>
          </div>
    
         
        </div>

                <div class=" w-7/12 mx-auto ">
            <div class="mx-auto mt-32 text-lg">
                      <button type="button" class="inline-flex -mt-3 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-500  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 ">
              <span class="inline-flex items-center justify-center  mr-2 text-xs font-semibold text-blue-800 ">
                <img alt="Vue logo" class="items-center mx-auto " src="../assets/draft.png">
              </span>
              <span class="text-sm">

                Draft(s)
              </span>
      </button>
              <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-500  hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 ">
                <span class="inline-flex items-center justify-center  mr-2 text-xs font-semibold text-blue-800 ">
                  <img alt="Vue logo" class="items-center mx-auto " src="../assets/price.png">
                </span>
                <span class="text-sm">

                  Payment
                </span>
        </button>
              <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-400  hover:bg-blue-800 focus:ring-4 focus:outline-none">
                <span class="inline-flex items-center justify-center w-4 h-4 mr-2 text-xs font-semibold text-blue-800 ">
                  <img alt="Vue logo" class="items-center mx-auto " src="../assets/card.png">
                </span>
                <span class="text-sm">

                  Card
                </span>
        </button>
            </div>
          </div>

    
    
      </div>
    
      <div class="w-6/12 ml-20 pr-3 ">
    
    
      <div class=" w-full  ">
          <div class="w-full">
              <div class=" w-full  ">
                  <div class=" w-full   ">
                      <table class="w-full leading-normal">
                          <thead class="bg-blue-800 text-white">
                              <tr class="" >
                                  <th scope="col" class="px-5  py-3 text-sm font-normal text-left  uppercase ">
                                                             <span class="inline-flex items-center justify-center w-5 h-5 mr-2 text-xs font-semibold text-blue-800 ">
                      <img alt="Vue logo" class="items-center mx-auto " src="../assets/product.png">
                    </span>
                                      Product
                                  </th>
                                  <th scope="col" class="px-5 py-3 text-sm font-normal text-left  uppercase border-b border-gray-200">
                                      <!-- Price -->
                                  </th>
                                  <th scope="col" class="px-5 py-3 text-sm font-normal text-left uppercase  border-b border-gray-200">
                                                                <span class="inline-flex items-center justify-center w-5 h-5 mr-2 text-xs font-semibold text-blue-800 ">
                        <img alt="Vue logo" class="items-center mx-auto " src="../assets/price.png">
                      </span>
                                      price
                                  </th>
                                  <th scope="col" class="px-5 py-3 text-sm font-normal text-left  uppercase  border-b border-gray-200">
                                      
                                  </th>
                                  <th scope="col" class="px-5 py-3 text-sm font-normal text-left  uppercase  border-b border-gray-200">
                                                                <span class="inline-flex items-center justify-center w-5 h-5 mr-2 text-xs font-semibold text-blue-800 ">
                        <img alt="Vue logo" class="items-center mx-auto " src="../assets/total.png">
                      </span>
                                    total
                                  </th>
    
                                  <th scope="col" class="px-5 py-3 text-sm font-normal text-left  uppercase  border-b border-gray-200">
    
                                    </th>
                              </tr>
                          </thead>
                          <tbody >
                              <tr v-for="(item) in  cart"
            :key="item" class="border-gray-600 mt-8 border-b-2">
                                  <td class="text-sm bg-white  ">
                                      <div class="flex items-center">
                                          <div class="text-lg w-14 h-10  my-3 flex border">
                                            <div class="p-1 ml-3">
                                             {{ item.quantity }}
                                            </div>
                                            <div>
                                              <div class="ml-5 w-5 h-5 text-white bg-green-500">
                                                <button 
                                                 @click="countUp(item)"
                                                class="ml-1 -mt-9">+</button>
                                              </div>
                                              <div class="ml-5 w-5 h-5 text-white bg-red-400">
                      <button
                                   @click="countDown(item)"
                                                  class="ml-1 -mt-2">-</button>
                                                </div>
                                            </div>
                                          </div>
                                          <div class="ml-5">
                                              <p class="text-gray-900 text-lg whitespace-no-wrap">
                                                 {{item.name}}
                                              </p>
                                          </div>
                                      </div>
                                  </td>
                                  <td class="px-5 py-5 text-lg bg-white ">
                                      <p class="text-gray-900 whitespace-no-wrap">
                                       
                                      </p>
                                  </td>
                                  <td class="px-5 py-5 text-lg bg-white ">
                                      <p class="text-gray-900 whitespace-no-wrap">
                                          {{item.price }}
                                      </p>
                                  </td>
                                  <td class="px-5 py-5 text-lg bg-white ">
                                     
                                  </td>
    
                                   <td class="px-5 py-5 text-lg bg-white ">
                                        <span class="">
                                            
                                           
                                                {{ item.price * item.quantity }}
                                          
                                        </span>
                                    </td>
                                  <td  class="px-5 py-5 ttext-lg bg-white ">
    
                                    <img @click="deletePlan(item.name)" src="../assets/delete.png" alt="">
                                      <!-- <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                          Edit
                                      </a> -->
                                  </td>
                              </tr>
    
    
                          </tbody>
                      </table>
                      <div class="mt-5 border-gray-600 border-b-2 pb-5">
                        <div class="flex ml-9">
                          <div :class="[textColor]">Shipping</div>
                          <div class="ml-16">
                            <input placeholder="value" class="border w-24 text-center  border-gray-500" type="text">
                          </div>
      
                          <span :class="['ml-16',textColor]"> (Tax $0)</span>
                        </div>
    
                         <div class="flex mt-4 ml-9">
                            <div :class="[textColor]">Total Tax</div>
                            <div :class="['ml-16' ,textColor]">
                              $80
                            </div>
      
                            
                          </div>
    
                           <div class="flex mt-4 ml-9">
                              <div :class="[textColor]">Total Tax</div>
                              <div :class="['ml-16', textColor]">
                                $25 (Products)
                              </div>
      
                            
                            </div>
    
                          <div class="flex mt-4 ml-9">
                                <div :class="[textColor]">Grand Total</div>
                                <div :class="['ml-12', textColor]">
                                  {{ total }}
                                </div>
      
                            
                              </div>
    
                            <div class="flex mt-4 ml-9">
                            <div :class="[textColor]">Extra Discount</div>
                            <div class="ml-8">
                              <input placeholder="0" class="border w-24  border-gray-500" type="text">
                            </div>
      
                            <span :class="['ml-16', textColor]"> (Tax $0)</span>
                          </div>
    
                      </div>
                      <div class="w-full mt-5 border-gray-600 border-b-2 pb-5 px-3">
                        <div>
                          <button type="button" class="text-green-500 hover:text-white border border-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2">
                             <span class="inline-flex items-center justify-center w-5 h-5 mr-2 text-xs font-semibold text-blue-800 ">
                    <img alt="Vue logo" class="items-center mx-auto " src="../assets/trophy.png">
                  </span>
    
                             Coupon</button>
    
                          <button type="button" class="text-blue-800  border border-gray-500  focus:ring-4 focus:outline-none focus:ring-dark font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2 ">
                                <span class="inline-flex items-center justify-center w-5 h-5 mr-2 text-xs font-semibold text-blue-800 ">
                      <img alt="Vue logo" class="items-center mx-auto " src="../assets/bag.png">
                    </span>
                            POS Settings</button>
    
                          <button type="button" class="text-red-500 hover:text-white border border-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2">
                                <span class="inline-flex items-center justify-center w-5 h-5 mr-2 text-xs font-semibold text-blue-800 ">
                      <img alt="Vue logo" class="items-center mx-auto " src="../assets/draft.png">
                    </span>
                            Draft(s)</button>
    
                          <button type="button" class="text-green-500 hover:text-white border border-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2">
                                <span class="inline-flex items-center justify-center w-5 h-5 mr-2 text-xs font-semibold text-blue-800 ">
                      <img alt="Vue logo" class="items-center mx-auto " src="../assets/settings.png">
                    </span>
                            Invoice Properties</button>
                        </div>
                      </div>
    
                  </div>
              </div>
          </div>
      </div>
    
    
      </div>
    
    </div>
  </div>

</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
        theme: 'light',
      total:0,
      count:1,
      cart: [],
      product: [
        { img: "../assets/cake.png", price: 500, name:'cake', quantity:1 },
        { img: "../assets/cake.png", price: 300, name: 'beans', quantity: 1 },
      ],


    }
  },



  methods: {

       toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      this.textColor = this.theme === 'dark' ? 'text-white' : 'text-gray-900';
      document.documentElement.classList.toggle('dark');
    },
        deletePlan(itemName) {
         const itemIndex = this.cart.findIndex((cartItem) => cartItem.name === itemName);
      if (itemIndex !== -1) {
        const removedItem = this.cart.splice(itemIndex, 1)[0];
        removedItem.quantity = 1;

        this.total = this.calculateTotalPrice();
        console.log(removedItem);
      }

    },

    countDown(item) {
      this.count = item.quantity
      let countHere = 0
     let totalCount =  countHere + 1
     const subitem = this.cart.find((cartItem) => cartItem.name === item.name);
     
     if (item) {
       if (subitem.quantity >= this.count) {
         if (this.count === 1) {
           subitem.quantity = 1
           this.count = 1
         } else {
            
           subitem.quantity -= totalCount;
          }
          console.log(this.count)
          this.total = this.calculateTotalPrice();
        }

      }


    },

    countUp(item) {
      this.count = item.quantity
      let countHere = 0
      let totalCount = countHere + 1
      const subitem = this.cart.find((cartItem) => cartItem.name === item.name);

      if (item) {
       
         

            subitem.quantity += totalCount;
          
          console.log(this.count)
          this.total = this.calculateTotalPrice();
        

      }

    },

    calculateTotalPrice() {
      return this.cart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
    },


    addProduct(item) {
      

   const itemToUpdate = this.cart.find((yem) => 
  //  console.log(yem.name),
        yem.name === item.name,
    
   )

  

   if (itemToUpdate) {
        itemToUpdate.quantity += 1;
 
   }

   else {
    
        this.cart.push(item)
      }
      
      
   this.total =  this.calculateTotalPrice()


    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
  transition: background-color 0.3s ease;
}

.dark {
  background-color: #1a202c;
}

.light {
  background-color: #f8f8f8;
}

.text-gray-900 {
  color: #1a202c;
}


</style>
