import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const photos = [
  "/img/us1.jpg",
  "/img/us2.png",
  "/img/us3.png",
  "/img/us4.png",
  "/img/us5.png",
  "/img/us6.png",
  "/img/us7.png",
  "/img/us8.png",
  "/img/us9.png",
  "/img/us10.png",
  "/img/us11.png",
  "/img/us12.png",
  "/img/us13.png",
  "/img/us14.png",
  "/img/us15.png",
  "/img/us16.png",
];

const captions = [
  "Waktu pertama kali kita jalan bareng 💖",
  "Ketawa kamu bikin hariku cerah 🤭",
  "Liat kamu dari jauh aja udah bahagia 🥺",
  "Momen candid yang ngangenin 🫶",
  "Pas kita ngobrol lama banget 😳",
  "Gaya kamu waktu malu-malu lucu banget 😆",
  "Kita di taman, senyum kamu manis banget 🍃",
  "Hari itu spesial banget buatku 💘",
  "Tatapan matamu ga pernah bohong 😚",
  "Aku suka banget foto ini! 💓",
  "Kamu bener-bener lucu di sini 🤍",
  "Pas aku sadar aku suka kamu 🥹",
  "Semoga kita bisa terus bareng 🥰",
  "Foto random tapi priceless ✨",
  "Kalau liat ini aku senyum sendiri 🤭",
  "Foto paling aku sayangin 💞",
];

export default function LoveGallery() {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({ width: 360, height: 640 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  const randomX = () => Math.random() * windowSize.width;
  const randomY = () => Math.random() * windowSize.height;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-200 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-200 rounded-full opacity-60 blur-sm"
            initial={{
              x: randomX(),
              y: randomY(),
              scale: 0.5 + Math.random(),
            }}
            animate={{
              y: [-20, -60],
              opacity: [0.4, 0.8, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 6 + Math.random() * 4,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Gallery Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative bg-white/90 backdrop-blur-sm w-full max-w-[90vw] sm:max-w-md text-center p-4 sm:p-6 rounded-3xl border-[2px] border-pink-200 shadow-lg z-20"
      >
        {/* Border glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute inset-0 rounded-3xl border border-pink-300 pointer-events-none"
        />

        {/* Title */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, rotate: [0, -1, 1, 0] }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl font-serif text-pink-700 mb-2"
        >
          Our Love Gallery 💞
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-pink-500 mb-4"
        >
          Beberapa momen paling manis yang kita lalui bareng 💖
        </motion.p>

        {/* Grid of Photos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 gap-2 sm:gap-3 max-h-[420px] overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-pink-300 pr-1"
        >
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white aspect-square rounded-xl shadow p-1 flex flex-col items-center"
            >
              <img
                src={src}
                alt={`Kenangan ke-${i + 1}`}
                className="w-full h-full object-cover rounded"
              />
              <p className="text-[10px] sm:text-xs text-center italic text-pink-400 mt-1">
                {captions[i] || "Momen spesial ❤️"}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Next Button */}
        <motion.button
          onClick={() => navigate("/commit")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 bg-pink-500 text-white px-6 py-2 rounded-full shadow hover:bg-pink-600 transition text-sm sm:text-base"
        >
          ❤️ Lanjut...
        </motion.button>
      </motion.div>
    </div>
  );
}
