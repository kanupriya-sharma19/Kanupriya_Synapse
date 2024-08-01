const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

function generatePassword(length, includeNumbers, includeSpecialChars, includeUppercase) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let allChars = lowercaseChars;
    if (includeNumbers) allChars += numbers;
    if (includeSpecialChars) allChars += specialChars;
    if (includeUppercase) allChars += uppercaseChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}

app.get('/generate', (req, res) => {
    const length = parseInt(req.query.length) ;
    const includeNumbers = req.query.includeNumbers==='true' ;
    const includeSpecialChars = req.query.includeSpecialChars==='true';
    const includeUppercase = req.query.includeUppercase ==='true';

    if (length < 1) {
        return res.status(400).json({ error: 'Password length must be more than 1' , statusCode: 400,},
           
        );
    }

    const password = generatePassword(length, includeNumbers, includeSpecialChars, includeUppercase);
    res.status(200).json({
        password,
        length,
        includeNumbers,
        includeSpecialChars,
        includeUppercase,
        statusCode: 200,
    });
});

