import express from "express";
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello World',
        status: 'success'
    })
})

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
