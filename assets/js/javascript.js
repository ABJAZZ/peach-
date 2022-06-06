
function bodyLoaded(){

    if(localStorage.getItem('peachperfumeproducts')){
        var prod = localStorage.getItem('peachperfumeproducts');
        window.products = JSON.parse(prod);

    }else{

        window.products = {};
    }

    // console.log(products)
    setInterval(checkCart, 100)
    var cartcounter = document.querySelector('.cart-counter')

    function checkCart(){

        var tproducts = Object.keys(products);

        if(tproducts.length > 0){

            cartcounter.style.display = "inline-block";

            if(cartcounter.textContent != tproducts.length){

                cartcounter.textContent = tproducts.length;
            }
            
        }else{
            
            cartcounter.style.display = "none";
            cartcounter.textContent = "";

        }
    }
    
    setTimeout(removeLoader, 300);


    // console.log(window.innerHeight)
    var accountBtn = document.getElementById('user-account');
    var closeAccountBtn = document.getElementById('close-account-section');
    var createAccountBtn = document.getElementById('create-acc-button');
    var loginAccountBtn = document.getElementById('login-form-button');
    var cancelMessageButton = document.getElementById('cancel-message');
    
    
    closeAccountBtn.addEventListener('click', ()=>{
        let accountSection = document.querySelector('.account-section');
        var bodyCont = document.querySelector('body');

        bodyCont.style.overflowY = "scroll";
        
        accountSection.style.display = "none";
        hideModal();

        
    
    })

    cancelMessageButton.addEventListener('click', removeMessage);
    
    createAccountBtn.addEventListener('click', ()=>{
        let loginSection = document.querySelector('.login-section');
        let signUpSection = document.querySelector('.sign-up-section');
    
        loginSection.style.display = "none";
        loginSection.style.transform = "scale(0, 0)";
        loginSection.style.transition = "none";
    
        signUpSection.style.display = "block";
    
        function showSignup(){
            signUpSection.style.transition = "1s ease all";
            signUpSection.style.transform = "scale(1, 1)";
        }
    
        setTimeout(showSignup, 200);
    })
    
    loginAccountBtn.addEventListener('click', ()=>{
    
        let loginSection = document.querySelector('.login-section');
        let signUpSection = document.querySelector('.sign-up-section');
    
        signUpSection.style.display = "none";
        signUpSection.style.transition = "none";
        signUpSection.style.transform = "scale(0, 0)";
    
        loginSection.style.display = "block";
    
        function showLogin(){
            loginSection.style.transition = "1s ease all";
            loginSection.style.transform = "scale(1, 1)";
        }
    
        setTimeout(showLogin, 200);
    })
    
    
    
    window.onscroll = ()=>{
        
        var header = document.querySelector('header');
        var mobileLinkContainer = document.querySelector('.mobile-link');

        if(mobileLinkContainer.style.right === "0px"){
            closeMobileMenu();
        }
        
        if (window.matchMedia("(max-width: 500px)").matches){
            
            mobileLinkContainer.style.top = "58px";
            if(window.scrollY >= 60){

                header.style.position = "fixed";
                header.style.top = "-0px";
                header.style.background = "rgb(210, 117, 59)";
                header.style.transition = "1s ease top";
                header.style.height = "60px";
                
            }else{
                
                header.style.height = "60px";
                header.style.top = "0px";
                header.style.marginTop = "0px";
                header.style.transition = "none";
                header.style.position = "absolute";
                header.style.background = "transparent";

            }
        }else{

            if(window.scrollY >= 120){

                header.style.position = "fixed";
                header.style.height = "60px";
                header.style.top = "-2px";
                header.style.background = "rgb(210, 117, 59)";
                header.style.transition = "1s ease height";
                mobileLinkContainer.style.top = "58px";
                
            }else{
                
                header.style.height = "120px";
                header.style.top = "0px";
                header.style.marginTop = "0px";
                header.style.transition = "1s ease height";
                header.style.position = "absolute";
                header.style.background = "transparent";
                mobileLinkContainer.style.top = "118px";

            }

        }
    }

    window.onresize = ()=>{

        var header = document.querySelector('header');
        var mobileLinkContainer = document.querySelector('.mobile-link');

            closeMobileMenu();
        
        if (window.matchMedia("(max-width: 500px)").matches){
            
            mobileLinkContainer.style.top = "58px";
            if(window.scrollY >= 60){

                header.style.position = "fixed";
                header.style.top = "-2px";
                header.style.background = "rgb(210, 117, 59)";
                header.style.transition = "1s ease top";
                header.style.height = "60px";
                
            }else{
                
                header.style.height = "60px";
                header.style.top = "0px";
                header.style.marginTop = "0px";
                header.style.transition = "none";
                header.style.position = "absolute";
                header.style.background = "transparent";

            }
        }else{

            if(window.scrollY >= 120){

                header.style.position = "fixed";
                header.style.height = "60px";
                header.style.top = "-2px";
                header.style.background = "rgb(210, 117, 59)";
                header.style.transition = "1s ease height";
                mobileLinkContainer.style.top = "58px";
                
            }else{
                
                header.style.height = "120px";
                header.style.top = "0px";
                header.style.marginTop = "0px";
                header.style.transition = "1s ease height";
                header.style.position = "absolute";
                header.style.background = "transparent";
                mobileLinkContainer.style.top = "118px";

            }

        }

    }

    if(document.querySelector('#substract-quantity')){

        var productquantityinput = document.querySelector('#product-quantity');
        var addProductQuantity = document.querySelector('#add-quantity');
        var substractProductQuantity = document.querySelector('#substract-quantity');
        var quantityvalue = productquantityinput.value;
        
        productquantityinput.addEventListener('input', ()=>{
    
            
    
            productquantityinput.addEventListener('keyup', (e)=>{
                console.log(e.code);
    
                
    
                if(e.code === "Backspace" && productquantityinput.value === ""){
                    productquantityinput.value = 1;
                }
    
    
                if(e.code != "Digit1" && e.code != "Digit2" && e.code != "Digit3" && e.code != "Digit4" && e.code != "Digit5" && e.code != "Digit6" && e.code != "Digit7" && e.code != "Digit8" && e.code != "Digit9" && e.code != "Digit0" && e.code != "Backspace"){
                    productquantityinput.value = quantityvalue;
                }else{
    
                    quantityvalue = productquantityinput.value;
                }
    
                
    
            })
        })
    
        addProductQuantity.addEventListener('click', ()=>{
            var presentvalue = parseInt(productquantityinput.value);
            productquantityinput.value = (presentvalue + 1);
            quantityvalue = (presentvalue + 1);
        })
    
        substractProductQuantity.addEventListener('click', ()=>{
            var presentvalue = parseInt(productquantityinput.value);
    
            if(presentvalue != 1){
    
                productquantityinput.value = (presentvalue - 1);
                quantityvalue = (presentvalue - 1);
            }
        })
    }

    refreshCart();

}

