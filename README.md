# Getting Started with Create React App

# React Shopping Cart

## What you’ll learn

- Design Shopping Cart Using HTML and CSS
- Implement React Components For Product List, Filter, Cart
- Managing Component State using Redux, React-Redux and - Redux-Thunk
- Creating Animations Using React-Reveal and Add Routes using React-Routers
- Build Backend using Node, Express, MongoDB and Mongoose
- Publish Project on the Heroku and MongoDB Atlas

## Are there any course requirements or prerequisites?

- Basic HTML and CSS
- Basic JavaScript

## Who this course is for:

- Javascript developers
- Web Developers
- Freelancers
- Programming Students

## Table Of Content

# Step 1: Create React App

# Step 2: Add Feature branch

# Step 3: Starting Task Management

1. React

   1. Products Component
      1. Create data.json {products:[{_id, title, ...}]
      2. Update App.js to import data.json
      3. div.content {flex, wrap}
      4. div.main {flex: 3 60rem}
      5. div.sidebar {flex: 1 20rem;}
      6. Create components/Products.js component
      7. Add it to div.main in App.js and set products props
      8. ul.products {flex,center, center,warp, p:0,m:0, style:none}
      9. this.props.products.map(p => li.key={p.\_id} {flex, p:1, m:1, none,h:47}
      10. div.product { flex, column, space-between, h:100%}
      11. a href="#" > img {max-width, max-height:37} + p {p.title}
      12. div.product-price > div.product.price + button.button.primary Add to cart
      13. product-price {flex, space-between, center}
      14. div {p.price} flex: 1; align: center; size: 2rem
      15. button.button.primary Add To Cart
   2. Filter Component
      1. Create components/Filter.js
      2. Add it above Products component in App.js
      3. Update Filter.js render
      4. div.filter {flex, wrap, p,m:1rem, border-bottom: .1rem}
      5. filter-result {this.props.filteredProducts.length}
      6. filter-sort {flex:1}
      7. label Order select value=this.props.sort
      8. onChange= this.props.sortProducts(e.t.value)
      9. option lowestprice Lowest, ...
      10. filter-size {flex:1}
      11. label Filter select value=this.props.size
      12. onChange= this.props.filterProducts(e.t.value)
      13. option "" ALL, XS, S, M, L, XL, XXL
      14. App.js
      15. Add Filter Component
   3. Cart Component
      1. Set Active Task Management Spreadsheet
      2. Create branch cart-component
      3. Product.js
      4. Handle "Add To Cart" to this.props.addToCart(product)
      5. App.js
      6. Add cartItems to state as []
      7. Create addToCart(product)
      8. Slice, Check product existance, add to cartitems
      9. Cart.js
      10. Define cartItems from this.props
      11. Check cartItems.length and show message
      12. List cartItems {cartItems.length > 0 && (}
      13. index.css
      14. Style cart, cart-header, cart-items (img, li),
      15. Publish changes
      16. Pull request, merge, change to master
      17. Task Management Spreadsheet set it done
   4. Checkout Form
      1. Set Active Task Management Spreadsheet
      2. Create branch checkout-form
      3. Cart.js
      4. Make cart items persistent
      5. Use LocalStorage on App constructor to load cart items (JSON.parse)
      6. Use LocalStorage on addToCart to save cart items (JSON.stringify)
      7. Handle Click on Proceed
      8. Update showCheckout state to true on click
      9. Conditional rendering Checkout Form
      10. Get Email, Name and Address required input
      11. Define handleInput function
      12. Add Checkout Button
      13. Handle onSubmit Form Event by this.createOrder
      14. Create order object and pass to parent to handle it
      15. Commit and Publish changes
      16. Pull request, merge, change to master
      17. Task Management Spreadsheet set it done
   5. Add Modal and Animation
      1. Set Active Task Management Spreadsheet
      2. Create branch animation-modal
      3. Show Animation
      4. Install react-reveal
      5. Create fade effect from bottom for products
      6. Create fade left for add to cart
      7. Create fade right for show checkout form
      8. Open Modal by click on product image
      9. Install react-modal
      10. Products.js
      11. Import Modal
      12. Set state for product to null
      13. Define openModal and closeModal
      14. Show Modal if product exist
      15. Create Modal
      16. Create zoom effect for modal
      17. index.css
      18. Style Product Details
      19. Commit and Publish changes
      20. Pull request, merge, change to master
      21. Task Management Spreadsheet set it done
