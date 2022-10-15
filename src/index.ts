import app from "./server"

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
})