function refreshCart(){
    
    if(document.querySelector('.cart-container')){
        var cartContainer = document.querySelector('.cart-container')

        cartContainer.innerHTML = "";

        var tproducts = Object.keys(products);


        if(tproducts.length > 0){

            //code for the cart list

            var cartList = createNewEle("div", {
                class: "cart-list"
            }, null)

            //code for cart item container

            var cartItemContainer = createNewEle("div", {
                class: "cart-item-container"
            }, null)

            // console.log('working')

            // adding the cart item

            for(var i = 0; i < tproducts.length; i++){

                var cartItems = createNewEle("div", {
                    class: "cart-item"
                }, null)

                var cartItemsImage = createNewEle("div", {
                    class: "cart-item-image"
                }, null)

                var cartImage = createNewEle("img", {
                    src: "../assets/images/products/product-1.jpg"
                }, null)

                var cartProdQuantity = createNewEle("button", {
                    id: "product-quantity"
                }, null)

                cartProdQuantity.textContent = products[tproducts[i]]["quantity"];

                var cartDescription = createNewEle("div", {
                    class: "cart-item-description"
                }, null)

                var cartDetails = createNewEle("div", {
                    class: "cart-details"
                }, null)

                var cartItemTitle = createNewEle("div", {
                    class: "cart-item-title"
                }, null)

                var cartTitle = createNewEle("h2", null, null)

                var productname = products[tproducts[i]]["name"];

                var title = productname[0].toUpperCase() + productname.substr(1);

                cartTitle.textContent = title;

                cartItemTitle.appendChild(cartTitle);

                var cartPrice = createNewEle("div", {
                    class: "cart-item-price"
                }, null)

                var priceOne = createNewEle("p", {
                    class: "original-price"
                }, null)

                priceOne.textContent = "$300";

                cartPrice.appendChild(priceOne);

                cartDetails.appendChild(cartItemTitle);
                cartDetails.appendChild(cartPrice);




                var cartbutton = createNewEle("div", {
                    class: "cart-item-buttons"
                }, null)

                var deletebutton = createNewEle("div", {
                    class: "delete-button"
                }, null)

                var deleteLink = createNewEle("a", {
                    onclick: "deleteCart("+ tproducts[i] +")"
                }, null)

                var linkicon = createNewEle("i", {
                    class: "fas fa-trash-alt"
                }, null)


                deleteLink.appendChild(linkicon);
                deletebutton.appendChild(deleteLink);



                var cartbuttoncontent = createNewEle("div", {
                    class: "button-contents"
                }, null)

                var substractButton = createNewEle("button", {
                    id: "substract-cart-qty",
                    onclick: "subtractProdQ("+ tproducts[i]+ ")"
                }, null)

                var addButton = createNewEle("button", {
                    id: "substract-cart-qty",
                    onclick: "addProdQ("+ tproducts[i]+ ")"
                }, null)

                var quantityInput = createNewEle("input", {
                    id: "cart-qty-" + tproducts[i],
                    value: 1,
                    type: "number"
                }, {
                    outline: "none"
                })

                substractButton.textContent = "-";
                addButton.textContent = "+";

                cartbuttoncontent.appendChild(substractButton);
                cartbuttoncontent.appendChild(quantityInput);
                cartbuttoncontent.appendChild(addButton);

                cartbutton.appendChild(deletebutton);
                cartbutton.appendChild(cartbuttoncontent);

                

                //appending the cart-images
                cartItemsImage.appendChild(cartProdQuantity)
                cartItemsImage.appendChild(cartImage)
                cartItems.appendChild(cartItemsImage);
                
                //appending cart item description
                cartDescription.appendChild(cartDetails);
                cartDescription.appendChild(cartbutton);
                cartItems.appendChild(cartDescription);
                cartItemContainer.appendChild(cartItems);

            }



            //code for cart item summmary


            var cartItemSummary = createNewEle("div", {
                class: "cart-item-summary"
            }, null)

            var summaryHeader = createNewEle("h1", null, null)

            var totalPrice = createNewEle("div", {
                class: "total-price"
            }, null)

            var totalPriceTitle = createNewEle("div", {
                class: "title"
            }, null)

            totalPriceTitle.textContent = "Total";

            var totalPriceValue = createNewEle("div", {
                class: "value"
            }, null)

            var priceTotal = 0;

            for(var p =0; p < tproducts.length; p++){
                var price = (parseInt(products[tproducts[p]]['quantity']) * 300)

                priceTotal += price;
            }

            totalPriceValue.textContent = "$" + priceTotal;

            totalPrice.appendChild(totalPriceTitle);
            totalPrice.appendChild(totalPriceValue);

            var deliveryDetails = createNewEle("div", {
                class: "delivery-details"
            }, null)

            var deliveryLocationTitle = createNewEle("p", {
                class: "title"
            }, {
                font_family: "poppinssemibold"
            })

            deliveryLocationTitle.textContent = "Delivery Location";

            var deliveryLocationValue = createNewEle("p", {
                class: "value"
            }, null)

            var locations = "";

            for(var l =0; l < tproducts.length; l++){
                locations += products[tproducts[l]]["location"] + ", " + products[tproducts[l]]["street"];
                break;
            }

            deliveryLocationValue.textContent = locations;

            var deliveryDateTitle = createNewEle("p", {
                class: "title"
            }, {
                font_family: "poppinssemibold"
            })

            deliveryDateTitle.textContent = "Deliery Date"; 

            var deliveryDateValue = createNewEle("p", {
                class: "value"
            }, null)

            deliveryDateValue.textContent = "July 08 2022 - July 16 2022";

            deliveryDetails.appendChild(deliveryLocationTitle)
            deliveryDetails.appendChild(deliveryLocationValue)
            deliveryDetails.appendChild(deliveryDateTitle)
            deliveryDetails.appendChild(deliveryDateValue)

            summaryHeader.textContent = "Order Summary";

            cartItemSummary.appendChild(summaryHeader);
            cartItemSummary.appendChild(totalPrice);
            cartItemSummary.appendChild(deliveryDetails);

            cartList.appendChild(cartItemContainer);
            cartList.appendChild(cartItemSummary);


            //code for the cart checkout
            var cartCheckOut = createNewEle("div", {
                class: "cart-checkout"
            }, null)

            var checkoutButton = createNewEle("button", {
                class: "checkout-btn"
            }, null)

            var checkoutlink = createNewEle("a", {
                href: "./checkout.html"
            }, null)

            checkoutlink.textContent = "Proceed To Checkout";

            

            var checkoutlinkicon = createNewEle("i", {
                class: "fas fa-shopping-bag"
            }, {
                margin_left: "10px"
            })

            checkoutlink.appendChild(checkoutlinkicon);

            checkoutButton.appendChild(checkoutlink)

            cartCheckOut.appendChild(checkoutButton);

            // cartList.textContent = "this is cart-list"
            // cartCheckOut.textContent = "this is cart-checkout"

            cartContainer.appendChild(cartList);
            cartContainer.appendChild(cartCheckOut);

        }else{

            var emptyCartDivAttr = {
                class: "empty-cart"
            }

            var emptyCartDivstyle = {
                width: "100%",
                height: "200px",
                display: "flex",
                flex_direction: "column",
                justify_content: "center",
                align_items: "center"
            }

            var newDiv = createNewEle("div", emptyCartDivAttr, emptyCartDivstyle);

            var newPara = createNewEle("p", null, {
                text_align: "center",
                font_size: "1.2rem",
                font_family: "poppinssemibold"
            })

            var hyperLink = createNewEle("a", {
                href:"./product-list.html"
            }, {
                text_decoration: "none",
                margin_top: "10px"
            })

            hyperLink.textContent = "View Products";

            newPara.textContent = "No Carted Product Available At The Moment";

            newDiv.appendChild(newPara);
            newDiv.appendChild(hyperLink);

            cartContainer.appendChild(newDiv);
            // console.log(newDiv);

            

        }


    }
}


