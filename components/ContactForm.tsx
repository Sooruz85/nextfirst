"use client";

const ContactForm: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <form className={`w-full max-w-lg bg-white p-6 rounded-lg shadow-md ${className}`}>
      <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>
      <label htmlFor="name" className="block text-sm font-medium mb-2">
        Nom
      </label>
      <input
        id="name"
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
      />
      <label htmlFor="email" className="block text-sm font-medium mb-2">
        Email
      </label>
      <input
        id="email"
        type="email"
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
      />
      <label htmlFor="message" className="block text-sm font-medium mb-2">
        Message
      </label>
      <textarea
        id="message"
        rows={5}
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
      ></textarea>
      <button
        type="submit"
        className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
      >
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
