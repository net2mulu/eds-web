export default function ContactMap() {
  return (
    <div className="w-full h-[500px] bg-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5384009395247!2d38.76006!3d9.0204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sKazanchis%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ethiopian Diaspora Service Office Location"
        aria-label="Map showing the location of Ethiopian Diaspora Service Office in Kazanchis, Addis Ababa"
      ></iframe>
    </div>
  );
}
