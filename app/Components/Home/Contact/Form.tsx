"use client";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  services: string[];
};

const servicesList: string[] = [
  "Web Development",
  "Software Development",
  "Support & Maintenance",
  "Consulting",
  "UI/UX Design",
  "Outsourcing Solutions",
  "Videography",
  "Photoshoot",
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    services: [],
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(service);
      return {
        ...prev,
        services: isSelected
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-20 w-[90%] lg:w-[75%] m-auto">
      <form className=" text-white font-sans  basis-full lg:basis-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            name="name"
            className="bg-[#1a2235] p-3 rounded w-full outline-none"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            name="email"
            className="bg-[#1a2235] p-3 rounded w-full outline-none"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            name="phone"
            className="bg-[#1a2235] p-3 rounded w-full outline-none"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            name="company"
            className="bg-[#1a2235] p-3 rounded w-full outline-none"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>

        <p className="mb-2 text-sm text-gray-400">Requesting services:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {servicesList.map((service) => (
            <label
              key={service}
              className="flex items-center space-x-2 text-sm"
            >
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => toggleService(service)}
                className="accent-blue-500 bg-[#1a2235] border border-gray-600"
              />
              <span>{service}</span>
            </label>
          ))}
        </div>

        <textarea
          name="message"
          className="bg-[#1a2235] p-3 rounded w-full h-32 outline-none resize-none"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-[#1a2235] font-semibold p-3 mt-2 rounded w-full outline-none transition duration-300 hover:bg-gradient-to-br from-[#04142c] via-[#003366] to-[#1D2E42] hover:shadow-[0_0_10px_rgba(0,116,228,0.5)] transform origin-center"
        >
          Send!
        </button>
      </form>

      <div className="basis-full lg:basis-1/2 relative">
        <h2 className="text-3xl lg:text-5xl font-black tracking-tighter my-6 md:mt-0">
          North Macedonia
        </h2>
        <p className="text-xl lg:text-2xl font-semibold tracking-tighter">
          Belgradska 16, Gevgelija, N.Macedonia
        </p>
        <a href="mailto:info@zicgroupbpo.com" className="block">
          Mail us at:{" "}
          <span className="text-textMain">info@zicgroupbpo.com</span>{" "}
        </a>
        <a href="tel:+38978728336">
          Or talk to us at:{" "}
          <span className="text-textMain">+389 78 728 336</span>
        </a>

        <Image
          style={{ zIndex: 9 }}
          className="absolute hidden lg:block opacity-25 bottom-0 right-0"
          src={"/SVG/ZicTrademark.png"}
          alt="Zic Trademark Logo"
          width={350}
          height={300}
        />
      </div>
    </div>
  );
};

export default ContactForm;
