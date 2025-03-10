import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";  

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); 
    
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
      setLoading(false);
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`); 
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
        
      })
      .catch((error) => console.log("Error deleting post:", error));
  };
  if (loading) return <div>Loading...</div>;

  return (
    <div className="h-full w-full flex justify-center items-center bg-white">
    <div className="h-100vh w-[95%] lg:w-[65%] flex flex-col bg-[#0d0d0d] text-white mt-10 rounded-xl justify-center gap-10 items-center py-10 p-5 mb-10">
      <div>
        <h1 className="text-5xl heading">Blogs</h1>
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          className="relative text-black flex flex-col h-52 w-[100%] lg:w-[90%] md:h-52 md:w-[500px] bg-[#d4d4d4] p-5 gap-5 rounded-lg mb-4"
        >
          <h4 className="text-2xl font-bold underline">{post.title}</h4>
          <p>{post.description}</p>

          <div className="absolute bottom-2 right-2 flex flex-row justify-center items-center gap-5">
            <button
              className="bg-white h-10 w-10 flex items-center justify-center rounded-full pl-1 pb-0.5 cursor-pointer"
              onClick={() => handleEdit(post.id)}
            >
              <FaEdit />
            </button>
            <button
              className="bg-white h-10 w-10 flex items-center justify-center rounded-full cursor-pointer"
              onClick={() => handleDelete(post.id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Homepage;
