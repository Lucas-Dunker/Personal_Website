import Draggable from "react-draggable";
import "@fontsource/just-another-hand";

export const ContactPhotos = () => {
  const photos = [
    "/contactPictures/Alpaca.jpg",
    "/contactPictures/Fuji.jpg",
    "/contactPictures/Kyoto.jpg",
    "/contactPictures/Pisgah.jpg",
  ];
  let randomPhoto = photos[Math.floor(Math.random() * photos.length)];

  return (
    <Draggable>
      <div className="grid">
        <div className="text-center mb-2">
          <span className="font-cursive text-4xl">drag me around!</span>
        </div>
        <div>
          <img
            src={randomPhoto}
            alt="Contact Image"
            width="500"
            height="600"
            className=""
            draggable="false"
          />
        </div>
      </div>
    </Draggable>
  );
};
