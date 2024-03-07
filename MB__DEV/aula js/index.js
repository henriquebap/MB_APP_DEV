"use strict";
const user = {
    firstName: "Larissa",
    lastName: "Akemi",
};
const showUser = (user) => {
    console.log(JSON.stringify(user));
};
showUser(user);
