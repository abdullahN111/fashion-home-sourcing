"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Sparkles, RefreshCw } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    category: "Woven",
    quantity: "",
    specifications: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate swift inquiry dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      category: "Woven",
      quantity: "",
      specifications: "",
    });
    setSubmitted(false);
  };

  return (
    <div
      className="rounded-3xl p-6 sm:p-10 shadow-xl bg-white"
      style={{ border: "2px solid #C59B27" }}
    >
      <div className="mb-6">
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-2"
          style={{ backgroundColor: "rgba(197,155,39,0.12)", color: "#C59B27" }}
        >
          RFQ Sourcing Form
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1B33]">
          Request a Quotation &amp; Lab Samples
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#0B1B33]/65">
          Fill in your construction requirements below. Our textile merchandising department will review yarn availability and provide detailed FOB/CIF pricing within 24 hours.
        </p>
      </div>

      {submitted ? (
        <div
          className="rounded-2xl p-8 text-center animate-fade-in"
          style={{ backgroundColor: "rgba(197,155,39,0.06)", border: "1px solid #C59B27" }}
        >
          <div
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
            style={{ backgroundColor: "#0B1B33", color: "#C59B27" }}
          >
            <CheckCircle2 size={30} strokeWidth={2.2} />
          </div>

          <h3 className="text-xl font-bold text-[#0B1B33] mb-2">
            Inquiry Submitted Successfully!
          </h3>

          <p className="text-xs sm:text-sm text-[#0B1B33]/75 max-w-md mx-auto mb-6 leading-relaxed">
            Thank you, <span className="font-semibold text-[#0B1B33]">{formData.fullName || "Partner"}</span>. We have logged your request for <span className="font-semibold text-[#0B1B33]">{formData.category} fabrics</span> ({formData.quantity || "bulk quantity"}). A senior fabric merchandiser will contact you at <span className="font-semibold text-[#0B1B33]">{formData.email}</span> shortly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:marketing@fashionhomesourcing.net?subject=Sourcing RFQ: ${encodeURIComponent(
                formData.category
              )} - ${encodeURIComponent(formData.companyName)}&body=Full Name: ${encodeURIComponent(
                formData.fullName
              )}%0D%0ACompany: ${encodeURIComponent(
                formData.companyName
              )}%0D%0ACategory: ${encodeURIComponent(
                formData.category
              )}%0D%0AQuantity: ${encodeURIComponent(
                formData.quantity
              )}%0D%0ASpecifications: ${encodeURIComponent(formData.specifications)}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:brightness-110"
              style={{ backgroundColor: "#C59B27" }}
            >
              Open Direct Email Copy
            </a>
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0B1B33]/20 px-6 py-3 text-xs font-bold text-[#0B1B33] hover:bg-[#FBF8F1] transition-colors"
            >
              <RefreshCw size={14} /> Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-1.5"
              >
                Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Michael Thorne"
                className="w-full rounded-xl border border-[#0B1B33]/20 bg-[#FBF8F1]/50 px-4 py-3 text-sm text-[#0B1B33] placeholder-[#0B1B33]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            {/* Company / Organization Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-1.5"
              >
                Company / Organization <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Apex Apparel International"
                className="w-full rounded-xl border border-[#0B1B33]/20 bg-[#FBF8F1]/50 px-4 py-3 text-sm text-[#0B1B33] placeholder-[#0B1B33]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none transition-colors"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Business Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-1.5"
              >
                Business Email <span className="text-rose-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="m.thorne@apexapparel.com"
                className="w-full rounded-xl border border-[#0B1B33]/20 bg-[#FBF8F1]/50 px-4 py-3 text-sm text-[#0B1B33] placeholder-[#0B1B33]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            {/* Fabric / Product Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-1.5"
              >
                Fabric / Product Category <span className="text-rose-600">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#0B1B33]/20 bg-[#FBF8F1]/50 px-4 py-3 text-sm text-[#0B1B33] focus:border-[#C59B27] focus:bg-white focus:outline-none transition-colors"
              >
                <option value="Workwear & Protective">Workwear &amp; Protective Textiles</option>
                <option value="Woven">Premium Woven Fabrics (Twill, Satin, Jacquard)</option>
                <option value="Home Textiles">Institutional &amp; Home Textiles (Bedding/Towels)</option>
                <option value="Custom Greige">Custom Greige / Unprocessed Fabric</option>
                <option value="Sustainable & Organic">Sustainable &amp; GOTS Organic Cotton</option>
              </select>
            </div>

          </div>

          {/* Estimated Order Quantity */}
          <div>
            <label
              htmlFor="quantity"
              className="block text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-1.5"
            >
              Estimated Order Quantity (Meters / Pieces) <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              required
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 15,000 meters / 2,500 bedding sets"
              className="w-full rounded-xl border border-[#0B1B33]/20 bg-[#FBF8F1]/50 px-4 py-3 text-sm text-[#0B1B33] placeholder-[#0B1B33]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          {/* Specifications & Project Details */}
          <div>
            <label
              htmlFor="specifications"
              className="block text-xs font-bold uppercase tracking-wider text-[#0B1B33] mb-1.5"
            >
              Specifications &amp; Project Details <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="specifications"
              name="specifications"
              required
              rows={4}
              value={formData.specifications}
              onChange={handleChange}
              placeholder="Please specify yarn count, desired GSM, finish (e.g. reactive dye, water repellent, flame retardant), target delivery timeline, and port of destination..."
              className="w-full rounded-xl border border-[#0B1B33]/20 bg-[#FBF8F1]/50 px-4 py-3 text-sm text-[#0B1B33] placeholder-[#0B1B33]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-70"
              style={{ backgroundColor: "#C59B27" }}
            >
              {loading ? (
                <>Processing Inquiry...</>
              ) : (
                <>
                  <Send size={16} /> Submit Sourcing Inquiry
                </>
              )}
            </button>
            <p className="mt-2.5 text-center text-[11px] text-[#0B1B33]/50">
              Direct factory pricing &bull; ISO-compliant confidentiality &bull; Fast swatch dispatch
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
