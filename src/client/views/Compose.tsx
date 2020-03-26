import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Compose: React.FC<ComposeProps> = () => {

const history = useHistory();

  //use import  state for backend !
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);
    const submitChirp= async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        let res = await fetch('api/chirps', {
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'

            },
            body: JSON.stringify({ username, message})
        })
        if (res.ok) {
             history.push('/');
        }else {
            alert('Error! Try Again!')
        }
    }

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
        <button onClick={submitChirp } className="btn-outline-danger btn-block mt-3 w-85 mx-auto shadow-lg">
          Chirp to the World
        </button>
      </form>
    </main>
  );
};

interface ComposeProps {}

export default Compose;
