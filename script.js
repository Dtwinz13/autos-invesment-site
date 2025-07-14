// Investment calculator logic
document.getElementById('calcForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const time = parseFloat(document.getElementById('time').value);

  if (amount <= 0 || rate <= 0 || time <= 0) {
    alert('Please enter positive values.');
    return;
  }

  const profit = amount * (rate / 100) * (time / 12);
  const total = amount + profit;

  document.getElementById('result').textContent = `Profit: ₦${profit.toFixed(2)}, Total Return: ₦${total.toFixed(2)}`;
});

// Data for gallery images
const galleryItems = [
  // Cars
  { type: 'cars', name: 'Lamborghini Aventador', img: 'assets/images/cars/lamborghini_aventador.jpg' },
  { type: 'cars', name: 'Ferrari F8 Tributo', img: 'assets/images/cars/ferrari_f8.jpg' },
  { type: 'cars', name: 'Porsche 911', img: 'assets/images/cars/porsche_911.jpg' },
  // Trucks
  { type: 'trucks', name: 'Ford F-150 Raptor', img: 'assets/images/trucks/ford_f150_raptor.jpg' },
  { type: 'trucks', name: 'Chevrolet Silverado', img: 'assets/images/trucks/chevrolet_silverado.jpg' },
  { type: 'trucks', name: 'RAM 1500', img: 'assets/images/trucks/ram_1500.jpg' },
  // Houses
  { type: 'houses', name: 'Modern Mansion', img: 'assets/images/houses/modern_mansion.jpg' },
  { type: 'houses', name: 'Luxury Duplex', img: 'assets/images/houses/luxury_duplex.jpg' },
  { type: 'houses', name: 'Beach House', img: 'assets/images/houses/beach_house.jpg' },
  // Add more items here...
];

// Populate gallery on page load
const galleryContainer = document.getElementById('gallery');

function createGalleryItem(item) {
  const div = document.createElement('div');
  div.classList.add('gallery-item');
  div.dataset.type = item.type;

  const img = document.createElement('img');
  img.src = item.img;
  img.alt = item.name;
  img.title = item.name;
  div.appendChild(img);

  const info = document.createElement('div');
  info.classList.add('info');
  info.textContent = item.name;
  div.appendChild(info);

  const contactBtn = document.createElement('a');
  contactBtn.href = `https://wa.me/2347019170750?text=Hello%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(item.name)}.%20How%20much%20is%20it%3F`;
  contactBtn.target = '_blank';
  contactBtn.classList.add('contact-btn');
  contactBtn.textContent = '💬 Contact Us';
  div.appendChild(contactBtn);

  return div;
}

function loadGalleryItems(filter = 'all') {
  galleryContainer.innerHTML = '';
  galleryItems.forEach(item => {
    if (filter === 'all' || item.type === filter) {
      const galleryItem = createGalleryItem(item);
      galleryContainer.appendChild(galleryItem);
    }
  });
}

// Filter buttons handler
function filterGallery(type) {
  loadGalleryItems(type);
}

// Load all on start
loadGalleryItems();