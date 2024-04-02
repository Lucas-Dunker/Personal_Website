import Draggable from "react-draggable";
import "@fontsource/just-another-hand";

export const Paintings = () => {
  const photos = [
    "/paintings/Bierstadt_Mountains.jpg",
    "/paintings/Monet_Spring.jpg",
    "/paintings/Monet_Sunset.jpg",
    "/paintings/Nighthawks.jpg",
    "/paintings/Quixote_Demons.jpg",
    "/paintings/Saturn_Son.jpg",
    "/paintings/Skeleton_Cigarette.jpg",
    "/paintings/Sublime.jpg",
    "/paintings/Wizard_Tower.jpg",
  ];
  let randomPhoto = photos[Math.floor(Math.random() * photos.length)];

  return (
    <Draggable>
      <div className="grid">
        <div>
          <img
            src={randomPhoto}
            alt="Contact Image"
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
