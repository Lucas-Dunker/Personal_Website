import Draggable from "react-draggable";

export const ContactPhotos = () => {
  const photos = [
    "/public/contactPictures/Alpaca.jpg",
    "/public/contactPictures/Fuji.jpg",
    "/public/contactPictures/Kyoto.jpg",
    "/public/contactPictures/Pisgah.jpg",
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
