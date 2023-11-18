import React from "react";
import AccordionPane, {
  AccordionPaneSegment,
} from "../AccordionPane/AccordionPane";
import OpenBibleImage from "../OpenBibleImage/OpenBibleImage";
import StonePane from "../StonePane/StonePane";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <ContactAccordion />
      {/* <ContactUsFormPane /> */}
    </div>
  );
};

const ContactUsForm = () => {
  return (
    <div className="flex flex-col bg-white p-[5%] border-[9px solid #f2f2f2]">
      <script src="https://www.google.com/recaptcha/api.js" async />
      <form className="flex flex-col" method="post" id="reused_form">
        <label className="font-bold" htmlFor="name">
          Your Name:
        </label>
        <input
          className={styles.input}
          id="name"
          type="text"
          name="Name"
          required
          maxLength={50}
        />
        <label className="font-bold" htmlFor="email">
          Email Address:
        </label>
        <input
          className={styles.input}
          id="email"
          type="email"
          name="Email"
          required
          maxLength={50}
        />
        <label className="font-bold" htmlFor="message">
          Message:
        </label>
        <textarea
          className={styles.input}
          id="message"
          name="Message"
          rows={6}
          maxLength={6000}
          required
        ></textarea>

        <p className="text-center">
          <b>Please confirm you are an actual person.</b>
          <div
            className="relative float-right g-recaptcha"
            data-sitekey="6LfxhbAaAAAAAKbhqq6fgD8DdLHeFrda6Gq4-Hf2"
          ></div>
          <br />
          &nbsp;
        </p>

        <button
          className="bg-primary text-white w-1/2 text-center mx-auto"
          type="submit"
        >
          Submit Your Message to Us
        </button>
      </form>
      <div className="hidden" id="success_message">
        <p className="text-center text-md pt-2 accordion-text">
          <b>Your Message Has Been Sent!</b>
        </p>
        <p className="text-center accordion-text">
          <b>We&apos;ll get back to you soon.</b>
        </p>
      </div>

      <div className="hidden w-full h-full" id="error_message">
        <h3>Error</h3> Please confirm you are not a robot.
      </div>
    </div>
  );
};

const ContactUsFormPane = () => {
  return (
    <StonePane>
      <div className="text-xl text-center font-bold ">
        <div className="text-white shadowText mb-3.5">How Can We Help You?</div>
        <div className="separator-bar opacity-50 mb-3" />
        <div className="text-white shadowText text-sm font-normal whitespace-nowrap mb-3">
          <span className="font-bold">
            Send us a note and we&apos;ll respond as soon as possible.
          </span>
        </div>
      </div>
      <ContactUsForm />
    </StonePane>
  );
};
const ContactAccordion = () => {
  return (
    <AccordionPane>
      <AccordionPaneSegment heading="Contact Us" defaultOpen={true}>
        <span className="dropCap">T</span>o get in touch with us use the contact
        form on this page, call, or e-mail one of the numbers or addresses
        below.
        <div className="relative pl-4 pt-6">
          <div className="text-primary text-lg font-bold">Phone Numbers</div>
          <div className="pl-4">
            <span className="font-bold">Building: </span>(806) 352-2809
          </div>
          <div className="pl-4">
            <span className="font-bold">Kyle Pope: </span>(806) 341-1686
          </div>

          <div className="text-primary text-lg font-bold mt-2">
            E-Mail Elders
          </div>
          <div className="pl-4 font-bold">Patrick Ledbetter:</div>
          <div className="pl-4">pledbetter@olsenpark.com</div>
          <div className="pl-4 font-bold">Brady McAlister:</div>
          <div className="pl-4">bmcalister@olsenpark.com</div>
          <div className="pl-4 font-bold">Jeff Nunn:</div>
          <div className="pl-4">jnunn@olsenpark.com</div>

          <div className="text-primary text-lg font-bold mt-2">
            E-Mail Elders
          </div>
          <div className="pl-4 font-bold">Austin Byers:</div>
          <div className="pl-4">austintb423@gmail.com</div>
          <div className="pl-4 font-bold">Kyle Pope:</div>
          <div className="pl-4">kpope@olsenpark.com</div>

          <OpenBibleImage />
        </div>
      </AccordionPaneSegment>
    </AccordionPane>
  );
};

export default Contact;
