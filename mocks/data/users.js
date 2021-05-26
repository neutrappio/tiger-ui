let id = 1000;

module.exports = [
    {
        id: id,
        fullname: "Harry Bak",
        email: "harry@example.com",
        password: "password1",
        country: "FR",
        createdat: new Date()
    },
    {
        id: id++,
        fullname: "John Doe",
        email: "john@example.com",
        password: "password2",
        country: "US",
        createdat: new Date()
    }
]