function addToCart(){

    var productname = document.getElementById('product-name').value;
    var productid = document.getElementById('product-id').value;
    var productlocationstreet= document.getElementById('product-location-street').value;
    var productlocation= document.getElementById('product-location').value;
    var productquantity= document.getElementById('product-quantity').value;
    

    // products;
    // if(products.keys === "undefined"){
    //     products
    // }

    if(products[productid]){

        var regProductsquantity = parseInt(products[productid]['quantity']);
        var newProductsQuantity = parseInt(productquantity) + regProductsquantity;

        products[productid]['quantity'] = newProductsQuantity;

        
        var message = productquantity + " more " + productname[0].toUpperCase() + productname.substr(1) + " added";

        var messagetype = "success"

        showMessage(message, messagetype)



    }else{

        products[productid] = {
            name : productname,
            location : productlocation,
            street: productlocationstreet,
            quantity: parseInt(productquantity)
        };

        var message = productname[0].toUpperCase() + productname.substr(1) + " added to cart successfully";

        var messagetype = "success"

        showMessage(message, messagetype)
    }

    document.getElementById('product-quantity').value = 1;

    saveCart();
    return false;
}

function deleteCart(id){
    // console.log(id);

    if(products[id]){

        var productname = products[id]["name"][0].toUpperCase() + products[id]["name"].substr(1);

        delete products[id];

        setTimeout(refreshCart, 250)

        saveCart();

        // console.log(products);

        var message = productname + "Deleted Successfully";
        var messagetype = "success";
        showMessage(message, messagetype)


    }else{
        var message = "Error! Product Not Found!";
        var messagetype = "error";
        showMessage(message, messagetype)
    }
}

