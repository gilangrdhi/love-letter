import { motion } from "framer-motion";

const floatingImages = [
  { src: "/img/love1.jpg", top: "5%", left: "5%", delay: 0 },
  { src: "/img/love2.jpg", top: "10%", right: "8%", delay: 0.5 },
  { src: "/img/love3.jpg", bottom: "12%", left: "10%", delay: 1 },
  { src: "/img/love4.jpg", bottom: "10%", right: "10%", delay: 1.5 },
  { src: "/img/love5.jpg", top: "50%", left: "2%", delay: 2 },
  { src: "/img/love6.jpg", bottom: "50%", right: "2%", delay: 2.5 },
];

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut",
    },
  },
};

export default function FinalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Floating Images */}
      {floatingImages.map((img, i) => (
        <motion.img
          key={i}
          src={img.src}
          className="absolute object-cover opacity-60 shadow-xl border border-white"
          style={{
            top: img.top,
            bottom: img.bottom,
            left: img.left,
            right: img.right,
            width: "18vw",
            maxWidth: "80px",
            height: "auto",
            borderRadius: "0.75rem",
          }}
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: img.delay }}
        />
      ))}

      {/* Judul */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold text-pink-700 mb-4 text-center drop-shadow-lg z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        💍 Apipii Assksk 💍
      </motion.h1>

      {/* Pesan Cinta */}
      <motion.p
        className="text-base sm:text-xl text-center text-pink-700 max-w-xl px-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Makasih ya udah bilang <span className="font-semibold">“iya”</span>...
        AKSKSKSKSK makasii yaa udah nemenin aku tiap malem. Sabar hadepin moodswing dan awasin tiap malem, akuu harap hubungan ini ga bakal selesai  💖✨
        <br />
        <br />
        "Falling in love with you is one of the best things that ever happened in my life."
      </motion.p>

      {/* Tanggal */}
      <motion.div
        className="mt-6 text-pink-600 text-sm sm:text-base italic z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        📅 Dimulai pada: <span className="font-semibold">1 Agustus 2025</span>
      </motion.div>

      {/* Floating Emoji Hearts */}
      {["💖", "💗", "💘", "💕", "💞"].map((emoji, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl sm:text-4xl opacity-30 animate-pulse z-0"
          style={{
            top: `${Math.random() * 80 + 5}%`,
            left: `${Math.random() * 80 + 5}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1 + index * 0.3, duration: 1 }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
}
