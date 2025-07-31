import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LoveConfess from "./LoveConfess";
import { fireLoveConfetti } from "../utils/confetti";

export default function Envelope() {
  const [opened, setOpened] = useState(false);
  const [flipping, setFlipping] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setFlipping(true);
    fireLoveConfetti();

    // Delay untuk menyelesaikan animasi amplop
    setTimeout(() => {
      setOpened(true);
    }, 1400);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-pink-100 overflow-hidden p-4">
      <AnimatePresence>
        {!opened && (
          <>
            <motion.div
              key="envelope"
              onClick={handleOpen}
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                rotate: flipping ? 0 : [0, 5, -5, 0],
              }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{
                duration: 0.6,
                repeat: flipping ? 0 : Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="cursor-pointer z-10"
            >
              {/* Amplop */}
              <div className="relative w-52 h-36 sm:w-64 sm:h-40">
                {/* Badan amplop */}
                <div className="absolute inset-0 bg-red-400 rounded-md shadow-xl z-10"></div>

                {/* Tutup amplop */}
                <motion.div
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: flipping ? -140 : 0 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full h-1/2 bg-red-300 origin-bottom clip-triangle z-20"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                />
              </div>
            </motion.div>

            {/* Teks imut di bawah amplop */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute bottom-10 sm:bottom-20 text-center text-sm sm:text-base text-pink-700 font-semibold animate-bounce px-2"
            >
              Psst... sayang, klik amplop ini ya! 💕
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Isi surat cinta */}
      <AnimatePresence>
        {opened && (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-2"
          >
            <LoveConfess />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
