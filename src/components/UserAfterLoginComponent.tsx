import { Podcasts, PodcastsOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { axiosData } from "../models/dataModels";
import { AuthPage } from "./AuthPage";
import { StartComponnet } from "./StartComponnet";
import { Canvas } from "./StyleComponent";

export const UserAfterComponent = () => {
  const canvasRef = useRef(null);
  let canvas: any;
  const [confirmation, setConfirmation] = useState<boolean>(false);

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
    const userId = localStorage.getItem("currentUserId");
    if (dataURL) {
      const put = {
        method: "PUT",
        url: `http://localhost:3030/users/${userId}`,
        data: { dataURL },
      };
      axiosData(put).then((response) => {
        console.log(response);
      });
    }
  };

  const signOutHandler = () => {
    if (window.confirm("Вы хотите выйти из системы?")) {
      console.log(`confirm true`);
      setConfirmation(true);
    }
  };
  return (
    <Canvas>
      <div>USER CHAT</div>
      <canvas style={{ border: "1px solid silver" }} ref={canvasRef} />
      <Button onClick={submitHandler}>Save</Button>
      <Button onClick={signOutHandler}>Выйти</Button>
      {confirmation && <AuthPage />}
    </Canvas>
  );
};
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
