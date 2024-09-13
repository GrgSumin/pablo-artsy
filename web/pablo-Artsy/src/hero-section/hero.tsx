import Title from "../component/title";
import Button from "../component/button";
import Footer from "../component/footer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Correct import

const details = [
  {
    title: "Collect Works by Renowned Artists",
    description:
      "Register to receive notifications about new works, market news, and more",
    imageUrl: "/image1.png",
  },
  {
    title: "Browse by Collection",
    description:
      "From legendary artist series to new trends, curated collections of works are available for purchase.",
    imageUrl: "/image2.png",
  },
  {
    title: "Discover Artist Throughout Nepal",
    description:
      "Explore new talent from all over Nepal. Join us to support and connect with emerging artists.",
    imageUrl: "/image3.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <motion.div
        className="bg-[#F5F7F9] px-10 py-5 flex-grow"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between">
          <Title />
          <div className="flex gap-4">
            <Button
              label="Sign Up"
              variant="white"
              textColor="text-black"
              classname="w-28"
            />
            <Button
              label="Login"
              variant="primary"
              textColor="text-white"
              classname="w-28"
            />
          </div>
        </div>
        <motion.div
          className="bg-[#DADCE0] mt-10 py-6 px-5 rounded-lg flex"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Art is the Soul of Life</h1>
            <h1 className="w-[40%]">
              Art is a universal language that transcends boundaries and
              connects people. Through Pablo Artsy, you can explore a diverse
              range of art forms, express your creativity, and find the perfect
              pieces to enrich your life.
            </h1>
            <div className="flex gap-4">
              <Button
                label="Explore Now"
                textColor="text-white font-semibold"
                classname="w-28 h-10 py-5 bg-[#4267B2]"
              />
              <Button
                label="Learn More"
                variant="white"
                textColor="text-black font-semibold"
                classname="w-28 h-10 py-5"
              />
            </div>
            <h1 className="font-bold text-xl">Join as _______</h1>
            <div className="flex gap-4">
              <h1>collector</h1>
              <h1>Artist</h1>
            </div>
          </div>
          <img src="/Making.png" alt="Making" className="w-72 h-72" />
        </motion.div>
        <div className="mt-10">
          {details.map((item, index) => {
            const controls = useAnimation();
            const { ref, inView } = useInView({
              triggerOnce: true, // Trigger animation only once
              threshold: 0.1, // Adjust this value as needed
            });

            if (inView) {
              controls.start("visible");
            }

            return (
              <motion.div
                key={index}
                ref={ref}
                className={`flex items-center gap-6 ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                }`}
                initial="hidden"
                animate={controls}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-72 h-52"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Hero;
