import { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Gallery = ({ setOpenGallery, image, setImage, images }) => {
  const [touch, setTouch] = useState(null);

  const onTouchStart = (e) => setTouch(e.touches[0].clientX);

  const onTouchMove = (e) => {
    if (touch) {
      if (touch - e.touches[0].clientX > 5) {
        setNextImage();
      } else if (touch - e.touches[0].clientX < -5) {
        setPreviousImage();
      }
    }
    setTouch(null);
  };

  const getCurrentImage = (id) => images.find((img) => img.sys.id === id);

  const setPreviousImage = () => {
    const index = images.findIndex((el) => el.sys.id === image);
    index === 0
      ? setImage(images[images.length - 1].sys.id)
      : setImage(images[index - 1].sys.id);
  };

  const setNextImage = () => {
    const index = images.findIndex((el) => el.sys.id === image);
    index === images.length - 1
      ? setImage(images[0].sys.id)
      : setImage(images[index + 1].sys.id);
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  });

  return (
    <div className="overflow-y-hidden">
      <div
        onClick={() => setOpenGallery(false)}
        className="h-screen w-full fixed top-0 left-0 bg-black opacity-90 z-10 px-10"
      ></div>
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        <div
          className="fixed top-1/2 left-0 -translate-y-1/2 w-1/4 h-full flex justify-start px-5 items-center cursor-pointer select-none opacity-50"
          onClick={setPreviousImage}
        >
          <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
            <AiOutlineArrowLeft />
          </div>
        </div>
        <img
          src={image && getCurrentImage(image).fields.file.url}
          alt="Djupedalsäng"
          className="mx-auto"
        />
        <div
          className="fixed top-1/2 -translate-y-1/2 right-0 h-full w-1/4 flex items-center justify-end px-5 cursor-pointer select-none opacity-50"
          onClick={setNextImage}
        >
          <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 py-5 flex">
          {images.map((item, key) => {
            if (item.sys.id === image)
              return (
                <div
                  key={key}
                  className="bg-white h-[10px] w-[10px] rounded-full mx-1"
                ></div>
              );
            return (
              <div
                key={key}
                className="border border-white h-[10px] w-[10px] rounded-full mx-1"
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
