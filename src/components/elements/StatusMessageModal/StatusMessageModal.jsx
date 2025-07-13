"use client";

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { CheckCircle, XCircle, X } from 'lucide-react';

export default function StatusMessageModal({ isOpen, message, type, onClose }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleKeydown = (e) => e.key === "Escape" && onClose();

    if (isOpen) {
      document.addEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isMounted) {
    return null;
  }

  const isSuccess = type === 'success';

  // Varian animasi untuk Framer Motion
  const overlayVariants = {
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    hidden: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const modalVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 25, delay: 0.1 },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      y: 20,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };
  
  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 500, damping: 20, delay: 0.3 },
    },
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="status-modal-overlay"
          className="fixed inset-0 flex items-center justify-center z-[9999] p-4 bg-black/60" // Latar belakang disederhanakan
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          onClick={onClose}
        >
          <motion.div
            key="status-modal-content"
            className={clsx(
              "relative p-8 rounded-2xl shadow-2xl max-w-sm w-full",
              "border",
              isSuccess
                ? "bg-gradient-to-br from-white to-green-50 dark:from-dark-card dark:to-green-950/20 border-green-500/50"
                : "bg-gradient-to-br from-white to-red-50 dark:from-dark-card dark:to-red-950/20 border-red-500/50"
            )}
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
            aria-modal="true"
            role="dialog"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Close message"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <motion.div variants={iconVariants}>
                {isSuccess ? (
                  <CheckCircle className="w-16 h-16 text-green-500" />
                ) : (
                  <XCircle className="w-16 h-16 text-red-500" />
                )}
              </motion.div>

              <p className="mt-4 text-lg font-semibold font-poppins text-text-dark dark:text-dark-text-dark">
                {message}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}