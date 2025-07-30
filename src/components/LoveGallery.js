import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

export default function LoveGallery() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative bg-white/90 backdrop-blur-sm max-w-md w-full text-center p-6 rounded-3xl border-[2px] border-pink-200 shadow-lg"
      >
        {/* Border glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute inset-0 rounded-3xl border border-pink-300 pointer-events-none"
        />

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
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

        {/* Grid Photo Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 gap-3 max-h-[420px] overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-pink-300 pr-1"
        >
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="aspect-square rounded-xl overflow-hidden shadow"
            >
              <img
                src={src}
                alt={`Kenangan bersama Apipii ke-${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Button Next */}
        <motion.button
          onClick={() => navigate("/commit")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 bg-pink-500 text-white px-6 py-2 rounded-full shadow hover:bg-pink-600 transition"
        >
          ❤️ Lanjut...
        </motion.button>
      </motion.div>
    </div>
  );
}
