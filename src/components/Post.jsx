import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

function Post() {
  const params = useParams();
  const navigate = useNavigate();

  const status = 200;
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  const onClickhandler = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Post id: {params.id}</h1>
      <h1>Name: {params.name}</h1>
      <button onClick={onClickhandler}>Click me</button>
    </div>
  );
}

export default Post;
