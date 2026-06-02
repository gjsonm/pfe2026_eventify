const express = require('express')
const app = express()
const port = 3001
const fs = require('fs');

app.use(express.json())

// ref https://dev.to/reynaldi/how-to-fix-the-no-access-control-allow-origin-header-error-5c1j
const cors = require('cors');
app.use(
    cors({
        origin: ["http://localhost:3000"],
    })
);

// kirim semua event & peserta
app.get('/api/events', (req, res) => {
    const data = fs.readFileSync('./data/event.json', 'utf8')
    const events = JSON.parse(data)

    const data2 = fs.readFileSync('./data/peserta.json', 'utf8')
    const peserta = JSON.parse(data2)

    const data3 = fs.readFileSync('./data/pengguna.json', 'utf8')
    let pengguna = JSON.parse(data3)
    // Buang email ama password karna mo dikirim ke client
    pengguna = pengguna.map(({ password, email, ...p }) => p)

    res.json({ events, peserta, pengguna })
})

// register pengguna
app.post('/api/register', (req, res) => {
    const data = fs.readFileSync('./data/pengguna.json', 'utf8')
    const users = JSON.parse(data)

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    users.push(newUser)

    fs.writeFileSync('./data/pengguna.json', JSON.stringify(users, null, 4))
    res.json();
})

// login pengguna
app.post('/api/login', (req, res) => {
    const data = fs.readFileSync('./data/pengguna.json', 'utf8')
    const users = JSON.parse(data)

    const email = req.body.email
    const password = req.body.password

    const user = users.find(u => u.email === email && u.password === password)

    if (!user) {
        return res.status(401).json({ message: 'Invalid Email or Password' })
    }

    res.json(user)
})

// register participant ke event
app.post('/api/register-event', (req, res) => {
    const data = fs.readFileSync('./data/peserta.json', 'utf8')
    const pesertas = JSON.parse(data)

    const newPa = {
        id: pesertas.length + 1,
        participant_id: req.body.participant_id,
        event_id: req.body.event_id
    }
    pesertas.push(newPa)

    fs.writeFileSync('./data/peserta.json', JSON.stringify(pesertas, null, 4))
    res.json(newPa)
})

// Bikin event
app.post('/api/create-event', (req, res) => {
    const data = fs.readFileSync('./data/event.json', 'utf8')
    const events = JSON.parse(data)

    const newEvent = {
        id: events.length + 1,
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        description: req.body.description,
        image: req.body.image
    }
    events.push(newEvent)

    fs.writeFileSync('./data/event.json', JSON.stringify(events, null, 4))
    res.json(newEvent)
})

// Batal Pendaftaran
app.post('/api/cancel-regis', (req, res) => {
    const data = fs.readFileSync('./data/peserta.json', 'utf8')
    const pesertas = JSON.parse(data)

    const eventid = req.body.event_id
    const participant_id = req.body.participant_id

    const hasilHapus = pesertas.filter(p => !(p.event_id == eventid && p.participant_id == participant_id))

    fs.writeFileSync('./data/peserta.json', JSON.stringify(hasilHapus, null, 4))
    res.json({ message: "Success" })
})

// Batalkan event
app.post('/api/cancel-event', (req, res) => {
    const data = fs.readFileSync('./data/event.json', 'utf8')
    const events = JSON.parse(data)

    const data2 = fs.readFileSync('./data/peserta.json', 'utf8')
    const pesertas = JSON.parse(data2)

    const eventid = req.body.event_id

    const hasilHapusEvent = events.filter(e => e.id !== eventid)
    const hasilHapusPeserta = pesertas.filter(p => p.event_id !== eventid)

    fs.writeFileSync('./data/event.json', JSON.stringify(hasilHapusEvent, null, 4))
    fs.writeFileSync('./data/peserta.json', JSON.stringify(hasilHapusPeserta, null, 4))
    res.json({ message: "Success" })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})