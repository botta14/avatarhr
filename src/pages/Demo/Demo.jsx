import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Demo.css";

const Demo = () => {
    const videoRef = useRef(null);
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.muted = false; // ✅ السماح بالصوت من البداية ولكن الفيديو لا يعمل تلقائيًا

            // ✅ عند انتهاء الفيديو، انتظر 5 ثوانٍ ثم انتقل للصفحة الرئيسية
            video.onended = () => {
                setTimeout(() => {
                    navigate("/");
                }, 5000);
            };
        }
    }, [navigate]);

    // ✅ التحكم في تشغيل/إيقاف الفيديو عند الضغط عليه
    const togglePlayPause = () => {
        const video = videoRef.current;

        if (video) {
            if (video.paused) {
                video.play();
                setIsPlaying(true);
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <div className="demo-container">
            <video
                ref={videoRef}
                src="/videos/Final Alex-2.mp4"
                playsInline
                className="video-fullscreen"
                onClick={togglePlayPause} // ✅ تشغيل/إيقاف عند الضغط
                controls={false} // ✅ إخفاء أدوات التحكم الافتراضية
            />
            <div className="play-overlay" onClick={togglePlayPause}>
                {isPlaying ? "⏸️ Pause" : "▶️ Play"}
            </div>
        </div>
    );
};

export default Demo;
