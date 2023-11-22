const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient(); 

function create () {
    prisma.post
        .create({
            data: {
                title : "primo post",
                slug : "primo-post",
                content : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            }
        })
        .then((nuovopost) => {
            console.log("test create", nuovopost);
        })
        .catch((error) => console.error(error));
};


function read () {
    prisma.post
    .findFirst({
        where: {
            slug: "primo-post"
        }
    })
    .then((p) => {
        console.log("test find", p);
    })
    .catch((error) => console.error(error));
};


function readAll () {
    prisma.post
        .findMany({
        })
        .then((p) => {
            console.log("test find all", p)
        })
        .catch((error) => console.error(error));
};


function update () {
    prisma.post
        .update({
            where: {
                id: 2
            },
            data: {
                title: "secondo post",
                slug: "secondo-post"
            }
        })
        .then((p) => {
            console.log("test update", p)
        })
        .catch((error) => console.error(error));
};

function deletePost () {
    prisma.post
        .delete({
            where: {
                id: 3
            }
        })
        .then((p) => {
            console.log("test delate", p);
        })
};

