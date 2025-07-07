# MaroShop - Modern E-commerce Platform

A modern, responsive e-commerce web application built with Django, featuring a beautiful UI and comprehensive shopping functionality.

## 🚀 Features

### 🛍️ Shopping Experience
- **Modern Hero Section** with gradient carousel showcasing different categories
- **Tabbed Product Display** for easy browsing across categories (Mobiles, Top Wears, Bottom Wears, Laptops)
- **Interactive Product Cards** with hover effects and overlay details
- **Product Detail Pages** with comprehensive information
- **Shopping Cart** functionality with add/remove items
- **Secure Checkout** process

### 🎨 User Interface
- **Responsive Design** that works on all devices
- **Modern Gradient Backgrounds** and smooth animations
- **Bootstrap 5** for consistent styling
- **FontAwesome Icons** for visual elements
- **Custom CSS** for enhanced user experience
- **Professional Product Cards** with ratings and pricing

### 👤 User Management
- **User Registration & Login** system
- **Profile Management** with personal information
- **Order History** tracking
- **Password Management** (change password, reset password)
- **User Authentication** with Django's built-in system

### 💳 Payment & Security
- **Multiple Payment Options** (Credit Cards, UPI, Net Banking, Bank Transfer)
- **Secure Payment Processing**
- **Order Management** system
- **User Session Management**

### 📱 Categories
- **Electronics**: Mobiles, Laptops
- **Fashion**: Top Wears, Bottom Wears
- **Dynamic Product Loading** from database
- **Category-based Navigation**

## 🛠️ Technology Stack

### Backend
- **Django 4.x** - Python web framework
- **SQLite** - Database (default)
- **Django ORM** - Database abstraction
- **Django Authentication** - User management

### Frontend
- **HTML5** - Markup
- **CSS3** - Styling with custom properties
- **Bootstrap 5** - CSS framework
- **JavaScript** - Interactive functionality
- **FontAwesome** - Icons
- **Owl Carousel** - Product sliders

### Additional Libraries
- **Django Forms** - Form handling
- **Django Messages** - User feedback
- **Django Static Files** - Asset management

## 📋 Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- Virtual environment (recommended)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shoppinglyx-main
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies**
   ```bash
   pip install django
   pip install Pillow  # For image handling
   ```

5. **Apply database migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create a superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

7. **Run the development server**
   ```bash
   python manage.py runserver
   ```

8. **Access the application**
   Open your browser and navigate to `http://127.0.0.1:8000/`

## 📁 Project Structure

```
shoppinglyx-main/
├── app/
│   ├── migrations/
│   ├── static/
│   │   └── app/
│   │       ├── css/
│   │       ├── images/
│   │       └── js/
│   ├── templates/
│   │   └── app/
│   │       ├── base.html
│   │       ├── home.html
│   │       ├── productdetail.html
│   │       ├── login.html
│   │       └── ...
│   ├── admin.py
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── forms.py
├── media/
│   └── productimg/
├── shoppinglyx/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── db.sqlite3
├── manage.py
└── README.md
```

## 🎯 Key Models

### Product
- Title, Brand, Category
- Selling Price, Discounted Price
- Description
- Product Image
- Composition, Product Care

### Customer
- User Profile Information
- Name, Locality, City, State
- ZIP Code

### Cart
- User-specific cart items
- Product and quantity tracking

### OrderPlaced
- Order management
- Customer and product relationship
- Order status tracking

## 🔐 User Authentication

The application includes a complete authentication system:

- **Registration**: New users can create accounts
- **Login/Logout**: Secure session management
- **Profile Management**: Users can update personal information
- **Password Reset**: Email-based password recovery
- **Password Change**: Authenticated users can change passwords

## 🛒 Shopping Cart Features

- **Add to Cart**: Products can be added to cart
- **View Cart**: Display all cart items
- **Remove Items**: Delete products from cart
- **Quantity Management**: Update item quantities
- **Checkout Process**: Complete order placement

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes

## 🎨 UI Features

### Hero Section
- Gradient background carousel
- 4 different promotional slides
- Smooth transitions and animations
- Call-to-action buttons

### Product Display
- Tabbed interface for categories
- Hover effects on product cards
- Rating systems
- Price display (original and discounted)
- Image zoom on hover

### Modern Elements
- Gradient backgrounds
- Smooth animations
- Professional typography
- Consistent spacing and design

## 🚀 Deployment

### Local Development
The application is ready to run locally using Django's development server.

### Production Deployment
For production deployment, consider:
- Using PostgreSQL or MySQL instead of SQLite
- Configuring static file serving
- Setting up proper security settings
- Using a production WSGI server like Gunicorn

## 📊 Admin Interface

Access the Django admin interface at `/admin/` to:
- Manage products
- View orders
- Manage users
- Add/edit categories
- Upload product images

## 🔧 Configuration

### Settings
Key configuration options in `settings.py`:
- Database configuration
- Static files settings
- Media files settings
- Authentication settings

### Static Files
- CSS files in `app/static/app/css/`
- JavaScript files in `app/static/app/js/`
- Images in `app/static/app/images/`

### Media Files
- Product images stored in `media/productimg/`
- User-uploaded content handling

## 🐛 Troubleshooting

### Common Issues
1. **Static files not loading**: Run `python manage.py collectstatic`
2. **Database errors**: Ensure migrations are applied
3. **Import errors**: Check virtual environment activation
4. **Image upload issues**: Verify Pillow installation

### Debug Mode
Set `DEBUG = True` in settings.py for development debugging.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is for educational purposes. Please respect the original creator's work.

## 🔮 Future Enhancements

- Payment gateway integration
- Advanced search functionality
- Product reviews and ratings
- Wishlist feature
- Email notifications
- Social media integration
- Multi-language support
- Advanced admin dashboard

## 📞 Support

For support or questions:
- Check the Django documentation
- Review the code comments
- Test in a development environment first

---

**Built with ❤️ using Django and Bootstrap**

*Happy Shopping! 🛍️*
