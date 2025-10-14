export default function ContactPage() {
    return (
      <main className="min-h-screen bg-[#FFFDE7]">
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif mb-6 text-center text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-800 max-w-2xl mx-auto text-center mb-12">
            Have a question or a submission inquiry? 
            We’d love to hear from you. Fill out the form below and we’ll get back to you as soon as possible.
          </p>
  
          {/* Contact Form */}
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#FFFDE7] text-gray-900
                           focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white"
              />
            </div>
  
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#FFFDE7] text-gray-900
                           focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white"
              />
            </div>
  
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#FFFDE7] text-gray-900
                           focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#636B2F] text-[#FFFDE7] px-6 py-3 rounded-lg hover:bg-[#FDE68A] hover:text-black transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>
    );
  }