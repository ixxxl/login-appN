import { useEffect, useRef } from "react";

export const UserAfterComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
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

  return (
    <div className="canvas">
      <div>USER CHAT</div>
      <canvas style={{ border: "1px solid silver" }} ref={canvasRef} />
    </div>
  );
};