function subtractProdQ(id){

    if(products[id]){

        var cartQuantity = document.getElementById('cart-qty-' + id);
    
        var cartQuantyval = parseInt(cartQuantity.value);
    
        if(cartQuantyval >= products[id]['quantity']){
            deleteCart(id);
        }else{
            var regQuantity = parseInt(products[id]['quantity']);

            if(cartQuantyval < 0){

                var newQuantity = regQuantity + cartQuantyval;
            }else{

                var newQuantity = regQuantity - cartQuantyval;
            }

            products[id]['quantity'] = newQuantity;

            saveCart();
            refreshCart();

            var productname = products[id]['name']

            var message = cartQuantyval + " " + productname + " removed";
            var messagetype = "success";
            showMessage(message, messagetype)
            // console.log(newQuantity);
        }
    }else{

        
        var message = "Error! Product Not Found!";
        var messagetype = "error";
        showMessage(message, messagetype)

    }

    // console.log(cartQuantity);
}

function addProdQ(id){

    if(products[id]){

        var cartQuantity = document.getElementById('cart-qty-' + id);
    
        var cartQuantyval = parseInt(cartQuantity.value);

        if(typeof(cartQuantyval) == "number"){

            if(cartQuantyval > 0){

                var regQuantity = parseInt(products[id]["quantity"]);
                var newQuantity = regQuantity + cartQuantyval;
                var productname = products[id]["name"];

                products[id]['quantity'] = newQuantity;

                saveCart();
                refreshCart();

                var message = cartQuantyval + " " + productname + " Added";
                var messagetype = "success";
                showMessage(message, messagetype)
                // console.log(newQuantity);
    
            }else{
    
                var message = "Something Went Wrong!";
                var messagetype = "error";
                showMessage(message, messagetype)
    
            }
        }else{

            var message = "Non Alphabelt Detected!";
            var messagetype = "error";
            showMessage(message, messagetype)

        }


    }else{

        
        var message = "Error! Product Not Found!";
        var messagetype = "error";
        showMessage(message, messagetype)

    }

}

