import "./Contact.css";

export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fecf2c6e-e75f-4eb6-8511-4e99ab99a04a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1> Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1> let's talk</h1>
          <p>hello</p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>ritikarivedi33@gmail.com</p>
            </div>

            <div className="contact-detail">
              <p>9173741445</p>
            </div>

            <div className="contact-detail">
              <p>Gujarat,India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
          ></input>
          <label htmlFor="">write your Message here</label>
          <textarea
            name="message "
            rows="8"
            placeholder="Enter your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};
