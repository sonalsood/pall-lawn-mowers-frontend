import { useState } from "react";
import emailjs from "emailjs-com";
import Logo from "../../assets/images/logo_1.png";
import "./QuoteForm.scss";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    services: [],
    otherService: "",
    propertyType: "",
    date: "",
    details: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((s) => s !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    const templateParams = {
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      services: formData.services.join(", "),
      other_service: formData.otherService,
      property_type: formData.propertyType,
      date: formData.date,
      details: formData.details,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => {
        setStatus(
          "Your request has been sent successfully! We’ll get back to you within 1 business day."
        );
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          services: [],
          otherService: "",
          propertyType: "",
          date: "",
          details: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("There was an error sending your request.");
      });
  };

  return (
    <section className="form-section">
      <div className="form-heading">
        <div className="form-heading__img-container">
          <img className="form-heading__img" src={Logo} alt="website-icon" />
        </div>
        <h2 className="form-heading__text">Consult with Our Specialists </h2>
        <p className="form-heading__sub-text">
          Let's discuss your project and recieve a custom quote.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__row">
          <div className="form__field">
            <label className="form__label" htmlFor="fname">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="e.g., John"
              className="form__input"
              value={formData.fname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="lname">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="e.g., Doe"
              className="form__input"
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form__row">
          <div className="form__field">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g., john.doe@example.com"
              className="form__input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="e.g., 555-123-4567"
              className="form__input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form__row">
          <div className="form__field">
            <label className="form__label" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="e.g., 123 Main St."
              className="form__input"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="e.g., Toronto"
              className="form__input"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <label className="form__label">Service Type</label>
        <div className="form__checkbox-group">
          {[
            "Lawn Mowing",
            "Spring Yard Cleanup",
            "Fall Yard Cleanup",
            "Landscaping Design",
            "Property Renovation",
            "Snow Removal",
            "Seasonal Maintenance",
            "Other",
          ].map((service) => (
            <label key={service} className="form__checkbox-label">
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleServiceChange}
              />
              <span>{service}</span>
            </label>
          ))}

          {formData.services.includes("Other") && (
            <input
              type="text"
              name="otherService"
              placeholder="Please specify"
              value={formData.otherService}
              onChange={handleChange}
              className="form__input"
            />
          )}
        </div>

        <div className="form__row">
          <div className="form__field">
            <label className="form__label" htmlFor="propertyType">
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              className="form__input form__select"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="">Select a property type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="date">
              When do you need this service?
            </label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="yyyy-mm-dd"
              className="form__input form__select"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        <label className="form__label" htmlFor="details">
          Tell us more about what you need
        </label>
        <textarea
          id="details"
          name="details"
          rows="4"
          placeholder="e.g., We need weekly lawn mowing and hedge trimming throughout the summer."
          className="form__input"
          value={formData.details}
          onChange={handleChange}
        ></textarea>

        {status && <p className="form__status">{status}</p>}

        <button type="submit" className="form__button">
          Get My Quote
        </button>
      </form>
    </section>
  );
};

export default QuoteForm;
