// Shared placeholder data. Replace with live API calls once the backend
// endpoints are ready. Keeping this in one file avoids merge conflicts
// on component files when both tracks need sample content.

export const deities = [
  { id: 'shiva', name: 'Shiva', temples: 412, image: '/images/shiva-deity.png' },
  { id: 'vishnu', name: 'Vishnu', temples: 356, image: '/images/vishnu-deity.png' },
  { id: 'murugan', name: 'Murugan', temples: 198, image: '/images/murugan-deity.png' },
  { id: 'devi', name: 'Devi', temples: 271, image: '/images/devi-deity.png' },
  { id: 'ganesha', name: 'Ganesha', temples: 240, image: '/images/ganesha-deity.png' },
]

export const temples = [
  {
    id: 'meenakshi-amman',
    name: 'Meenakshi Amman Temple',
    deity: 'Devi',
    city: 'Madurai, Tamil Nadu',
    distanceKm: 462,
    rating: 4.8,
    image: '/images/temple-gopuram-generic.png',
  },
  {
    id: 'thillai-nataraja',
    name: 'Thillai Nataraja Temple',
    deity: 'Shiva',
    city: 'Chidambaram, Tamil Nadu',
    distanceKm: 268,
    rating: 4.7,
    image: '/images/thillai-nataraja-temple.png',
  },
  {
    id: 'vaitheeswaran-koil',
    name: 'Vaitheeswaran Koil',
    deity: 'Shiva',
    city: 'Sirkazhi, Tamil Nadu',
    distanceKm: 290,
    rating: 4.6,
    image: null,
  },
  {
    id: 'palani-murugan',
    name: 'Arulmigu Dhandayuthapani Swamy Temple',
    deity: 'Murugan',
    city: 'Palani, Tamil Nadu',
    distanceKm: 118,
    rating: 4.9,
    image: '/images/palani-murugan-temple.png',
  },
]

export const stays = [
  { id: 'stay-1', name: 'Yatri Nivas — Madurai', temple: 'Meenakshi Amman Temple', pricePerNight: 1200, rooms: 6 },
  { id: 'stay-2', name: 'Devasthanam Guest House — Chidambaram', temple: 'Thillai Nataraja Temple', pricePerNight: 900, rooms: 3 },
  { id: 'stay-3', name: 'Hillside Cottages — Palani', temple: 'Arulmigu Dhandayuthapani Swamy Temple', pricePerNight: 1500, rooms: 8 },
]

export const shopProducts = [
  { id: 'prod-1', name: 'Panchaloha Nandi Idol', price: 1899, category: 'Idols' },
  { id: 'prod-2', name: 'Temple Prasadam Box (Assorted)', price: 449, category: 'Prasadam' },
  { id: 'prod-3', name: 'Silk Pattu Vetti — Gold Border', price: 2299, category: 'Vastra' },
  { id: 'prod-4', name: 'Rudraksha Mala, 108 Beads', price: 799, category: 'Pooja Items' },
]

export const tourPackages = [
  {
    id: 'pkg-1',
    name: 'Pancha Sabha Nataraja Trail',
    days: 4,
    price: 8999,
    highlight: 'Five sacred Shiva dance halls across Tamil Nadu',
  },
  {
    id: 'pkg-2',
    name: 'Murugan Arupadai Veedu',
    days: 7,
    price: 16499,
    highlight: 'The six abodes of Lord Murugan, coast to hill',
  },
  {
    id: 'pkg-3',
    name: 'Madurai Weekend Darshan',
    days: 2,
    price: 4499,
    highlight: 'Meenakshi Amman Temple + Thirumalai Nayakkar Palace',
  },
]

export const blogPosts = [
  {
    id: 'blog-1',
    title: 'What to Wear for Darshan: A Regional Guide',
    excerpt: 'Dress codes vary temple to temple — here is what actually gets you past the entrance.',
    readMinutes: 6,
  },
  {
    id: 'blog-2',
    title: 'Best Time of Year to Visit the Arupadai Veedu',
    excerpt: 'Avoiding the Thaipusam crowds without missing the festival entirely.',
    readMinutes: 8,
  },
  {
    id: 'blog-3',
    title: 'Inside a Temple Kitchen: How Prasadam Is Made',
    excerpt: 'A morning in the annadanam hall of a 900-year-old temple.',
    readMinutes: 5,
  },
]
