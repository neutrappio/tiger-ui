// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

const USERS = require('../data/users');

module.exports = [
    {
        id: "get-user", // id of the route
        url: "/api/auth/login", // url in express format
        method: "POST", // HTTP method
        variants: [
            {
                id: "success", // id of the variant
                response: {
                    status: 200, // status to send
                    body: USERS[0], // body to send
                },
            },
            {
                id: "real", // id of the variant
                response: (req, res) => {
                    const userEmail = req.body.email;
                    const userPass = req.body.email;

                    const user = USERS.find((userData) => userData.id === Number(userId));

                    if (user) {
                        res.status(200);
                        res.send(user);
                    } else {
                        res.status(404);
                        res.send({
                            message: "User not found",
                        });
                    }
                },
            },
        ],
    },
];
