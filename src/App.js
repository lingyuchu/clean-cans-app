import React, { useState } from 'react';
import { Star, Phone, Mail } from 'lucide-react';

export default function TrashCleaningApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    cans: 1
  });
  const [bookings, setBookings] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      id: 1,
      name: 'Standard Cleaning',
      price: '$25',
      description: 'Deep clean & sanitize single trash can',
      time: '15-20 min'
    },
    {
      id: 2,
      name: 'Multi-Can Bundle',
      price: '$40',
      description: 'Clean 2-3 cans together',
      time: '30-40 min'
    },
    {
      id: 3,
      name: 'Quarterly Service',
      price: '$80/month',
      description: 'Monthly recurring cleaning & maintenance',
      time: 'Flexible'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Matthew was professional and thorough. Our trash cans look brand new!',
      date: 'Nov 2025'
    },
    {
      name: 'John D.',
      rating: 5,
      text: 'Great service at a fair price. Will definitely call again.',
      date: 'Nov 2025'
    },
    {
      name: 'Linda K.',
      rating: 5,
      text: 'Reliable and dependable. Matthew showed up on time and did excellent work.',
      date: 'Nov 2025'
    }
  ];

  const gallery = [
    { before: 'Dirty plastic cans with grime', after: 'Clean, sanitized cans' },
    { before: 'Stained metal can', after: 'Sparkling metal can' },
    { before: 'Weathered cans', after: 'Fresh-looking cans' }
  ];

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (bookingForm.name && bookingForm.email && bookingForm.date && bookingForm.time) {
      setBookings([...bookings, { ...bookingForm, id: Date.now() }]);
      setBookingForm({
        name: '',
        email: '',
        phone: '',
        address: '',
        date: '',
        time: '',
        cans: 1
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">♻️ Clean Cans Co.</h1>
          <div className="space-x-4">
            <button onClick={() => setActiveTab('home')} className={`px-4 py-2 rounded ${activeTab === 'home' ? 'bg-green-600 text-white' : 'hover:bg-gray-100'}`}>Home</button>
            <button onClick={() => setActiveTab('services')} className={`px-4 py-2 rounded ${activeTab === 'services' ? 'bg-green-600 text-white' : 'hover:bg-gray-100'}`}>Services</button>
            <button onClick={() => setActiveTab('gallery')} className={`px-4 py-2 rounded ${activeTab === 'gallery' ? 'bg-green-600 text-white' : 'hover:bg-gray-100'}`}>Gallery</button>
            <button onClick={() => setActiveTab('book')} className={`px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700`}>Book Now</button>
          </div>
        </div>
      </nav>

      {/* Home Tab */}
      {activeTab === 'home' && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Your Trash Cans, Spotless</h2>
            <p className="text-xl text-gray-600 mb-8">Professional cleaning service for residential & commercial properties</p>
            <button onClick={() => setActiveTab('book')} className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-green-700">Schedule Your Cleaning Today</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold text-lg mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Deep clean, sanitized, and deodorized</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">Quick & Convenient</h3>
              <p className="text-gray-600">Book online, flexible scheduling</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-lg mb-2">Affordable</h3>
              <p className="text-gray-600">Fair pricing, no hidden fees</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Customers Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="border-l-4 border-green-600 pl-4">
                  <div className="flex mb-2">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 mb-3">"{t.text}"</p>
                  <p className="font-bold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Services Tab */}
      {activeTab === 'services' && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-green-700 mb-2">{service.name}</h3>
                <p className="text-3xl font-bold text-gray-800 mb-4">{service.price}</p>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-sm text-gray-500 mb-6">⏱️ {service.time}</p>
                <button onClick={() => setActiveTab('book')} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Book This Service</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Tab */}
      {activeTab === 'gallery' && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center mb-12">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="bg-red-100 p-6 flex flex-col justify-center text-center">
                    <p className="text-sm font-bold text-gray-600">BEFORE</p>
                    <p className="text-gray-700 mt-2">{item.before}</p>
                  </div>
                  <div className="bg-green-100 p-6 flex flex-col justify-center text-center">
                    <p className="text-sm font-bold text-green-600">AFTER</p>
                    <p className="text-gray-700 mt-2">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-12 text-sm">📸 Real photos coming soon as we complete more projects!</p>
        </div>
      )}

      {/* Booking Tab */}
      {activeTab === 'book' && (
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center mb-8">Book Your Service</h2>
          
          {submitted && (
            <div className="mb-6 bg-green-100 border-l-4 border-green-600 p-4 rounded">
              <p className="text-green-800 font-bold">✓ Booking submitted! We'll confirm within 24 hours.</p>
            </div>
          )}

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label className="block font-bold text-gray-800 mb-2">Your Name</label>
              <input type="text" name="name" value={bookingForm.name} onChange={handleBookingChange} className="w-full border border-gray-300 rounded px-4 py-2" placeholder="John Doe" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block font-bold text-gray-800 mb-2">Email</label>
                <input type="email" name="email" value={bookingForm.email} onChange={handleBookingChange} className="w-full border border-gray-300 rounded px-4 py-2" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block font-bold text-gray-800 mb-2">Phone</label>
                <input type="tel" name="phone" value={bookingForm.phone} onChange={handleBookingChange} className="w-full border border-gray-300 rounded px-4 py-2" placeholder="(555) 123-4567" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-bold text-gray-800 mb-2">Address</label>
              <input type="text" name="address" value={bookingForm.address} onChange={handleBookingChange} className="w-full border border-gray-300 rounded px-4 py-2" placeholder="123 Main Street" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block font-bold text-gray-800 mb-2">Date</label>
                <input type="date" name="date" value={bookingForm.date} onChange={handleBookingChange} className="w-full border border-gray-300 rounded px-4 py-2" />
              </div>
              <div>
                <label className="block font-bold text-gray-800 mb-2">Time</label>
                <input type="time" name="time" value={bookingForm.time} onChange={handleBookingChange} className="w-full border border-gray-300 rounded px-4 py-2" />
              </div>
              <div>
                <label className="block font-bold text-gray-800 mb-2">Number of Cans</label>
                <select name="cans" value={bookingForm.cans} onChange={handleBookingChange} className="w-full border border-gray-300 rounded px-4 py-2">
                  <option value="1">1 Can</option>
                  <option value="2">2 Cans</option>
                  <option value="3">3+ Cans</option>
                </select>
              </div>
            </div>

            <button onClick={handleSubmit} className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 text-lg">Confirm Booking</button>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mt-8 border-l-4 border-blue-600">
            <h3 className="font-bold text-lg mb-2">📞 Quick Contact</h3>
            <p className="text-gray-700 mb-2"><Mail className="inline mr-2" size={18} />Email: matthew@cleancansco.com</p>
            <p className="text-gray-700"><Phone className="inline mr-2" size={18} />Phone: (555) 123-4567</p>
          </div>
        </div>
      )}

      {/* Bookings List */}
      {bookings.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-100">
          <h3 className="text-2xl font-bold mb-4">Confirmed Bookings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bookings.map(booking => (
              <div key={booking.id} className="bg-white p-4 rounded shadow">
                <p><strong>{booking.name}</strong> • {booking.date} at {booking.time}</p>
                <p className="text-sm text-gray-600">{booking.address}</p>
                <p className="text-sm text-green-600 mt-1">{booking.cans} Can(s)</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}