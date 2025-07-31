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
      className="relative w-full max-w-[90vw] sm:max-w-xl mx-auto text-center px-5 py-8 sm:px-10 sm:py-14 rounded-3xl border-2 border-pink-200 shadow-2xl bg-gradient-to-b from-pink-50 via-white to-pink-100"
    >
      {/* Border Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="text-base sm:text-lg text-pink-600 mb-8 text-center font-sans"
      />

      {/* Title */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-4xl sm:text-5xl font-greatvibes text-pink-700 mb-6 leading-snug"
      >
        Happy Girlfriend Day 💖
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="font-lora text-base sm:text-lg text-gray-800 leading-relaxed tracking-wide"
      >
        Halooo sayangku cintaku maniskuu 💗 <br />
        Selamat Girlfriend dayy buat cewe paling berharga dalam hidupkuu. Kamu
        buat hariku jadi lebih baik, aku jadi lebih sabar, dan lebih percaya
        bahwa cinta bukan sekadar rasa tapi pilihan yang diperjuangkan setiap
        hari. Makasii yaww sudah nemenin acu di saat baik maupun buruk. Cintamu
        bukan cuma membuatku bahagia, tapii juga buat aku pengen jadi versi
        terbaik dari diriku.
        <br />
        <br />
        ku harap kita terus bersama — bukan cuma hari ini, tapi{" "}
        <span className="text-pink-500 font-semibold">selamanya</span>.
      </motion.p>

      {/* I Love You Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="mt-10 text-xl sm:text-3xl text-pink-500 font-greatvibes"
      >
        💘 I love you sayaangg 💘
      </motion.div>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={handleNext}
        className="mt-10 px-6 py-2.5 sm:px-8 sm:py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition-all duration-300 text-sm sm:text-base"
      >
        Lanjut ke Galeri 💌
      </motion.button>
    </motion.div>
  );
}
