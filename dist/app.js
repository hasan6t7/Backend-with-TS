import express, {} from "express";
const app = express();
// middlewares
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Backend Server with ts is running");
});
export default app;
//# sourceMappingURL=app.js.map