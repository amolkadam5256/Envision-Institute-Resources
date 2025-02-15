import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CopyWrite from "./CopyWrite";

const videos = [
  { title: "David Guetta Miami Ultra", duration: "01:22" },
  { title: "David Guetta Miami Ultra", duration: "01:02" },
  { title: "David Guetta Miami Ultra", duration: "03:10" },
  { title: "David Guetta Miami Ultra", duration: "01:00" },
  { title: "David Guetta Miami Ultra", duration: "01:19" },
  { title: "David Guetta Miami Ultra", duration: "01:00" },
];

const latestVideos = [
  "David Guetta Miami Ultra Music Festival 2019",
  "Martin Garrix (Full live-set) | SLAM!Koningsdag",
  "Dimitri Vegas, Steve Aoki & Like Mike’s ‘3 Are Legend’",
  "Tomorrowland 2020",
];

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-03-15T00:00:00");
    const now = new Date();
    const difference = eventDate - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center fw-bold p-4 bg-dark text-light rounded">
      <h4>Music festival starts in</h4>
      <h2 className="display-5">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </h2>
    </div>
  );
};

export default function YoutubeFeed() {
  return (
    <div className="container-fluid py-5 bg-dark text-white rounded shadow-lg">
      <h1 className="mb-4 text-center text-warning">🎵 YouTube Feed 🎵</h1>

      <h2 className="mb-3 text-primary">Latest Tracks</h2>
      <div className="row">
        {videos.map((video, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card text-white bg-secondary shadow-lg">
              <div className="card-body text-center">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">⏳ {video.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-5 text-primary">Latest Videos</h2>
      <ul className="list-group mt-3">
        {latestVideos.map((video, index) => (
          <li key={index} className="list-group-item bg-secondary text-white d-flex justify-content-between align-items-center">
            {video} <i className="bi bi-play-circle-fill text-warning"></i>
          </li>
        ))}
      </ul>

      <div className="my-5">
        <CountdownTimer />
      </div>

      <div className="text-center">
        <button className="btn btn-warning btn-lg">🎟 Buy Tickets</button>
      </div>

      <div className="mt-5 text-center">
        <p><i className="bi bi-telephone me-2"></i> 1-677-124-44227</p>
        <p><i className="bi bi-envelope me-2"></i> DJ.Music@gmail.com</p>
      </div>
      <CopyWrite text="All rights reserved | Designed by Amol Kadam"/>
    </div>
  );
}