function showMessage(message, messagetype){
    var messagebox = document.querySelector(".alert-message");

    var messageText = document.querySelector(".alert-message>.message");

    if(messagetype == "success"){
        messagebox.setAttribute('id', 'success-message')
    }else{
        messagebox.setAttribute('id', 'error-message')
        
    }

    messageText.textContent = message;

    messagebox.style.display = "inline-flex";
    
    setTimeout(function(){
        messagebox.style.opacity = "1";

        setTimeout(function(){
            removeMessage();
        }, 5000)
        
    }, 200)
}

function removeMessage(){
    var messagebox = document.querySelector(".alert-message");
    
    var messageText = document.querySelector(".alert-message>.message");

    messagebox.style.opacity = "0";

    setTimeout(function(){
        messagebox.removeAttribute('id');
        messageText.textContent = "";
        messagebox.style.display = "none";
    }, 1000)
}

function saveCart(){
    var pro = JSON.stringify(products);
    localStorage.setItem("peachperfumeproducts", pro);

}

function openAccountSec(){
    
    let accountSection = document.querySelector('.account-section');
    let mobileLinkContainer = document.querySelector('.mobile-link');
    let bodyCont = document.querySelector('body');

    
    if(mobileLinkContainer.style.right === "0px"){
        closeMobileMenu();
    }
    
    bodyCont.style.overflow = "hidden";
    accountSection.style.display = "block";
    showModal();
}

