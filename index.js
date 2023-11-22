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
create();