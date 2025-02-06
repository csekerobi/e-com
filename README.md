# E-Commerce Application

This is a fully functional E-Commerce web application built using React and Redux for state management. The application provides various features for both customers and admins, allowing users to browse products, manage their shopping carts, and register or log in to their accounts.

---

## Key Features:

### 1. **User Registration and Login**

- Users can create a new account or log into an existing one.
- The registration form includes fields for username, password, email, phone number, and country.
- Users can log in using their registered credentials.

### 2. **Product Browsing**

- The homepage displays a slider with promotional offers, new arrivals, and bestsellers.
- Users can view different product categories and shop based on categories (e.g., Men, Women, Accessories).
- Each product has a detailed view with information like price, description, and available sizes/colors.

### 3. **Product Customization and Selection**

- **Size and Color Selection:** Users can choose a size (XS, M, L, XL) and color (e.g., Red, Blue, Green) for each product.
- Available color options are shown as color circles, and sizes are selectable via clickable text.

### 4. **Add to Cart Functionality**

- Users can add products to their cart directly from the product page or the product listing page.
- The cart icon in the navigation bar shows the number of items added to the cart.
- When a user adds an item to the cart, it is saved in the Redux store, and the cart count updates.

### 5. **Product Details**

- Each product has a “View Details” button that redirects users to the product’s individual page (SingleProduct).
- On the product page, users can see detailed product information and interact with customization options (size/color).

### 6. **Shopping Cart**

- Users can view the items they have added to the cart in the Cart page.
- The cart displays product details (name, price, quantity) and allows users to modify quantities or remove items.
- The cart updates dynamically using Redux state.

### 7. **Dynamic Content Display**

- The **New Arrivals** and **Bestsellers** sections display products based on data provided through JSON-like data arrays.
- Product images, titles, prices, and descriptions are dynamically rendered from the data files.

### 8. **Navigation**

- The navigation bar includes links to the homepage, product categories, register/login, and cart.
- Users can perform search queries through the search bar in the navbar.

### 9. **Responsive Design**

- The layout is responsive and adjusts based on screen size (mobile, tablet, and desktop).

### 10. **Footer with Useful Links and Social Media**

- The footer contains social media icons (Facebook, Instagram, Twitter, Pinterest) for external links.
- The footer also displays contact information and payment methods.

### 11. **Newsletter Subscription**

- Users can subscribe to newsletters via an email input field.
- The subscription functionality is visually linked with a send button for ease of interaction.

---

## Technologies Used:

- **Frontend:**

  - React.js
  - Redux (for state management)
  - React Router (for routing)
  - CSS for styling (with responsive design)

- **Icons:**
  - React Icons (for cart, social media icons, etc.)

---

## Future Enhancements:

### 1. **Search Functionality:**

- Implement a search bar to allow users to search for products by title, description, or category.
- Introduce sorting and filtering options based on price, category, and other product attributes like size or color.

### 2. **Cart Persistence:**

- Store cart contents in the browser's local storage so that users can retain their cart items even when they refresh the page.
- This improves the user experience by making sure users don’t lose their selections when navigating away or refreshing.

### 3. **Cart Item Customization:**

- Display selected color and size for clothing items in the cart.
- This will allow users to review their choices before proceeding to checkout, ensuring more transparency during the shopping process.

### 4. **Favorites (Wishlist):**

- Implement a wishlist functionality where users can save products they are interested in purchasing later.
- Add an "Add to Wishlist" option on each product card.
- Users can then access their wishlist from a dedicated page for easy tracking of products they want to buy later.
