import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    console.log(data);
    let numbers = [];
    let alphabets = [];
    let lowercase = [];

    data.forEach((item) => {
        if (!isNaN(item) && item.trim() !== "") {
            numbers.push(item);
        } else {
            if (/^[a-zA-Z]$/.test(item)) {
                alphabets.push(item);
                if (/^[a-z]$/.test(item)) {
                    lowercase.push(item);
                }
            }
        }
    });

    const highestLowercaseAlphabet = lowercase.length > 0 
        ? [lowercase.sort().pop()] 
        : [];

    res.json({
        is_success: true,
        user_id: "udaysaimanojbirudukota_15062004",
        email: "udaysai.21bce9371@vitapstudent.ac.in",
        roll_number: "21bce9371",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});


app.listen(3000, () => {
    console.log("App is running on port 3000");
});
