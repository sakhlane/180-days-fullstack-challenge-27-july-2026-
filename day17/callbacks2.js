/**
 * Problem 3: Online Shopping Simulation (Callbacks)
Goal

Create the following flow using callbacks and setTimeout:

addToCart()
      ↓
processPayment()
      ↓
orderSuccess()

Expected Output
Adding item to cart...
Item added to cart!
Processing payment...
Payment successful!
Order placed successfully!
 */

// addTocart function
function addToCart(callback){
    console.log('Adding item to cart...')

    setTimeout(()=>{
        console.log('Item added to cart!')
        callback(orderSuccess)
    },2000)
}

// processPayment function
function processPayment(callback){
    console.log('processing payment');
    setTimeout(()=>{
        console.log('Payment successfull')
        callback()
    },2000)
}

// orderSuccess
function orderSuccess(){
    console.log('Order Placed Successfull')
}

addToCart(processPayment)

/**
 * Problem 4: Callback Hell (Food Delivery App)

Imagine you're ordering food online.

The steps are:

Login
   ↓
Select Food
   ↓
Make Payment
   ↓
Track Order
   ↓
Order Delivered

Each step takes 2 seconds.


Expected Output
Logging in...
(wait 2 sec)

Login successful!
Selecting food...
(wait 2 sec)

Food selected!
Making payment...
(wait 2 sec)

Payment successful!
Tracking order...
(wait 2 sec)

Order is on the way!
🎉 Order delivered!
 */

// function Login
    function login(selectFood){
        console.log('Logging in .... ')

        setTimeout(()=>{
            console.log('log in successfull');
            selectFood(makePayment);
        },2000)
        
    }
   
// function Select Food
function selectFood(makePayment){
     console.log('selecting Food');
     setTimeout(()=>{
        makePayment(trackOrder);
     },2000)
}
   
// function Make Payment
   function makePayment(trackOrder){
     console.log('making payment');
     setTimeout(()=>{
        trackOrder(orderDelevered)
     },2000)
   }
// function Track Order
   function trackOrder(orderDelevered){
    console.log('order tracking')
    setTimeout(()=>{
        orderDelevered()
    },2000)
   }
// function Order Delivered
   function orderDelevered(){
        console.log('order delevered successfull')
   }

   login(selectFood)

//    same problem using callback hell looks like 

   login(function(){
        selectFood(function(){
            makePayment(function(){
                orderDelevered(
                    console.log('order delevered successfull')
                )
            })
        })
   })