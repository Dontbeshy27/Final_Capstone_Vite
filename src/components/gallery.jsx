
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "./footer";
import "./gallery.css";
 function Gallery () {
  const images = [
    {
      original: "https://e1.pxfuel.com/desktop-wallpaper/461/981/desktop-wallpaper-pubg-mobile-1920x1080-pubg-mobile.jpg",
      thumbnail: "https://e1.pxfuel.com/desktop-wallpaper/461/981/desktop-wallpaper-pubg-mobile-1920x1080-pubg-mobile.jpg"
    },
    {
      original: "https://c4.wallpaperflare.com/wallpaper/666/441/256/pubg-pubh-playerunknown-s-battlegrounds-wallpaper-preview.jpg",
      thumbnail: "https://c4.wallpaperflare.com/wallpaper/666/441/256/pubg-pubh-playerunknown-s-battlegrounds-wallpaper-preview.jpg"
    },
    {
      original: "https://wallpaper.dog/large/17106655.jpg",
      thumbnail: "https://wallpaper.dog/large/17106655.jpg"
    },
    {
      original: "https://wallpaper.dog/large/5711.jpg",
      thumbnail: "https://wallpaper.dog/large/5711.jpg"
    },
    {
      original: "https://w0.peakpx.com/wallpaper/189/508/HD-wallpaper-pubg-squad.jpg",
      thumbnail: "https://w0.peakpx.com/wallpaper/189/508/HD-wallpaper-pubg-squad.jpg"
    },
    {
      original: "https://c4.wallpaperflare.com/wallpaper/793/738/376/pubg-video-games-helmet-reflection-wallpaper-preview.jpg",
      thumbnail: "https://c4.wallpaperflare.com/wallpaper/793/738/376/pubg-video-games-helmet-reflection-wallpaper-preview.jpg"
    },
    {
      original: "https://w0.peakpx.com/wallpaper/171/609/HD-wallpaper-pubg-royale-pass-season-14.jpg",
      thumbnail: "https://w0.peakpx.com/wallpaper/171/609/HD-wallpaper-pubg-royale-pass-season-14.jpg"
    },
    {
      original: "https://w0.peakpx.com/wallpaper/874/758/HD-wallpaper-pubg-royale-pass-season-15-skins.jpg",
      thumbnail: "https://w0.peakpx.com/wallpaper/874/758/HD-wallpaper-pubg-royale-pass-season-15-skins.jpg"
    },
    {
      original: "https://images.hdqwalls.com/wallpapers/pubg-royale-pass-2020-4q.jpg",
      thumbnail: "https://images.hdqwalls.com/wallpapers/pubg-royale-pass-2020-4q.jpg"
    },
    {
      original: "https://wallpaperaccess.com/full/5038868.jpg",
      thumbnail: "https://wallpaperaccess.com/full/5038868.jpg"
    }

    
  ];

  return (
    <div className="App">
      <h1 className="center">THERE CAN ONLY BE ONE WINNER LETS GO</h1>
      <h2 className="center">PUBG EVENTS</h2>
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={1000}
        slideOnThumbnailOver={true}
        showIndex={true}
        onPlay={() => {
          alert("slideshow is now playing!");
        }}
      />
          <Footer />
    </div>
  );
}

export default Gallery;