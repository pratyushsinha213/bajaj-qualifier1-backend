const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// GET /bfhl
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

// POST /bfhl
app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const user_id = "pratyushsinha"; 
    const email = "pratyush.sinha2021@vitstudent.ac.in";  
    const roll_number = "21BCE3531";  

    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = [];

    data.forEach(item => {
        if (/^\d+$/.test(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
            if (item === item.toLowerCase()) {
                if (highest_lowercase_alphabet.length === 0 || item > highest_lowercase_alphabet[0]) {
                    highest_lowercase_alphabet = [item];
                } else if (item === highest_lowercase_alphabet[0]) {
                    highest_lowercase_alphabet.push(item);
                }
            }
        }
    });

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highest_lowercase_alphabet
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(bodyParser.json());

// // Helper function to get the highest lowercase alphabet
// const getHighestLowercase = (alphabets) => {
//   let highest = '';
//   alphabets.forEach(alpha => {
//     if (alpha === alpha.toLowerCase() && (highest === '' || alpha > highest)) {
//       highest = alpha;
//     }
//   });
//   return highest;
// };

// // POST endpoint
// app.post('/bfhl', (req, res) => {
//   const data = req.body.data;

//   if (!Array.isArray(data)) {
//     return res.status(400).json({ is_success: false, error: 'Invalid data format' });
//   }

//   const numbers = [];
//   const alphabets = [];

//   data.forEach(item => {
//     if (!isNaN(item)) {
//       numbers.push(item);
//     } else {
//       alphabets.push(item);
//     }
//   });

//   const response = {
//     is_success: true,
//     user_id: 'Nitish_21BCE3520',         // Change as needed
//     email: 'nitish.devwork@gmail.com',  // Change as needed
//     roll_number: '21BCE3520',           // Change as needed
//     numbers,
//     alphabets,
//     highest_lowercase_alphabet: getHighestLowercase(alphabets),
//   };

//   res.json(response);
// });

// // GET endpoint
// app.get('/bfhl', (req, res) => {
//   res.json({ operation_code: 1 });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}...`);
// });
