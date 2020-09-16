import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.style.css";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import VideocamIcon from "@material-ui/icons/Videocam";
import { useStateValue } from "../StateProvider";
import firebase from "firebase";
import firestore from "../firebase";
function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    firestore.collection("posts").add({
      message: input,
      timestap: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
      image: imageUrl,
      profilePic: user.photoURL,
    });
    setImageUrl("");
    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your minde ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity </h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
