import "./Product.scss";
import sideView1 from "../../assets/images/side-view1.jpg";
import sideView2 from "../../assets/images/side-view2.jpg";
import heelTab from "../../assets/images/heel-tab.jpg";
import outSole from "../../assets/images/out-sole.jpg";
import overView1 from "../../assets/images/overview1.jpg";
import overView2 from "../../assets/images/overview2.jpg";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

const images = [sideView1, sideView2, outSole, heelTab, overView1, overView2];

const Product = () => {
  const [currentUpperImg, setcurrentUpperImg] = useState(sideView1);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClickPreviewImg = () => {
    let index = images.findIndex((item) => item === currentUpperImg);
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <div>
      <div className="product-container">
        <div className="content-left">
          <div className="img-upper">
            <img
              src={currentUpperImg}
              alt="side-view1"
              onClick={() => handleClickPreviewImg()}
            />
          </div>
          <div className="img-lower">
            <div className="img-list">
              <img
                src={sideView1}
                alt="side-view1"
                className={currentUpperImg === sideView1 ? "active" : ""}
                onClick={() => setcurrentUpperImg(sideView1)}
              />
            </div>
            <div className="img-list">
              <img
                src={sideView2}
                alt="side-view2"
                className={currentUpperImg === sideView2 ? "active" : ""}
                onClick={() => setcurrentUpperImg(sideView2)}
              />
            </div>
            <div className="img-list">
              <img
                src={outSole}
                alt="out-sole"
                className={currentUpperImg === outSole ? "active" : ""}
                onClick={() => setcurrentUpperImg(outSole)}
              />
            </div>
            <div className="img-list">
              <img
                src={heelTab}
                alt="heel-tab"
                className={currentUpperImg === heelTab ? "active" : ""}
                onClick={() => setcurrentUpperImg(heelTab)}
              />
            </div>
            <div className="img-list">
              <img
                src={overView1}
                alt="overview"
                className={currentUpperImg === overView1 ? "active" : ""}
                onClick={() => setcurrentUpperImg(overView1)}
              />
            </div>
            <div className="img-list">
              <img
                src={overView2}
                alt="overview"
                className={currentUpperImg === overView2 ? "active" : ""}
                onClick={() => setcurrentUpperImg(overView2)}
              />
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="info">
            <fieldset>
              <legend>
                <div className="title">Air Jordan 3 Retro NRG 'Tinker'</div>
              </legend>
              <div className="price">$318</div>
              <div className="size">Size: 8US</div>
              <div className="action">
                <label className="quantity">Quantity:</label>
                <input type="number" min={1} value={1} />
                <button className="buy">Buy</button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          animationDuration={500}
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};
export default Product;
