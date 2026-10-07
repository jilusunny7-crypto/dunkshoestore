# DUNK Shoe Store Website (@dunk.shoestore)

A high-converting, responsive e-commerce web application tailored specifically for **DUNK Shoe Store**, located in **Koduvally, Calicut, Kerala**.

Replicated directly from the modern visual style requested (floating pill navbar, dark forest green grid hero with floating showcase sneaker, "Our Popular Products" cards, and "Best Shoes Collection" promo cards) with direct WhatsApp 1-click ordering.

---

## 🌟 Key Features

1. **Elite Visual Hero**:
   - Floating white pill-shaped navbar with brand logo, quick navigation, search, wishlist badge, cart bag, and direct WhatsApp connect.
   - Deep forest green (`#0b261c`) technical grid pattern background with soft ambient glow.
   - Floating showcase sneaker with realistic bounce animation.
   - Direct CTA buttons: **Shop Now** (Amber/Gold pill) & **Browse Shoes** (Outline pill).
   - Trust highlights: *📍 Koduvally, Calicut*, *📬 All India Delivery*, *⭐ 4.9/5 Rating*.

2. **Categorized Footwear Catalog**:
   - Filter tabs: **All Shoes**, **Formals 👞**, **Sandals 👡**, **Women 👟**, and **Sneakers ⚡**.
   - Live real-time search filtering.

3. **Product Cards (matching "Our Popular Products" reference)**:
   - High-resolution shoe images with hover zoom.
   - Price in Indian Rupees (**₹**) with discount badges (e.g. 25% OFF).
   - Wishlist toggle heart button (persisted in local storage).
   - Star ratings and customer review counts.
   - **1-Click WhatsApp Order button**: Pre-populates the shoe name, size, and price directly into a WhatsApp chat with the store!
   - **Add to Cart** button with slide-over drawer integration.

4. **Quick View Modal**:
   - Interactive UK size selector (UK 6 to UK 11).
   - Color swatches & product details.
   - Direct WhatsApp order & Add to Cart actions.

5. **Slide-Over Shopping Cart & WhatsApp Checkout**:
   - Slide-in cart drawer showing selected shoes, chosen sizes, and quantity controls.
   - Instant subtotal calculation.
   - **Checkout via WhatsApp**: Formats the entire cart order with customer name and delivery address into a clean WhatsApp message and opens WhatsApp to send to the store (`+91 7907073737`).

6. **Promotional Banners ("Best Shoes Collection")**:
   - Sports / Basketball lifestyle banner.
   - **"SIGN UP & GET 25% OFF"** VIP Community banner with 1-click link to the official WhatsApp Group.
   - Casual / Formal shoe showcase card.

7. **Store Contact & Location**:
   - 📍 **Store Location**: Google Maps direct link (`maps.app.goo.gl/HjKkXckXKGd3jq7JA?g_st=ic`)
   - 💬 **WhatsApp Chat**: `+91 7907 073 737` (`wa.me/917907073737`)
   - 👥 **WhatsApp VIP Group**: `https://chat.whatsapp.com/leRRgxWOAYx1XZcXuUNh`
   - 📞 **Store Contact Number**: `+91 7034 677 538`
   - 📸 **Instagram**: `@dunk.shoestore` (`https://instagram.com/dunk.shoestore`)
   - 📬 **All India Delivery** guarantee badge

---

## 🚀 How to Open and Run

### Instant Browser Preview:
Simply double-click `index.html` or right-click and choose **Open with Google Chrome** (or Edge/Brave/Firefox).
No Node.js or Python is required!

### Free 1-Click Online Deployment:
- **Netlify**: Drag and drop the `dunk-shoe-store` folder onto [Netlify Drop](https://app.netlify.com/drop).
- **Vercel**: Run `vercel` or link via GitHub repository.
- **GitHub Pages**: Push this directory to a GitHub repository and turn on GitHub Pages in repository Settings.

---

## 📁 File Structure

```
dunk-shoe-store/
├── index.html              # Main webpage with hero, products, banners, contact
├── assets/
│   ├── css/
│   │   └── styles.css      # Grid background, floating sneaker animations, cards
│   ├── js/
│   │   └── app.js          # Products data, cart, wishlist, WhatsApp order engine
│   └── images/
│       ├── dunk-logo.jpg   # Official DUNK circular logo
│       └── ...             # Reference images
└── README.md
```

---

## ✏️ How to Add / Edit Products

Open `assets/js/app.js` and locate the `PRODUCTS` array. You can easily edit shoe names, prices, categories, sizes, and images:

```javascript
{
  id: "dunk-custom-01",
  name: "Your New Shoe Name",
  category: "sneakers", // "formals", "sandals", "women", or "sneakers"
  categoryLabel: "Sneakers",
  colorsCount: "02 COLORS",
  price: 1999,
  originalPrice: 2699,
  rating: 4.9,
  reviews: 50,
  badge: "New Arrival",
  image: "URL_TO_IMAGE_OR_LOCAL_FILE",
  description: "Description of your shoe.",
  sizes: [6, 7, 8, 9, 10, 11]
}
```
