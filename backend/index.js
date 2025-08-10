require('dotenv').config();
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')

const app = express()
app.use(express.json())
app.use(cors())

const savingsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'register', required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
    savings: { type: String, required: true },
})
const savingsModel = mongoose.model('savingstracking', savingsSchema)

app.post('/api/savings', async (req, res) => {
    const { userId, month, year, savings } = req.body

    try {
        const updatedSavings = await savingsModel.findOneAndUpdate(
            { userId, month, year },
            { savings },
            { upsert: true, new: true }
        )
        res.json(updatedSavings)
    } catch (error) {
        console.error(error)
    }
})

app.get('/api/savings/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const savings = await savingsModel.find({ userId });

        const formatted = [
            { month: "Jan", savings: 0 },
            { month: "Feb", savings: 0 },
            { month: "Mar", savings: 0 },
            { month: "Apr", savings: 0 },
            { month: "May", savings: 0 },
            { month: "Jun", savings: 0 },
            { month: "Jul", savings: 0 },
            { month: "Aug", savings: 0 },
            { month: "Sep", savings: 0 },
            { month: "Oct", savings: 0 },
            { month: "Nov", savings: 0 },
            { month: "Dec", savings: 0 }
        ];

        savings.forEach(entry => {
            const monthIndex = parseInt(entry.month, 10) - 1;
            if (monthIndex >= 0 && monthIndex < 12) {
                formatted[monthIndex].savings = parseFloat(entry.savings) || 0;
            }
        });

        res.json(formatted);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})
const useModel = mongoose.model('register', userSchema)

app.post("/api/login", (req, res) => {
    const { email, password } = req.body
    useModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password)
                    res.json(user)
                else
                    res.json("Password incorrect")
            }
            else {
                res.json("Account not found.")
            }
        })
})

app.post('/api/createaccount', (req, res) => {
    useModel.create(req.body)
        .then(user => res.json(user))
        .catch(error => res.json(error))
})

const connected = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected ")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
    await connected()
    console.log(`Server running in port ${PORT}`)
})