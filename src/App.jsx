import './index.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send data through EmailJS
        emailjs.send(
            'service_bfwz3mi', // Your Service ID
            'template_updvixl', // Your Template ID
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            'o3pwBLmdFS0f4v_Li' // Your Public Key (User ID)
        )
        .then((response) => {
            console.log('Email sent successfully:', response.status, response.text);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Clear form after successful submission
        })
        .catch((err) => {
            console.error('Failed to send email:', err);
            alert('Failed to send message. Please try again.');
        });
    };

    return (
        <>
            <main className="main-content">
                <section className="intro">
                    <h2>Reliable Tech Repair at Your Fingertips</h2>
                    <p>Your devices deserve the best care. HipoFix offers fast, affordable repairs for phones, laptops, and other electronics.</p>
                </section>

                <section id="services" className="services">
                    <h3>Our Services</h3>
                    <div className="service-card">
                        <h4>Phone Repair</h4>
                        <p>Screen replacements, battery upgrades, and more for all major brands.</p>
                    </div>
                    <div className="service-card">
                        <h4>Laptop Repair</h4>
                        <p>Hardware fixes, software troubleshooting, and performance enhancements.</p>
                    </div>
                    <div className="service-card">
                        <h4>Data Recovery</h4>
                        <p>Recover lost data from damaged devices with our specialized tools.</p>
                    </div>
                </section>

                <section id="about" className="about">
                    <h3>About HipoFix</h3>
                    <p>At HipoFix, we’re committed to bringing life back to your devices. Our certified technicians use high-quality parts and tools to ensure lasting results.</p>
                </section>

                <section id="contact" className="contact">
                    <h3>Contact Us</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button className="btn btn-block" type="submit">Send Message</button>
                    </form>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2024 HipoFix. All rights reserved.</p>
            </footer>
        </>
    );
}

export default App;
