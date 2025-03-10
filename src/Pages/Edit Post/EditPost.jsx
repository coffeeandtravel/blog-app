import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const [post, setPost] = useState({ title: "", description: "" });
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.log("Error fetching post:", error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;

    // Reset the error state at the beginning
    setError("");

    if (title === "" || description === "") {
      setError("Title and description are required!");
      return;
    }

    // Update the post via PUT request
    axios.put(`http://localhost:5000/posts/${id}`, { title, description })
      .then(() => navigate("/")) // Redirect to homepage after successful update
      .catch((error) => console.log("Error updating post:", error));
  };

  return (
    <div className="h-full w-full flex gap-4 flex-col items-center justify-center mt-10">
      <div>
        <h1 className="text-5xl heading">Edit Post</h1>
      </div>
      <div className="bg-slate-200 h-[90%] md:h-[500px] w-[90%] lg:w-[50%] rounded-2xl pb-5 pt-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 p-3">
            <label htmlFor="title" className="text-3xl">Title</label>
            <input type="text" name="title" id="title" defaultValue={post.title} className={`h-13 lg:h-13 w-[95%] bg-[#bfbfbf] rounded-xl p-2 ${error && "border-2 border-red-500"}`} />
          </div>
          <div className="flex flex-col gap-3 p-3">
            <label htmlFor="description" className="text-3xl">Description</label>
            <textarea name="description" id="description" defaultValue={post.description} className={`w-[95%] min-h-52 bg-[#bfbfbf] rounded-[10px] p-2 ${error && "border-2 border-red-500"}`} />
          </div>
          <div className="h-3 pl-3">
            <p className="text-red-500 font-bold">{error}</p>
          </div>
          <div className="flex flex-row gap-5 justify-center items-center">
            <button type="submit" className="bg-blue-300 rounded-full px-4 py-2 cursor-pointer border-2 border-blue-600">Submit</button>
            <button onClick={()=>navigate('/')} className="bg-blue-700 text-white rounded-full px-4 py-2 cursor-pointer border-2 border-blue-600">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
