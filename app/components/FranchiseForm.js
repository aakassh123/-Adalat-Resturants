"use client";
import { useState } from 'react';
import styles from '../contact/contact.module.css';
import { waLink } from '../lib/siteConfig';

const FranchiseForm = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', city: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, city, message } = formData;

        // Values are URL-encoded by waLink, so &, #, %, emoji and line breaks no longer break the message.
        const text = `*Franchise Enquiry*\n\n*Name:* ${name.trim()}\n*Phone:* ${phone.trim()}\n*City:* ${city.trim()}\n*Message:* ${message.trim()}`;
        window.open(waLink(text), '_blank', 'noopener,noreferrer');
        setSent(true);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <input type="text" name="name" placeholder="Your Name" aria-label="Your Name" autoComplete="name"
                    className={styles.inputSimple} value={formData.name} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
                <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone Number" autoComplete="tel"
                    inputMode="tel" pattern="[0-9+\s\-]{10,15}" title="Enter a valid phone number"
                    className={styles.inputSimple} value={formData.phone} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
                <input type="text" name="city" placeholder="City / Location" aria-label="City / Location"
                    className={styles.inputSimple} value={formData.city} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
                <textarea name="message" rows="6" placeholder="Tell us about your plan" aria-label="Tell us about your plan"
                    className={styles.textAreaSimple} value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className={styles.submitBtn}>SUBMIT ENQUIRY</button>
                {sent && <p role="status" style={{ marginTop: 16, color: 'var(--color-accent-green)', fontWeight: 700 }}>
                    WhatsApp opened with your enquiry — please press send there to complete it.
                </p>}
            </div>
        </form>
    );
};

export default FranchiseForm;
