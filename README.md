# SeatBookingApp 🎬

A modern, interactive seat booking application for movie theaters built with vanilla JavaScript, HTML, and CSS. Features real-time seat selection, dynamic pricing, and an intuitive user interface.

## 🚀 Features

- **Dynamic Movie Selection**: Choose from multiple movies with different pricing
- **Interactive Seat Map**: Visual seat selection with real-time availability
- **Smart Pricing**: Automatic total calculation based on selected seats and movie
- **Seat Status Management**: Occupied, selected, and available seat states
- **Booking Confirmation**: Complete booking flow with confirmation alerts
- **Responsive Design**: Works seamlessly across different screen sizes

## 🛠️ Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox/grid layouts
- **Vanilla JavaScript**: ES6+ features for interactive functionality
- **No Dependencies**: Pure web technologies, no frameworks required

## 📋 Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs locally in browser

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/anjan-in/seatBookingApp.git
```

2. Navigate to the project directory:

```bash
cd seatBookingApp
```

3. Open `index.html` in your web browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

## 🎯 Usage

1. **Select a Movie**: Choose from the dropdown menu to see different pricing
2. **Pick Your Seats**: Click on available seats (gray) to select them (green)
3. **Review Selection**: See selected seats and total price update in real-time
4. **Book or Cancel**: Confirm your booking or cancel to start over

## 🏗️ Project Structure

```
cinema-seat-booking-app/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── LICENSE             # MIT License
└── assets/             # Images and other assets (optional)
```

## 🎨 Core Functionality

### Movie Management

- Dynamic dropdown population from movie array
- Real-time price updates based on selection
- Default movie initialization

### Seat Management

- Visual seat map with different states
- Click-to-select/deselect functionality
- Occupied seat protection
- Selected seat counter

### Booking Flow

- Validation for empty selections
- Booking confirmation system
- Automatic seat status updates
- Price reset functionality

## 📱 Application Flow

### Implementation Requirements

The JavaScript implementation includes the following key features:

1. **Movie Selection Dropdown**

   - Populates from MovieList array
   - Updates movie name and price dynamically
   - Default selection: "Flash" movie at $7

2. **Seat Selection System**

   - Interactive seat clicking (excludes occupied seats)
   - Visual feedback with "selected" class toggle
   - Real-time price calculation based on selections
   - Selected seat counter display

3. **Booking Actions**

   - **Continue Button**: Validates selection, confirms booking, converts selected to occupied
   - **Cancel Button**: Clears all selections, resets price to $0

4. **Price Management**
   - Dynamic total price updates
   - Seat-based pricing multiplication
   - Reset functionality for booking completion

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@anjan-in](https://github.com/anjan-in)
- LinkedIn: [ANJAN SEN](https://www.linkedin.com/in/anjansen-tech/)

## 🙏 Acknowledgments

- Inspired by modern movie booking systems.
- Built as a learning project for vanilla JavaScript.
- Thanks to the open-source community for inspiration.

<!-- ## 📸 Screenshots -->

<!-- *Add screenshots of your application here* -->

## 🔮 Future Enhancements

- [ ] User authentication system
- [ ] Payment integration
- [ ] Seat reservation timer
- [ ] Mobile app version
- [ ] Database integration
- [ ] Email confirmations
- [ ] Multiple theater support

---

⭐ **Star this repo if you found it helpful!** ⭐
