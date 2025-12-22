"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: Date | null;
  venue: string;
  eventDetails: string;
  referral: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: null,
    venue: "",
    eventDetails: "",
    referral: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({ ...prev, eventDate: date }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="w-20 h-20 rounded-full bg-[#4A5D4E] flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-[#FDFCF0]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-serif text-[#2D2D2D] mb-4">Thank You!</h3>
        <p className="text-lg text-[#2D2D2D]/70 max-w-md mx-auto">
          Your inquiry has been received. I&apos;ll be in touch within 24-48
          hours to discuss your floral dreams!
        </p>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full px-4 py-4 bg-[#FDFCF0] border border-[#B8AFA6]/50 focus:border-[#4A5D4E] outline-none transition-colors duration-300 text-[#2D2D2D] placeholder:text-[#B8AFA6]";
  const labelClasses =
    "block text-sm uppercase tracking-[0.15em] text-[#4A5D4E] mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            First Name <span className="text-[#C9A9A6]">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Last Name <span className="text-[#C9A9A6]">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Your last name"
          />
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-[#C9A9A6]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="text-[#C9A9A6]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      {/* Event Date - Date Picker */}
      <div>
        <label htmlFor="eventDate" className={labelClasses}>
          Event Date <span className="text-[#C9A9A6]">*</span>
        </label>
        <DatePicker
          selected={formData.eventDate}
          onChange={handleDateChange}
          minDate={new Date()}
          placeholderText="Select your event date"
          className={inputClasses}
          dateFormat="MMMM d, yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          required
        />
        <p className="mt-2 text-xs text-[#B8AFA6]">
          Check availability for your desired date
        </p>
      </div>

      {/* Venue */}
      <div>
        <label htmlFor="venue" className={labelClasses}>
          Venue <span className="text-[#C9A9A6]">*</span>
        </label>
        <input
          type="text"
          id="venue"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder="Where is your event taking place?"
        />
      </div>

      {/* Event Details */}
      <div>
        <label htmlFor="eventDetails" className={labelClasses}>
          Tell Me About Your Event <span className="text-[#C9A9A6]">*</span>
        </label>
        <textarea
          id="eventDetails"
          name="eventDetails"
          value={formData.eventDetails}
          onChange={handleChange}
          required
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Share your vision for your florals, color palette, style preferences, and any other details..."
        />
      </div>

      {/* Referral */}
      <div>
        <label htmlFor="referral" className={labelClasses}>
          How Did You Hear About Me?
        </label>
        <select
          id="referral"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          className={`${inputClasses} cursor-pointer`}
        >
          <option value="">Select an option</option>
          <option value="instagram">Instagram</option>
          <option value="pinterest">Pinterest</option>
          <option value="google">Google Search</option>
          <option value="referral">Friend/Family Referral</option>
          <option value="vendor">Vendor Referral</option>
          <option value="wedding-wire">Wedding Wire</option>
          <option value="the-knot">The Knot</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-5 bg-[#4A5D4E] text-[#FDFCF0] text-sm uppercase tracking-[0.2em] hover:bg-[#C9A9A6] transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <motion.span
              className="w-4 h-4 border-2 border-[#FDFCF0] border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            Sending...
          </span>
        ) : (
          "Submit Inquiry"
        )}
      </motion.button>

      <p className="text-center text-sm text-[#B8AFA6]">
        I typically respond within 24-48 hours
      </p>
    </form>
  );
}
