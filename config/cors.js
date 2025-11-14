import cors from "cors";

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:3000",
      "https://dsa-chatbot-six.vercel.app",
      "https://client-dsa-chatbot.vercel.app",
      process.env.CLIENT_URL
    ].filter(Boolean);

    // Allow requests with no origin (like mobile apps, Postman, or server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('CORS blocked for origin:', origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

export default cors(corsOptions);