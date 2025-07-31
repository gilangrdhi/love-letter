import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CommitForm() {
  const [noSize, setNoSize] = useState(1);
  const [showHearts, setShowHearts] = useState(false);
  const [hideYes, setHideYes] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleYes = () => {
    setHideYes(true);
    setShowHearts(true);

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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-white to-pink-200 overflow-hidden px-4">
      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-lg border-4 border-dashed border-gray-300 font-serif overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              style={{
                backgroundImage: `linear-gradient(white 95%, #f3f3f3 5%)`,
                backgroundSize: `100% 40px`,
                backgroundRepeat: "repeat-y",
                lineHeight: "2rem",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-3 text-pink-500 hover:text-pink-700 text-xl"
                aria-label="Tutup surat"
              >
                ✖
              </button>

              <h2 className="text-xl sm:text-2xl font-bold text-pink-700 mb-4 text-center font-cursive">
                Untuk kamu yang selalu spesial 💖
              </h2>

              <div className="text-sm sm:text-base text-gray-700 text-justify leading-relaxed px-1 space-y-4">
                <p>
                  Dari semua hal indah yang pernah aku temui dalam hidup... kamu
                  adalah yang paling aku syukuri. 🌷
                </p>
                <p>
                  Setiap detik bersamamu bikin dunia terasa lebih hangat. Tawa
                  kamu, cara kamu lihat aku, semua itu terasa seperti
                  rumah—tenang dan tulus.
                </p>
                <p>
                  Aku nggak cuma suka kamu, aku mengagumimu. Dari cara kamu
                  berpikir, sampai hal-hal kecil yang mungkin nggak kamu sadari,
                  semua itu bikin aku jatuh cinta setiap hari.
                </p>
                <p>
                  Kamu bukan hanya seseorang yang aku sayang. Kamu adalah alasan
                  kenapa aku ingin jadi versi terbaik dari diriku sendiri.
                </p>
                <p>
                  Di hari spesial ini, aku cuma mau bilang: kamu itu anugerah.
                  Dan kalau kamu mau, aku ingin jalanin hari-hari ke depan...
                  bareng kamu. 💫
                </p>
                <p>
                  I want <strong>you</strong> to be mine — today, tomorrow, and
                  always. 💗
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Love particles */}
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
        className="w-48 sm:w-64 h-auto rounded-xl shadow-md mb-6"
      />

      <motion.div
        className="flex items-center justify-center gap-2 sm:gap-4 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-pink-700 text-center font-serif">
          Will You Be My Girlfriend?
        </h1>
      </motion.div>

      <motion.p
        className="text-base sm:text-lg text-pink-600 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Jawab jujur ya sayangg... aku serius nih 😳
      </motion.p>

      <div className="flex gap-6 sm:gap-10 items-center justify-center flex-wrap">
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
              className="bg-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl rounded-full shadow-xl hover:bg-pink-700 relative overflow-hidden"
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
          className="bg-white text-pink-500 border-2 border-pink-300 px-6 py-3 rounded-full text-lg sm:text-xl transition disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={noSize < 0.12}
        >
          Tidak 🙈
        </motion.button>
      </div>
    </div>
  );
}
