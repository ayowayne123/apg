"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

function DetailsGallery({ gallery }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [direction, setDirection] = useState(0);

  const handleOpen = (index) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);

  const handleNext = (e) => {
    e?.stopPropagation();
    setDirection(1);
    setSelectedIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setDirection(-1);
    setSelectedIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Handle swipe gestures
  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -1000) {
      handleNext();
    } else if (swipe > 1000) {
      handlePrev();
    }
  };

  const extraCount = gallery.length > 5 ? gallery.length - 5 : 0;
  const displayGallery = gallery.length > 5 ? gallery.slice(0, 5) : gallery;

  return (
    <section className="lg:mt-10 mt-6">
      <h3 className="text-primary font-bold text-xl lg:text-2xl xl:text-[32px] tracking-tighter lg:-tracking-[1.9px]">
        Featured Gallery
      </h3>

      {/* ========== Layouts ========== */}

      {/* 1 image */}
      {gallery.length === 1 && (
        <div
          className="mt-6 relative w-full lg:h-[600px] h-[450px] rounded-xl overflow-hidden cursor-pointer"
          onClick={() => handleOpen(0)}
        >
          <Image
            src={gallery[0]?.url}
            alt="house"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* 2 images */}
      {gallery.length === 2 && (
        <div className="mt-6 grid grid-cols-2 gap-4 lg:h-[600px] h-[450px]">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(i)}
            >
              <Image src={img?.url} alt="house" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* 3 images */}
      {gallery.length === 3 && (
        <div className="mt-6 grid md:grid-cols-3 gap-4 lg:h-[600px] h-[450px]">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(i)}
            >
              <Image src={img?.url} alt="house" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* 4 images */}
      {gallery.length === 4 && (
        <div className="mt-6 grid grid-cols-2 gap-4 lg:h-[600px] h-[450px]">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(i)}
            >
              <Image src={img?.url} alt="house" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* 5 images — your original layout */}
      {gallery.length === 5 && (
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 h-[450px] lg:h-[600px] gap-2 lg:gap-4">
          <div className="lg:h-full h-[250px] flex flex-col space-y-2 lg:space-y-4">
            <div
              className="relative w-full h-3/5 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(0)}
            >
              <Image
                src={displayGallery[0]?.url}
                alt="house"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="relative w-full h-2/5 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(1)}
            >
              <Image
                src={displayGallery[1]?.url}
                alt="house"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:h-full h-[250px] flex flex-col space-y-2 lg:space-y-4">
            <div
              className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(2)}
            >
              <Image
                src={displayGallery[2]?.url}
                alt="house"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:h-full h-[200px] flex lg:flex-col space-y-2 lg:space-y-4 space-x-2 col-span-2 lg:col-span-1">
            <div
              className="relative w-full lg:h-2/5 h-full rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(3)}
            >
              <Image
                src={displayGallery[3]?.url}
                alt="house"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="relative w-full lg:h-3/5 h-full rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(4)}
            >
              <Image
                src={gallery[4]?.url}
                alt="house"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* more than 5 */}
      {gallery.length > 5 && (
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 h-[450px] lg:h-[600px] gap-2 lg:gap-4">
          <div className="lg:h-full h-[250px] flex flex-col space-y-2 lg:space-y-4">
            <div
              className="relative w-full h-3/5 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(0)}
            >
              <Image
                src={displayGallery[0]?.url}
                alt="house"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="relative w-full h-2/5 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(1)}
            >
              <Image
                src={displayGallery[1]?.url}
                alt="house"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:h-full h-[250px] flex flex-col space-y-2 lg:space-y-4">
            <div
              className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(2)}
            >
              <Image
                src={displayGallery[2]?.url}
                alt="house"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:h-full h-[200px] flex lg:flex-col space-y-2 lg:space-y-4 space-x-2 col-span-2 lg:col-span-1">
            <div
              className="relative w-full lg:h-2/5 h-full rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(3)}
            >
              <Image
                src={displayGallery[3]?.url}
                alt="house"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="relative w-full lg:h-3/5 h-full rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpen(4)}
            >
              <Image
                src={displayGallery[4]?.url}
                alt="house"
                fill
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black/50">
                +{extraCount}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== Lightbox with Swipe ========== */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-6 text-white hover:text-gray-300"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Draggable Image */}
            <motion.img
              key={gallery[selectedIndex]?.url}
              src={gallery[selectedIndex]?.url}
              alt="Slide"
              className="max-w-[95vw] max-h-[90vh] rounded-xl object-contain"
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
            />

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-6 text-white hover:text-gray-300"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default DetailsGallery;
