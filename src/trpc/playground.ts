import { db } from "@/server/db";

await db.user.create({
    data: {
        emailAddress: 'test@gmail.com',
        firstName: 'Nikhil',
        lastName: 'Ranjan',
    }
})
console.log('done')

