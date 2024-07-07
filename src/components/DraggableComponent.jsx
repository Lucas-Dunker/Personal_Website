import Draggable from "react-draggable";

export const DraggableComponent = ({ image }) => {
  return (
    <Draggable>
      <div className="grid">
        <div>
          <img
            src={image}
            alt="Image"
            width="500"
            height="300"
            className=""
            draggable="false"
          />
        </div>
      </div>
    </Draggable>
  );
};
