import { Podcasts, PodcastsOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { axiosData } from "../models/dataModels";
import { AuthPage } from "./AuthPage";

export const UserAfterComponent = () => {
  const canvasRef = useRef(null);
  let canvas: any;
  let confirmation: boolean = false;

  useEffect(() => {
    canvas = canvasRef.current;
    canvas.width = 900;
    canvas.height = 500;
    const context: any = canvas.getContext("2d");
    let myColor = "green";

    canvas.onmousedown = function (event: any) {
      canvas.onmousemove = function (event: any) {
        let x = event.offsetX;
        let y = event.offsetY;
        context.fillStyle = myColor;
        context.fill();
        context.fillRect(x - 5, y - 5, 10, 10);
      };
      canvas.onmouseup = function () {
        canvas.onmousemove = null;
      };
    };
  }, []);

  const submitHandler = () => {
    const dataURL = canvas.toDataURL();
    if (dataURL) {
      const post = {
        method: "POST",
        url: "http://localhost:3030/pictures/",
        data: dataURL,
      };
      axiosData(post).then((response) => {
        console.log(response);
      });
    }
  };

  const signOutHandler = () => {
    if (window.confirm("Вы хотите выйти из системы?")) {
      confirmation = true;
    }
  };
  return (
    <div className="canvas">
      <div>USER CHAT</div>
      <canvas style={{ border: "1px solid silver" }} ref={canvasRef} />
      <Button onClick={submitHandler}>Save</Button>
      <Button onClick={signOutHandler}>Выйти</Button>
      {confirmation && <AuthPage />}
    </div>
  );
};
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
