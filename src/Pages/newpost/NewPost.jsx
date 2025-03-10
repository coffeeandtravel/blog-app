import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../App.css'
const NewPost = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        setError("");

        if (title === "" || description === "") {
            setError("Title and description are required!");
            return;
        }
        axios.post('http://localhost:5000/posts', { title, description })
        .then(() => {
          title.value = "";
          description.value = "";
          
          setError('');
        })
        .catch((error) => console.error('Error creating post:', error));
        alert("Post added successfully!")
        navigate('/')
    };

    return (
        <div className="h-full w-full flex flex-col gap-4 items-center justify-center mt-10">
            <div>
            <h1 className="text-5xl heading">New Post</h1>
        </div>
            <div className="bg-slate-200 h-[90%] md:h-[500px] w-[90%] lg:w-[50%] rounded-2xl pb-5 pt-4 ">
                <form action="" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 p-3">
                        <label htmlFor="title" className="text-3xl">Title</label>
                        <input type="text" name="title" id="title" className={`h-13 lg:h-13 w-[95%] bg-[#bfbfbf] rounded-xl p-2 ${error && "border-2 border-red-500"}`} />
                    </div>
                    <div className="flex flex-col gap-3 p-3">
                        <label htmlFor="description" className="text-3xl">Description</label>
                        <textarea name="description" id="description" className={`w-[95%] min-h-52 bg-[#bfbfbf] rounded-[10px] p-2 ${error && "border-2 border-red-500"}`} />
                    </div>
                    <div className="h-3 pl-3">
                        <p className="text-red-500 font-bold">{error}</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button type="submit" className="bg-blue-300 rounded-full px-4 py-2 cursor-pointer border-2 border-blue-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPost;
