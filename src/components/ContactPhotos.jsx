import Draggable from "react-draggable";

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
        <div className="text-center">
          <span className="font-bold font-sans">drag me around!</span>
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
