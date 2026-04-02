//jwt flow with login, refresh-style  logic and secure verification
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

const secretKey = "Mysecretkey";
const refreshSecretKey = "Mynewsecretkey";
// in-memory storage for refresh token
const refreshTokens = [];

function authenticateAccessToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]; 

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing."
        });
    }

    try {
        req.user = jwt.verify(token, secretKey, {
            algorithms: ["HS256"],
            issuer: "jwt-example"
        });
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") { 
            return res.status(401).json({
                success: false,
                message: "Access token has expired"
            });
        }
        return res.status(401).json({
            success: false, 
            message: "Access token is invalid"
        });
    }
}

app.post("/login", function (req, res) {
    const { email, password } = req.body;

    if (email !== "email@email.com" || password !== "pass@123") {
        return res.status(401).json({
            success: false,
            message: "Invalid Credential"
        });
    }

    const accessToken = jwt.sign(
        {
            userId: 101,
            email: email,
            role: "member"
        },
        secretKey,
        {
            expiresIn: "10m",
            algorithm: "HS256", 
            issuer: "jwt-example"
        }
    );

    const refreshToken = jwt.sign(
        {
            userId: 101,
            email: email
        },
        refreshSecretKey,
        {
            expiresIn: "10d",
            algorithm: "HS256", 
            issuer: "jwt-example"
        }
    );

    refreshTokens.push(refreshToken);

    res.json({
        success: true,
        message: "login successful",
        accessToken: accessToken,
        refreshToken: refreshToken
    });
});

app.post("/refresh", function (req, res) {
    const { refreshToken } = req.body;

    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.status(401).json({
            message: "refresh token is missing or invalid"
        });
    }

    try {
        const decoded = jwt.verify(refreshToken, refreshSecretKey, {
            algorithms: ["HS256"],
            issuer: "jwt-example"
        });

        const newAccessToken = jwt.sign(
            {
                userId: decoded.userId,
                email: decoded.email,
                role: "member"
            },
            secretKey,
            {
                expiresIn: "15m",
                algorithm: "HS256",
                issuer: "jwt-example"
            }
        );

        res.json({
            success: true,
            accessToken: newAccessToken
        });
    } catch (error) {
        res.status(403).json({
            success: false, 
            message: "Refresh token verification failed"
        });
    }
});

app.get("/me", authenticateAccessToken, function (req, res) {
    res.json({
        success: true,
        message: "protected user route",
        user: req.user
    });
});

app.listen(4000, function () {
    console.log("JWT demo server running at http://localhost:4000");
});
//node P8.js
//curl -X POST http://localhost:4000/login -H "Content-Type:application/json" -d "{\"email\":\"email@email.com\",\"password\":\"pass@123\"}"
//curl -X POST http://localhost:4000/refresh -H "Content-Type:application/json" -d "{\"refreshToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE3NzUxMTI0NjEsImV4cCI6MTc3NTk3NjQ2MSwiaXNzIjoiand0LWV4YW1wbGUifQ.dTcE3HU1hUgp3Zi9p_hm4AdNEqIBRGPFtF1o8ZfDwdE\"}"
//curl http://localhost:4000/me -H"Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNzc1MTEzNjAzLCJleHAiOjE3NzUxMTQ1
//MDMsImlzcyI6Imp3dC1leGFtcGxlIn0.Gp7fHy1gqDvvB6wmjFemvKDHl-TWO7kfg2prfSDpjAw"