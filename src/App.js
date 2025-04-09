import React from "react";

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Frictionless Living in Chiang Mai</h1>
        <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
          Arrive. Plug in. Feel at home — all in one smooth step.
        </p>
        <button style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Check Availability</button>
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '4rem' }}>
        <div style={{ width: '30%', textAlign: 'center' }}>
          <h3>Fast Wi-Fi</h3>
          <p>Reliable 300 Mbps fiber — no buffering, no stress.</p>
        </div>
        <div style={{ width: '30%', textAlign: 'center' }}>
          <h3>Work-Ready Desks</h3>
          <p>Spacious desks, office chairs & external monitors included.</p>
        </div>
        <div style={{ width: '30%', textAlign: 'center' }}>
          <h3>Simple Utilities</h3>
          <p>Free water & Wi-Fi. Flat-rate electricity. One-time cleaning fee.</p>
        </div>
      </section>
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>Our Apartments</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
          {[1, 2].map((id) => (
            <div key={id} style={{ width: '45%' }}>
              <img
                src={`https://via.placeholder.com/400x250?text=Apartment+${id}`}
                alt={`Apartment ${id}`}
                style={{ width: '100%', marginBottom: '1rem' }}
              />
              <h3>One-Room Apartment {id}</h3>
              <p>37 sqm. Fully furnished. Private bathroom. Kitchenette. Balcony.</p>
              <small>Located in the heart of Nimman, Chiang Mai.</small>
            </div>
          ))}
        </div>
      </section>
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Why Stay With Us?</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem' }}>
          <li>✔️ Move-in ready with no paperwork delays</li>
          <li>✔️ Hosted by locals — easy communication & flexibility</li>
          <li>✔️ No service or agency fees</li>
          <li>✔️ Fast responses, easy check-in, personal support</li>
        </ul>
      </section>
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>What Our Guests Say</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
          <div style={{ width: '45%' }}>
            <p>"EasyStayCM truly lives up to its name. Zero stress from booking to check-out."</p>
            <p><strong>– Lena, UX Designer from Berlin</strong></p>
          </div>
          <div style={{ width: '45%' }}>
            <p>"The apartment had everything I needed. Clean, quiet, and perfect for working remotely."</p>
            <p><strong>– David, Developer from Toronto</strong></p>
          </div>
        </div>
      </section>
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Get in Touch</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
          <input placeholder="Your name" style={{ padding: '0.5rem', width: '300px' }} />
          <input placeholder="Email address" type="email" style={{ padding: '0.5rem', width: '300px' }} />
          <textarea placeholder="Tell us your dates or ask a question..." style={{ padding: '0.5rem', width: '300px', height: '100px' }} />
          <button type="submit" style={{ padding: '0.75rem 1.5rem' }}>Send Message</button>
        </form>
      </section>
      <footer style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #ccc', fontSize: '0.8rem' }}>
        <p>© {new Date().getFullYear()} EasyStayCM — Frictionless Living in Chiang Mai</p>
      </footer>
    </div>
  );
}
