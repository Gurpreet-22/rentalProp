import cozyRoom from '../images/cozyRoom.jpg';
import spaciousHouse from '../images/spaciousHouse.jpg';
import loftApartment from '../images/loftApartment.jpeg';
import cottage from '../images/cottage.jpg';
import penthouse from '../images/penthouse.jpg';
export const mockData = [
  {
    id: 1,
    title: 'Cozy Apartment in Downtown',
    description: 'A beautiful cozy apartment located in the heart of the city.',
    price: 120,
    image: cozyRoom, // Adjust the path according to your `public/assets` directory
    location: 'New York',
    bedrooms: 2,
    amenities: ['Wi-Fi', 'Air Conditioning', 'Gym']
  },
  {
    id: 2,
    title: 'Spacious House with Garden',
    description: 'A spacious house with a lovely garden, perfect for families.',
    price: 250,
    image: spaciousHouse, // Adjust the path according to your `public/assets` directory
    location: 'Los Angeles',
    bedrooms: 4,
    amenities: ['Wi-Fi', 'Garden', 'Pool']
  },
  {
    id: 3,
    title: 'Modern Loft with City View',
    description: 'A stylish loft with breathtaking city views and modern amenities.',
    price: 180,
    image: loftApartment, // Adjust the path according to your `public/assets` directory
    location: 'San Francisco',
    bedrooms: 1,
    amenities: ['Wi-Fi', 'Balcony', 'Hot Tub']
  },
  {
    id: 4,
    title: 'Charming Cottage by the Beach',
    description: 'A charming cottage just a few steps away from the beach.',
    price: 150,
    image:cottage, // Adjust the path according to your `public/assets` directory
    location: 'Miami',
    bedrooms: 3,
    amenities: ['Wi-Fi', 'Beach Access', 'Barbecue']
  },
  {
    id: 5,
    title: 'Luxury Penthouse with Pool',
    description: 'An extravagant penthouse featuring a private pool and high-end finishes.',
    price: 500,
    image: penthouse, // Adjust the path according to your `public/assets` directory
    location: 'Las Vegas',
    bedrooms: 5,
    amenities: ['Wi-Fi', 'Pool', 'Spa']
  }
];
