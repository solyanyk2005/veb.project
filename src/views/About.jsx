import React from 'react';

export default function About() {
    return (
        <div className="about-container login-signup-form animated fadeInDown" style={styles.container}>
            <div className="form" style={styles.form}>
                <h1 className="title" style={styles.title}>About Us</h1>
                <p className="message" style={styles.message}>
                    We are committed to delivering high-quality products and services that empower our users.
                    Our team works tirelessly to ensure that our platform is reliable, user-friendly, and valuable to everyone who visits.
                </p>
                <p className="message" style={styles.message}>
                    Our mission is to make a positive impact, and we continuously strive to improve and innovate.
                    Thank you for choosing us as your trusted platform.
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Висота контейнера на всю висоту екрана
        backgroundColor: '#f4f4f9', // Світлий фон
        padding: '20px',
    },
    form: {
        backgroundColor: '#ffffff', // Білий фон для форми
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px', // Максимальна ширина форми
        width: '100%', // Формі надається повна ширина контейнера
        textAlign: 'center', // Центрування тексту
    },
    title: {
        fontSize: '2.5rem', // Великий розмір шрифту для заголовка
        color: '#333', // Темний колір шрифту
        marginBottom: '20px',
    },
    message: {
        fontSize: '1.2rem', // Середній розмір шрифту для тексту
        color: '#555', // Світліший колір шрифту
        lineHeight: '1.6', // Висота рядка для кращого читання
        marginBottom: '15px',
    },
};

// Медіа-запити для адаптивності
const mediaQueries = {
    '@media (max-width: 768px)': {
        form: {
            padding: '30px', // Зменшене заповнення для менших екранів
        },
        title: {
            fontSize: '2rem', // Менший шрифт для заголовка на менших екранах
        },
        message: {
            fontSize: '1rem', // Менший шрифт для тексту
        },
    },
    '@media (max-width: 480px)': {
        form: {
            padding: '20px', // Ще менше заповнення для мобільних екранів
        },
        title: {
            fontSize: '1.5rem', // Ще менший шрифт для заголовка
        },
        message: {
            fontSize: '0.9rem', // Найменший шрифт для тексту
        },
    },
};

// Додати медіа-запити до стилів
for (const [query, styles] of Object.entries(mediaQueries)) {
    for (const [key, value] of Object.entries(styles)) {
        if (styles[key]) {
            styles[key] = { ...styles[key], ...value };
        }
    }
}
