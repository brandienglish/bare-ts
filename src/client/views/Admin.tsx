import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

const Admin: React.FC<AdminProps> = () => {
  const history = useHistory();
  const { id } = useParams();

  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  useEffect(() => {
    (async () => {
      let res = await fetch(`/api/chirps/${id}`);
      let chirp = await res.json();
      console.log(chirp);
      setUsername(chirp.username);
      setMessage(chirp.message);
    })();
  }, [id]);

  const saveEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let res = await fetch(`/api/chirps/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, message })
    });
    if (res.ok) {
      history.push(`/details/${id}`);
    } else {
      alert("Error! Try Again!");
    }
  };

  const deleteEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let res = await fetch(`/api/chirps/${id}`, {
      method: "DELETE"
    });
    if (res.ok) {
      history.push("/");
    } else {
      alert("Error! Try Again!");
    }
  };

  return (
    <main className="container">
      <section className="row my-2 justify-content-center"></section>
      <div className="col-md-10"></div>
      <form className="from-group p-3 shadow border">
        <label htmlFor="username justify-content-center">Online ID</label>
        <input
          value={username}
          onChange={handleUsernameChange}
          placeholder="Appear As ... "
          id="username"
          type="text"
          className="form-control"
        />
        <label htmlFor="message">Message</label>
        <textarea
          value={message}
          onChange={handleMessageChange}
          rows={8}
          placeholder="If you chirp it, be about it "
          className="form-control"
          name="message"
          id="message"
        ></textarea>
        <button
          onClick={saveEdit}
          className="btn-outline-danger btn-block mt-3 w-85 mx-auto shadow-lg"
        >
          Save Chirp
        </button>
        <button
          onClick={deleteEdit}
          className="btn-outline-danger btn-block mt-3 w-85 mx-auto shadow-lg"
        >
          Delete Chirp
        </button>
      </form>
    </main>
  );
};

interface AdminProps {}

export default Admin;
