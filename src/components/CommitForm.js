import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CommitForm() {
  const [noSize, setNoSize] = useState(1);
  const [showHearts, setShowHearts] = useState(false);
  const [hideYes, setHideYes] = useState(false);
  const navigate = useNavigate();

  const handleYes = () => {
    setHideYes(true);
    setShowHearts(true);

    // Delay sebelum navigate
    setTimeout(() => {
      navigate("/final");
    }, 2000);
  };

  const handleNoClick = () => {
    if (noSize > 0.12) {
      setNoSize(noSize * 0.7);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-white to-pink-200 overflow-hidden">
      {/* Floating Love Particles */}
      <AnimatePresence>
        {showHearts &&
          [...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-400 text-2xl pointer-events-none select-none"
              initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
              animate={{
                x: Math.random() * 600 - 300,
                y: -800,
                scale: 1.5,
                opacity: 0,
              }}
              transition={{
                duration: 2.5 + Math.random() * 1.5,
                ease: "easeOut",
                delay: i * 0.05,
              }}
            >
              💖
            </motion.div>
          ))}
      </AnimatePresence>

      <motion.img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDdvZmhqNzFhdXZwNHV5cDB1YnVqa215dzNmZHE5OTU0YWFoNzZvMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b4UHeUnzarvUnjl0fg/giphy.gif"
        alt="Cute Romantic GIF"
        className="w-64 h-auto rounded-xl shadow-md mb-6"
      />
      
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-pink-700 mb-4 font-serif"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🌹 Will You Be My Girlfriend? 🌹
      </motion.h1>


      <motion.p
        className="text-lg text-pink-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Jawab jujur ya sayaanggg... aku serius nih 😳
      </motion.p>

      <div className="flex gap-10 items-center justify-center">
        {/* YES Button */}
        <AnimatePresence>
          {!hideYes && (
            <motion.button
              onClick={handleYes}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              exit={{ scale: 1.5, rotate: 15, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-pink-600 text-white px-8 py-4 text-xl rounded-full shadow-xl hover:bg-pink-700 relative overflow-hidden"
            >
              Iya 🥰
              <span className="absolute animate-ping w-full h-full rounded-full bg-pink-400 opacity-50 top-0 left-0 z-[-1]" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* NO Button */}
        <motion.button
          style={{ scale: noSize }}
          onClick={handleNoClick}
          className="bg-white text-pink-500 border-2 border-pink-300 px-6 py-3 rounded-full text-xl transition disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={noSize < 0.12}
        >
          Tidak 🙈
        </motion.button>
      </div>
    </div>
  );
}