function openMobileLink(){
    var header = document.querySelector('header');
    var mobileLinkContainer = document.querySelector('.mobile-link');
    var mobileLinks = document.querySelectorAll('.mobile-link ul li');

    if(mobileLinkContainer.style.right !== "0px"){

        mobileLinkContainer.style.right = "0px";
        header.style.background = "#bf6f2c";

        mobileLinkContainer.addEventListener('transitionend', slideLinks())

        function slideLinks(){
            for(var i = 0; i < mobileLinks.length; i++){

                mobileLinks[i].style.animationName = "slideLinks";
                mobileLinks[i].style.animationDelay = eval(i * 0.35) + "s";

            }

            var proptimeout = setTimeout(setProp, eval( (((mobileLinks.length - 1) * 0.35) + 1) * 1000))
            
            function setProp(){
                
                
                for(var i = 0; i < mobileLinks.length; i++){
                    mobileLinks[i].style.animationDelay = "0s";
                    mobileLinks[i].style.animationName = "unset";
                    mobileLinks[i].style.marginLeft = "0px";
                    
                }

                // mobileLinkContainer.removeEventListener('transitionend', slideLinks()) 


            }




        }
        
    }else{

        var newlinks = [];
        

        for(var i = 0; i < mobileLinks.length; i++){
            newlinks.push(mobileLinks[i]);

        }

        var reversedLink = newlinks.reverse();

        for(var i = 0; i < reversedLink.length; i++){
            reversedLink[i].style.animationName = "unSlideLinks";
            reversedLink[i].style.animationDelay = eval(i * 0.3) + "s";
            reversedLink[i].style.animationIterationCount = "forwards";
        }

        setTimeout(closeMenuContainer, eval( ((((reversedLink.length - 1) * 0.3) + 1) * 1000) - 800) )

        function closeMenuContainer(){

            if(window.scrollY >= 60){

                header.style.background = "rgb(210, 117, 59)";

            }else{

                header.style.background = "transparent";
            }
            if(window.matchMedia("(max-width: 500px)").matches){

                mobileLinkContainer.style.right = "-100%";
                
            }else{
                
                mobileLinkContainer.style.right = "-50%";

            }

            for(var i = 0; i < mobileLinks.length; i++){
                mobileLinks[i].style.animationDelay = "0s";
                mobileLinks[i].style.animationName = "unset";
                mobileLinks[i].style.marginLeft = "-100%";
                
            }

        }

    }
}

function closeMobileMenu(){

    
    var header = document.querySelector('header');
    var mobileLinkContainer = document.querySelector('.mobile-link');
    var mobileLinks = document.querySelectorAll('.mobile-link ul li');

    
        header.style.background = "transparent";
        mobileLinkContainer.style.transition = "none";

            if(window.matchMedia("(max-width: 500px)").matches){

                mobileLinkContainer.style.right = "-100%";
                
            }else{
                
                mobileLinkContainer.style.right = "-50%";

            }

            for(var i = 0; i < mobileLinks.length; i++){
                mobileLinks[i].style.animationDelay = "0s";
                mobileLinks[i].style.animationName = "unset";
                mobileLinks[i].style.marginLeft = "-100%";
                
            }

            function restoreTrans(){
                
                mobileLinkContainer.style.transition = "1s ease all";

            }

            setTimeout(restoreTrans, 500)

}

// console.log(window.innerHeight)

