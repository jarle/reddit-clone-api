import mongoose from "mongoose";
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/test")
.then(() => console.log("Connected to database!"))
.catch((err) => console.log(err.message))

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, "Username must be 5 characters or more"],
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password must be 8 characters or more"],
    },
});

const User = mongoose.model("User", userSchema);

export default User;