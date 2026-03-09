"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Contact",
  description:
    "Contactează NextShop pentru oferte și informații despre mobilier comercial pentru magazine.",
};

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-600" fill="none">
      <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-600" fill="none">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L9 10.4a16 16 0 0 0 4.6 4.6l1.0-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-600" fill="none">
      <path d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2"/>
      <path d="m22 8-10 7L2 8" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    website:"" // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [startTime] = useState(Date.now());

  async function handleSubmit(e:any) {

    e.preventDefault();

    if(loading) return;

    setLoading(true);

    // honeypot
    if(form.website){
      setLoading(false);
      return;
    }

    // bot submit prea rapid
    if(Date.now() - startTime < 3000){
      setLoading(false);
      return;
    }

    // rate limit
    const lastSubmit = localStorage.getItem("contact_last_submit");

    if(lastSubmit && Date.now() - Number(lastSubmit) < 10000){
      alert("Te rugăm așteaptă câteva secunde.");
      setLoading(false);
      return;
    }

    const cleanName = form.name.trim();
    const cleanEmail = form.email.trim();
    const cleanMessage = form.message.trim();
    const cleanPhone = form.phone.replace(/\D/g,"");

    if(cleanName.length < 2 || cleanName.length > 120){
      alert("Numele nu este valid.");
      setLoading(false);
      return;
    }

    if(!/^[0-9]{8,15}$/.test(cleanPhone)){
      alert("Număr de telefon invalid.");
      setLoading(false);
      return;
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)){
      alert("Email invalid.");
      setLoading(false);
      return;
    }

    if(cleanMessage.length > 1000){
      alert("Mesajul este prea lung.");
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from("contact_requests")
      .insert([{
        name:cleanName,
        phone:cleanPhone,
        email:cleanEmail,
        message:cleanMessage
      }]);

    setLoading(false);

    if (error) {
      alert("A apărut o eroare la trimitere.");
      return;
    }

    localStorage.setItem("contact_last_submit",String(Date.now()));

    alert("Mesajul a fost trimis!");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
      website:""
    });
  }

  return (
    <main className="bg-white min-h-screen py-16 md:py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 md:mb-16">

          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contact
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto">
            Ai întrebări despre produsele noastre sau dorești o ofertă personalizată?
            Trimite-ne un mesaj și îți răspundem cât mai curând.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* honeypot */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e)=>setForm({...form,website:e.target.value})}
                className="hidden"
                autoComplete="off"
              />

              <div>
                <label className="block mb-2 font-semibold text-black">
                  Nume și prenume
                </label>

                <input
                  required
                  value={form.name}
                  className="w-full border border-gray-200 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Ex: Andrei Popescu"
                  onChange={(e)=>setForm({...form,name:e.target.value})}
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-black">
                  Telefon
                </label>

                <input
                  required
                  value={form.phone}
                  className="w-full border border-gray-200 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="07xx xxx xxx"
                  onChange={(e)=>setForm({...form,phone:e.target.value.replace(/\D/g,"")})}
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-black">
                  Email
                </label>

                <input
                  type="email"
                  required
                  value={form.email}
                  className="w-full border border-gray-200 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="nume@firma.ro"
                  onChange={(e)=>setForm({...form,email:e.target.value})}
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-black">
                  Mesaj
                </label>

                <textarea
                  rows={5}
                  value={form.message}
                  className="w-full border border-gray-200 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Spune-ne ce ai nevoie..."
                  onChange={(e)=>setForm({...form,message:e.target.value})}
                />
              </div>

              <button
                disabled={loading}
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                {loading ? "Se trimite..." : "Trimite mesajul"}
              </button>

            </form>

          </div>

          <div className="space-y-10">

            <div>

              <h2 className="text-2xl font-bold text-black mb-6">
                Date de contact
              </h2>

              <div className="space-y-5 text-gray-700">

                <div className="flex items-start gap-3">
                  <IconPin/>
                  <p>Showroom: Zona Metro, Calea București nr. 139, Craiova</p>
                </div>

                <div className="flex items-center gap-3">
                  <IconPhone/>
                  <p>+40 763 990 927</p>
                </div>

                <div className="flex items-center gap-3">
                  <IconMail/>
                  <p>contact@nextshopretail.ro</p>
                </div>

              </div>

            </div>

            <div className="border rounded-2xl overflow-hidden shadow-sm">

              <iframe
                title="Harta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.2603581198393!2d23.897433775660975!3d44.31276006622484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d4235c890917%3A0x68aa176f3d98864a!2sCalea%20Bucure%C8%99ti%20nr%20139%2C%20207450!5e1!3m2!1sen!2sro!4v1773075623526!5m2!1sen!2sro"
                width="100%"
                height="320"
                loading="lazy"
                style={{border:0}}
              />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}