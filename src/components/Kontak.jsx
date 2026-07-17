import { useState } from "react";
import { WHATSAPP_NUMBER, GMAIL_TO } from "../data/config";
import { useLanguage } from "../i18n/useLanguage.js";

export default function Kontak() {
  const { t } = useLanguage();
  const k = t.kontak;

  const [form, setForm] = useState({ nama: "", jenis: "Website", pesan: "" });
  // Confirmation text is tracked but its display below is currently disabled.
  const [, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.nama.trim() || !form.pesan.trim()) return;

    const message = k.waMessage(form.nama, form.jenis, form.pesan);
    const subject = k.gmailSubject(form.jenis, form.nama);
    const body = k.gmailBody(form.nama, form.jenis, form.pesan);

    // 1) Buka WhatsApp dengan pesan otomatis ke nomor tujuan
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");

    // 2) Buka Gmail compose dengan subjek & isi otomatis
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      GMAIL_TO,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");

    setStatus(k.statusSent);
  }

  return (
    <section id="kontak">
      <div className="wrap contact-wrap">
        <div className="contact-copy">
          <span className="eyebrow">{k.eyebrow}</span>
          <h2>{k.heading}</h2>
          <p>{k.desc}</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary">
            {k.chatWhatsapp}
          </a>
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="namaInput">{k.labelName}</label>
              <input
                id="namaInput"
                type="text"
                placeholder={k.placeholderName}
                required
                value={form.nama}
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="jenisInput">{k.labelProjectType}</label>
              <select
                id="jenisInput"
                value={form.jenis}
                onChange={(e) => setForm({ ...form, jenis: e.target.value })}>
                <option value="Website">{k.optionWebsite}</option>
                {/* <option value="Aplikasi Android">{k.optionAndroid}</option>
                <option value="Keduanya">{k.optionBoth}</option> */}
              </select>
            </div>
            <div className="field">
              <label htmlFor="pesanInput">{k.labelMessage}</label>
              <textarea
                id="pesanInput"
                placeholder={k.placeholderMessage}
                required
                value={form.pesan}
                onChange={(e) => setForm({ ...form, pesan: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}>
              {k.submit}
            </button>
            <p className="form-note">
              {k.formNotePre} {WHATSAPP_NUMBER} {k.formNotePost}
            </p>
            {/* {status && <p className="send-status">{status}</p>} */}
          </form>
        </div>
      </div>
    </section>
  );
}
