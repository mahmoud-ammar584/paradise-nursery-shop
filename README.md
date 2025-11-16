# Paradise Nursery Shopping Platform

A complete e-commerce shopping website for houseplants built with React and Redux. This project allows users to browse plants, add them to cart, and manage their shopping experience.

---

## Project Overview

Paradise Nursery is a modern plant shopping website where customers can explore various houseplants, add them to their shopping cart, adjust quantities, and proceed to checkout. The site features a beautiful landing page, organized product categories, and a complete cart management system.

---

## Features

### Landing Page
- Eye-catching hero section with full-screen background image
- Company introduction and mission statement
- Call-to-action button that takes users to the product catalog
- Smooth animations and modern design

### Product Catalog
- **6 Different Plants** across 3 categories:
  - Indoor Plants (Monstera, Snake Plant)
  - Succulents (Aloe Vera, Jade Plant)
  - Flowering Plants (Peace Lily, Orchid)
- Each product displays:
  - High-quality image
  - Plant name
  - Price
  - Add to Cart button
- Products organized by category for easy browsing
- Visual feedback when items are added to cart (button becomes disabled and changes text)

### Navigation Header
- Persistent header across all pages
- Company logo/name
- Shopping cart icon with live item counter
- Easy navigation between pages
- Sticky header that stays visible while scrolling

### Shopping Cart
- Complete cart management system
- Displays all added items with:
  - Product image
  - Product name  
  - Unit price
  - Quantity controls
  - Subtotal per item
- **Quantity Management:**
  - Increase button (+) to add more of the same item
  - Decrease button (-) to reduce quantity
  - Minimum quantity of 1 per item
- **Remove Items:** Delete button to remove items completely from cart
- **Cart Summary:**
  - Total number of items
  - Total cost calculation
  - Order summary section
- **Cart Actions:**
  - Checkout button (shows "Coming Soon" message)
  - Continue Shopping button to return to products
- Empty cart state with message when no items

### State Management
- Redux Toolkit for efficient state management
- Cart state persists across page navigation
- Real-time updates when items are added/removed
- Automatic total calculations

### Design & UX
- Fully responsive design (works on mobile, tablet, desktop)
- Professional color scheme with green nature theme
- Smooth transitions and hover effects
- Custom fonts (Playfair Display for headings, Inter for body text)
- Accessible buttons and navigation
- Loading animations
- Custom scrollbar styling

---

## Technologies Used

- **React** (v18.2.0) - Frontend library
- **Redux Toolkit** (@reduxjs/toolkit) - State management
- **React Redux** - React bindings for Redux
- **React Router DOM** (v6) - Client-side routing
- **CSS3** - Styling with modern features
- **Google Fonts** - Custom typography

---

## Installation & Setup

### Prerequisites
Make sure you have Node.js installed on your computer (version 14 or higher).

### Step 1: Create React App
```bash
npx create-react-app plant-shop
cd plant-shop
```

### Step 2: Install Dependencies
```bash
npm install react-redux @reduxjs/toolkit react-router-dom
```

### Step 3: Add Project Files
Copy all the provided files into their respective folders according to the project structure.

### Step 4: Run the Application
```bash
npm start
```

The app will open automatically in your browser at `http://localhost:3000`

---

## Project Structure

```
plant-shop/
│
├── public/
│   └── index.html                 # Main HTML file
│
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Navigation header component
│   │   ├── LandingPage.jsx        # Home page component
│   │   ├── ProductListing.jsx     # Products page component
│   │   └── ShoppingCart.jsx       # Cart page component
│   │
│   ├── redux/
│   │   ├── store.js               # Redux store configuration
│   │   └── cartSlice.js           # Cart state and actions
│   │
│   ├── data/
│   │   └── plants.js              # Plant products data
│   │
│   ├── App.jsx                    # Main app component with routing
│   ├── App.css                    # All styling
│   └── index.js                   # App entry point
│
├── package.json                   # Project dependencies
└── README.md                      # This file
```

---

## How It Works

### Adding Products to Cart
1. Browse the product catalog on the Products page
2. Click "Add to Cart" button on any plant
3. Button changes to "Added to Cart" and becomes disabled
4. Cart icon in header updates with total item count
5. Item is stored in Redux state

### Managing Cart Items
1. Navigate to cart by clicking the cart icon
2. See all your selected items with images and details
3. Use + button to increase quantity
4. Use - button to decrease quantity (minimum 1)
5. Click "Remove" to delete item completely
6. All totals update automatically in real-time

### Checkout Process
- Click "Proceed to Checkout" button
- Currently shows "Coming Soon" alert
- Can be integrated with payment gateway in future

---

## Redux State Management

### Store Structure
```javascript
{
  cart: {
    items: [],           // Array of cart items
    totalQuantity: 0,    // Total number of items
    totalCost: 0         // Total price
  }
}
```

### Available Actions
- `addToCart(plant)` - Add new item to cart
- `increaseQuantity(id)` - Increase item quantity by 1
- `decreaseQuantity(id)` - Decrease item quantity by 1
- `removeFromCart(id)` - Remove item from cart

---

## Available Scripts

### `npm start`
Runs the app in development mode at http://localhost:3000

### `npm build`
Creates an optimized production build in the `build` folder

### `npm test`
Launches the test runner

---

## Future Enhancements

- User authentication and login system
- Save cart to database/localStorage
- Payment gateway integration (Stripe/PayPal)
- Product search functionality
- Filter products by price, category
- Product details page with descriptions
- User reviews and ratings
- Wishlist feature
- Order history for logged-in users
- Email notifications for orders
- Admin panel for managing products

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: 480px - 767px
- Small Mobile: Below 480px

---

## Color Palette

- Primary Green: `#2d5016`
- Accent Green: `#4a7c2f`
- Light Green: `#6b9f4d`
- Sage Green: `#a8c69f`
- Cream: `#faf8f3`
- White: `#ffffff`
- Charcoal: `#2c2c2c`
- Soft Gray: `#6b6b6b`
- Gold Accent: `#d4af37`

---

## Typography

- **Headings:** Playfair Display (Serif)
- **Body Text:** Inter (Sans-serif)
- **Fallbacks:** System fonts for performance

---

## Performance Optimizations

- Optimized images from Unsplash CDN
- CSS animations using GPU acceleration
- React.StrictMode for catching issues
- Efficient Redux state updates
- Lazy loading ready for future features

---

## Known Limitations

- Checkout is not yet implemented (shows alert)
- No backend/database connection
- Cart resets on page refresh
- No user accounts or authentication
- No payment processing

---

## Credits

- Plant images from Unsplash
- Icons: Emoji characters
- Fonts: Google Fonts
- Built with React and Redux

---

## License

This project is open source and available for educational purposes.

---

## Contact & Support

For questions or issues, please open an issue in the GitHub repository.

---

**Built with ❤️ using React and Redux**

Happy Shopping! 🌿🛒