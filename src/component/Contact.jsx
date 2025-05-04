import React from 'react';

function Contact() {
  return (
    <section id="contact" className="mb-5 bg-white py-5">
      <h2 className="text-center fw-bold mb-5">Contact Us</h2>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <form className="p-4 shadow rounded bg-light">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;