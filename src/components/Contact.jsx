import Reveal from "./Reveal";
import Icon from "./Icon";
import CopyButton from "./CopyButton";
import { contact } from "../data/content";

const digits = (s) => s.replace(/[^\d+]/g, "");

function Line({ label, field, href, icon }) {
  return (
    <div className="contact-line">
      <span>{label}</span>
      <span className="contact-value">
        {href ? (
          <a className="contact-link" href={href}>
            {icon && <Icon name={icon} size={15} />}
            {field.value}
          </a>
        ) : (
          field.value
        )}
        {field.isSample && <span className="placeholder-tag">sample</span>}
        {!field.isSample && <CopyButton value={field.value} label={label} />}
      </span>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <h2>Get in touch</h2>
        </div>
        <div className="contact-grid">
          <Reveal direction="left" className="contact-card">
            <h3>Reach us directly</h3>
            <Line label="Phone" field={contact.phone} href={`tel:${digits(contact.phone.value)}`} icon="phone" />
            <Line label="WhatsApp" field={contact.whatsapp} href={`https://wa.me/${digits(contact.whatsapp.value).replace("+", "")}`} icon="whatsapp" />
            <Line label="Email" field={contact.email} href={`mailto:${contact.email.value}`} icon="mail" />
            <Line label="Hours" field={contact.hours} />
          </Reveal>
          <Reveal direction="right" delay={100} className="contact-card">
            <h3>Godown / office address</h3>
            <Line label="Street" field={contact.addressLine} />
            <div className="contact-line">
              <span>City</span>
              <span className="contact-value">{contact.city}</span>
            </div>
            <Line label="PIN" field={contact.pin} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
