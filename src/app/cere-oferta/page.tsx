"use client";

import { useState } from "react";
import { useQuote } from "@/context/QuoteContext";
import { supabase } from "@/lib/supabase";

export default function QuotePage() {

  const { items, removeItem, updateQuantity, clearQuote } = useQuote();

  const [loading,setLoading] = useState(false)

  const [form,setForm] = useState({
    name:"",
    phone:"",
    company:"",
    email:"",
    message:"",
    website:"" // honeypot
  })

  const [startTime] = useState(Date.now()) // detect bot submit rapid

  const totalItems = items.reduce((t,i)=>t+i.quantity,0)

  async function handleSubmit(e:any){

    e.preventDefault()

    if(loading) return
    setLoading(true)

    // honeypot anti bot
    if(form.website){
      setLoading(false)
      return
    }

    // bot submit prea rapid
    if(Date.now() - startTime < 3000){
      setLoading(false)
      return
    }

    // rate limit
    const lastSubmit = localStorage.getItem("quote_last_submit")

    if(lastSubmit && Date.now() - Number(lastSubmit) < 10000){
      alert("Te rugăm așteaptă câteva secunde.")
      setLoading(false)
      return
    }

    if(items.length === 0){
      alert("Nu ai selectat produse.")
      setLoading(false)
      return
    }

    const cleanName = form.name.trim()
    const cleanCompany = form.company.trim()
    const cleanEmail = form.email.trim()
    const cleanMessage = form.message.trim()
    const cleanPhone = form.phone.replace(/\D/g,"")

    if(cleanName.length < 2 || cleanName.length > 120){
      alert("Numele nu este valid.")
      setLoading(false)
      return
    }

    if(cleanMessage.length > 1000){
      alert("Mesajul este prea lung.")
      setLoading(false)
      return
    }

    if(!/^[0-9]{8,15}$/.test(cleanPhone)){
      alert("Număr de telefon invalid.")
      setLoading(false)
      return
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)){
      alert("Email invalid.")
      setLoading(false)
      return
    }

    try {

      const {error} = await supabase
        .from("quote_requests")
        .insert([{
          name:cleanName,
          phone:cleanPhone,
          company:cleanCompany,
          email:cleanEmail,
          message:cleanMessage,
          products:items
        }])

      if(error){
        console.error(error)
        alert("A apărut o eroare.")
        setLoading(false)
        return
      }

      localStorage.setItem("quote_last_submit",String(Date.now()))

      clearQuote()

      alert("Cererea a fost trimisă!")

      setForm({
        name:"",
        phone:"",
        company:"",
        email:"",
        message:"",
        website:""
      })

    } catch(err){
      console.error(err)
      alert("Eroare la trimitere.")
    }

    setLoading(false)
  }

  return (
    <main className="relative min-h-screen">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/quote-bg.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-6">

        <h1 className="text-3xl md:text-4xl text-center font-bold text-white mb-4">
          Cere ofertă
        </h1>

        <p className="text-center text-white/90 mb-10 md:mb-16 max-w-xl mx-auto">
          Selectează produsele dorite și trimite o cerere de ofertă.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

          {/* PRODUSE SELECTATE */}

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-lg md:text-xl font-semibold text-black">
                Produse selectate
              </h2>

              <span className="text-sm text-black font-medium">
                {totalItems} produse
              </span>

            </div>

            <div className="space-y-4">

              {items.map((p)=>(
                <div
                  key={p.id}
                  className="flex gap-4 border border-gray-200 rounded-xl p-4"
                >

                  {p.image && (
                    <img
                      src={p.image}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg bg-gray-100"
                    />
                  )}

                  <div className="flex-1">

                    <p className="font-semibold text-black mb-2">
                      {p.name}
                    </p>

                    <div className="flex items-center gap-3">

                      <button
                        onClick={()=>updateQuantity(p.id,Math.max(1,p.quantity-1))}
                        className="w-8 h-8 bg-gray-200 text-black rounded-md"
                      >
                        -
                      </button>

                      <span className="font-semibold text-black w-6 text-center">
                        {p.quantity}
                      </span>

                      <button
                        onClick={()=>updateQuantity(p.id,p.quantity+1)}
                        className="w-8 h-8 bg-gray-200 text-black rounded-md"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <button
                    onClick={()=>removeItem(p.id)}
                    className="text-sm text-red-600 font-medium"
                  >
                    Elimină
                  </button>

                </div>
              ))}

              {items.length===0 && (
                <p className="text-black text-sm">
                  Nu ai selectat produse.{" "}
                  <a href="/produse" className="text-blue-600 font-semibold">
                    Vezi produsele
                  </a>
                </p>
              )}

            </div>

            {items.length>0 && (
              <button
                onClick={()=>{
                  if(confirm("Golești întreaga cerere?")){
                    clearQuote()
                  }
                }}
                className="text-sm text-red-600 mt-6 font-semibold"
              >
                Golește cererea
              </button>
            )}

          </div>

          {/* FORMULAR */}

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">

            <h2 className="text-lg md:text-xl font-semibold text-black mb-6">
              Date de contact
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">

              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e)=>setForm({...form,website:e.target.value})}
                className="hidden"
                autoComplete="off"
              />

              <input
                required
                placeholder="Nume"
                value={form.name}
                className="w-full border border-gray-300 p-3 rounded-lg text-black"
                onChange={(e)=>setForm({...form,name:e.target.value})}
              />

              <input
                required
                placeholder="Telefon"
                value={form.phone}
                className="w-full border border-gray-300 p-3 rounded-lg text-black"
                onChange={(e)=>setForm({...form,phone:e.target.value.replace(/\D/g,"")})}
              />

              <input
                placeholder="Firmă"
                value={form.company}
                className="w-full border border-gray-300 p-3 rounded-lg text-black"
                onChange={(e)=>setForm({...form,company:e.target.value})}
              />

              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                className="w-full border border-gray-300 p-3 rounded-lg text-black"
                onChange={(e)=>setForm({...form,email:e.target.value})}
              />

              <textarea
                rows={4}
                placeholder="Mesaj"
                value={form.message}
                className="w-full border border-gray-300 p-3 rounded-lg text-black"
                onChange={(e)=>setForm({...form,message:e.target.value})}
              />

              <button
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
              >
                {loading ? "Se trimite..." : "Trimite cererea de ofertă"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}