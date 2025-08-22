//Create you project here from scratch
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];
// Use moviesList array for displaing the Name in the dropdown menu
//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button

const selectMovie = document.getElementById('selectMovie');
const movieNameEl = document.getElementById('movieName');
const moviePriceEl = document.getElementById('moviePrice');
const totalPriceEl = document.getElementById('totalPrice');
const selectedSeatsHolder = document.getElementById('selectedSeatsHolder');
const numberOfSeatEl = document.getElementById('numberOfSeat');
const proceedBtn = document.getElementById('proceedBtn');
const cancelBtn = document.getElementById('cancelBtn');
const seats = document.querySelectorAll('#seatCont .seat:not(.occupied)');

// State
let selectedSeats = [];
let currentMovie = moviesList[0];

moviesList.forEach((movie, index) => {
  const option = document.createElement('option');
  option.value = index;
  option.textContent = `${movie.movieName} ($${movie.price})`;
  selectMovie.appendChild(option);
});

selectMovie.value = 0;
movieNameEl.textContent = currentMovie.movieName;
moviePriceEl.textContent = `$ ${currentMovie.price}`;

function updateUI() {
  selectedSeatsHolder.innerHTML = "";
  if (selectedSeats.length === 0) {
    const button = document.createElement('button');
    button.classList.add("noSelected");
    selectedSeatsHolder.appendChild(button);
  } else {
    selectedSeats.forEach((seatIndex) => {
      const button = document.createElement('button');
      button.textContent = `${seatIndex + 1}`;
      selectedSeatsHolder.appendChild(button);
    });
  }

  numberOfSeatEl.textContent = selectedSeats.length;
  totalPriceEl.textContent = `$ ${selectedSeats.length * currentMovie.price}`;
}

// Change movie
selectMovie.addEventListener('change', (e)=> {
  currentMovie = moviesList[e.target.value];
  movieNameEl.textContent = currentMovie.movieName;
  moviePriceEl.textContent = `$ ${currentMovie.price}`;
  updateUI();
})

// seat click
seats.forEach((seat, index) => {
  seat.addEventListener('click', ()=>{
    if (seat.classList.contains('occupied')) return;

    if (seat.classList.contains('selected')) {
      seat.classList.remove('selected');
      selectedSeats = selectedSeats.filter((i) => i !== index);
    } else {
      seat.classList.add('selected');
      selectedSeats.push(index);
    }
    updateUI();
  });
});

// Continue button
proceedBtn.addEventListener('click', ()=> {
  if (selectedSeats.length === 0) {
    alert('Oops no seat Selected');
  } else {
    alert('Yayy! Your Seats have been booked');
    seats.forEach((seat, index) => {
      if (selectedSeats.includes(index)) {
        seat.classList.remove('selected');
        seat.classList.add('occupied');
      }
    });
    selectedSeats = [];
    updateUI();
  }
});

// Cancel button
cancelBtn.addEventListener('click', ()=> {
  seats.forEach((seat, index) => {
    if (selectedSeats.includes(index)) {
      seat.classList.remove('selected');
    }
  });
  selectedSeats = [];
  updateUI();
});

updateUI();
