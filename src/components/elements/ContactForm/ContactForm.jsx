"use client";

import React from 'react';
import { Send } from 'lucide-react';
import clsx from 'clsx';

import Button from '@/components/elements/Button';
import FormField from '@/components/elements/FormField';
import StatusMessageModal from '@/components/elements/StatusMessageModal';
import { useContactFormLogic } from '@/hooks/useContactFormLogic';

const LoadingSpinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    modalState,
    closeModal,
    shakeKey,
  } = useContactFormLogic();

  return (
    <>
      <div className="max-w-2xl mx-auto p-8 rounded-xl shadow-lg border relative z-20
                      bg-white dark:bg-dark-card dark:border-dark-border-color">
        <form onSubmit={handleSubmit} className="space-y-[18px]" noValidate>
          <FormField
            id="fullName"
            label="Full Name"
            placeholder="Let me know who you are"
            register={register}
            error={errors.fullName}
            shakeKey={shakeKey}
          />

          <FormField
            id="email"
            label="Email Address"
            type="email"
            placeholder="I'll get back to you here"
            register={register}
            error={errors.email}
            shakeKey={shakeKey}
          />

          <FormField
            id="subject"
            label="Subject"
            placeholder="What do you want to talk about?"
            register={register}
            error={errors.subject}
            shakeKey={shakeKey}
          />

          <FormField
            id="message"
            label="Message"
            placeholder="Type your message..."
            register={register}
            error={errors.message}
            shakeKey={shakeKey}
            isTextArea={true}
            rows={5}
          />

          <Button
            type="submit"
            variant="gradient"
            shape="lg"
            isLoading={isSubmitting}
            className="w-full text-paragraph-m md:text-md-paragraph-m lg:text-lg-paragraph-m 2xl:text-2xl-paragraph-m font-inter"
            aria-label={isSubmitting ? "Sending message..." : "Send message"}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <LoadingSpinner />
                <span className="ml-2">Sending Message...</span>
              </span>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>

      <StatusMessageModal
        isOpen={modalState.isOpen}
        message={modalState.message}
        type={modalState.type}
        onClose={closeModal}
      />
    </>
  );
}