import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LoveConfess() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/gallery");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-full max-w-2xl mx-auto text-center px-6 py-12 sm:px-10 sm:py-16 rounded-[2rem] border-2 border-pink-200 shadow-2xl bg-gradient-to-b from-pink-50 via-white to-pink-100"
    >
      {/* Border Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute inset-0 rounded-[2rem] border border-pink-300 pointer-events-none"
      />

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-3xl sm:text-5xl font-[PlayfairDisplay] text-pink-700 mb-8 leading-snug"
      >
        Happy Girlfriend Day 💖
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="font-[Lora] text-[17px] sm:text-lg text-gray-800 leading-loose tracking-wide"
      >
        Halooo sayangku cintaku maniskuu <br />
        Selamat Hari Pacar untuk perempuan paling berharga dalam hidupku. Kamu
        adalah alasan aku menjadi lebih lembut, lebih sabar, dan lebih percaya
        bahwa cinta bukan sekadar rasa tapi pilihan yang diperjuangkan setiap
        hari. Terima kasih sudah menemaniku di saat baik maupun buruk. Cintamu
        bukan hanya membuatku bahagia, tapi juga membuatku ingin jadi versi
        terbaik dari diriku.
        <br />
        <br />
        Aku ingin kita terus bersama — bukan cuma hari ini, tapi{" "}
        <span className="text-pink-500 font-semibold">selamanya</span>.
        <br />
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="mt-10 text-2xl sm:text-3xl text-pink-500 font-[PlayfairDisplay] tracking-wider"
      >
        💘 I love you 💘
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={handleNext}
        className="mt-10 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
      >
        Lanjut ke Galeri 💌
      </motion.button>
    </motion.div>
  );
}
