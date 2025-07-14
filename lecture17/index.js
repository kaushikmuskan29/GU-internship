import { configDotenv } from "dotenv";
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(cors({origin : "http://localhost:5173", credentials : true }));
app.use(express.json());
app.use(cookieParser());


app.get("/", (req,res)=>{
    res.send("Hello Express222s")
})
app.use("/api/auth", authRutes )
app.listen(PORT, ()=>{
    connectDb();
    console.log(`Server running on ${PORT}`)
})