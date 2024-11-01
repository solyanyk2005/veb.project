import React from 'react';

export default function Help() {
    return (
        <div className="help-container login-signup-form animated fadeInDown" style={styles.container}>
            <div className="form" style={styles.form}>
                <h1 className="title" style={styles.title}>Help & Support</h1>
                <p className="message" style={styles.message}>
                    If you have any questions or need assistance, please refer to the following resources:
                </p>
                <h2 className="subtitle" style={styles.subtitle}>Frequently Asked Questions</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>How do I create an account?</strong>
                        <p>Click on the "Register" link on the homepage and fill out the registration form.</p>
                    </li>
                    <li style={styles.listItem}>
                        <strong>How do I reset my password?</strong>
                        <p>Click on the "Forgot Password?" link on the login page to receive a password reset email.</p>
                    </li>
                    <li style={styles.listItem}>
                        <strong>Who can I contact for further support?</strong>
                        <p>You can reach our support team at support@example.com.</p>
                    </li>
                </ul>
                <h2 className="subtitle" style={styles.subtitle}>Contact Us</h2>
                <p className="message" style={styles.message}>
                    For any additional questions or concerns, feel free to reach out to us via email at <a href="mailto:support@example.com">support@example.com</a>.
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
        minHeight: '100vh', // Висота контейнера на всю висоту екрана
        backgroundColor: '#f4f4f9', // Світлий фон
        padding: '20px',
    },
    form: {
        backgroundColor: '#ffffff', // Білий фон для форми
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px', // Збільшена максимальна ширина форми
        width: '100%', // Формі надається повна ширина контейнера
        textAlign: 'left', // Вирівнювання тексту вліво
    },
    title: {
        fontSize: '2.5rem', // Великий розмір шрифту для заголовка
        color: '#333', // Темний колір шрифту
        marginBottom: '20px',
    },
    subtitle: {
        fontSize: '1.8rem', // Розмір шрифту для підзаголовка
        color: '#444', // Темно-сірий колір
        margin: '20px 0 10px', // Відступи для підзаголовка
    },
    message: {
        fontSize: '1.1rem', // Середній розмір шрифту для тексту
        color: '#555', // Світліший колір шрифту
        lineHeight: '1.6', // Висота рядка для кращого читання
        marginBottom: '15px',
    },
    list: {
        listStyleType: 'none',
        paddingLeft: '0',
        marginBottom: '20px', // Відступи після списку
    },
    listItem: {
        marginBottom: '1rem',
        backgroundColor: '#f9f9f9',
        padding: '15px',
        borderRadius: '4px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Легка тінь для карток списку
    },
};

// CSS медіа-запити для адаптивності
const mediaQueries = {
    '@media (max-width: 768px)': {
        form: {
            padding: '20px', // Зменшене заповнення для менших екранів
        },
        title: {
            fontSize: '2rem', // Менший шрифт для заголовка на менших екранах
        },
        subtitle: {
            fontSize: '1.5rem', // Менший шрифт для підзаголовка
        },
        message: {
            fontSize: '1rem', // Менший шрифт для тексту
        },
    },
    '@media (max-width: 480px)': {
        title: {
            fontSize: '1.5rem', // Ще менший шрифт для заголовка
        },
        subtitle: {
            fontSize: '1.2rem', // Ще менший шрифт для підзаголовка
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
