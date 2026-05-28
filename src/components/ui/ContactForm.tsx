import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useI18n } from '../../i18n';
import { trackEvent } from '../../data/config';

export default function ContactForm() {
  const { t } = useI18n();
  const f = t.contact.form;
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', lang: '', service: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    trackEvent('form_submit', { service: form.service });
    // Simulate async submission — connect to your backend/Formspree/EmailJS
    await new Promise(r => setTimeout(r, 1200));
    setStatus('success');
    setForm({ name: '', email: '', phone: '', lang: '', service: '', message: '' });
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border text-sm text-gray-800 placeholder-gray-400 transition-colors focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20";
  const inputStyle = { borderColor: '#d1d5db', background: '#fafafa' };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">{f.name}</label>
          <input
            type="text" name="name" required value={form.name} onChange={handleChange}
            placeholder={f.name}
            className={inputCls} style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">{f.email}</label>
          <input
            type="email" name="email" required value={form.email} onChange={handleChange}
            placeholder={f.email}
            className={inputCls} style={inputStyle}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">{f.phone}</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder={f.phone}
            className={inputCls} style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">{f.lang}</label>
          <select name="lang" value={form.lang} onChange={handleChange} className={inputCls} style={inputStyle}>
            <option value="">{f.lang}</option>
            {f.langOptions.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">{f.service}</label>
        <select name="service" value={form.service} onChange={handleChange} className={inputCls} style={inputStyle}>
          <option value="">{f.service}</option>
          {f.serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">{f.message}</label>
        <textarea
          name="message" required value={form.message} onChange={handleChange}
          rows={4} placeholder={f.placeholder.message}
          className={`${inputCls} resize-none`} style={inputStyle}
        />
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
          <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
          <p className="text-sm text-green-700">{f.success}</p>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
          <AlertCircle size={18} className="text-red-600 flex-shrink-0" />
          <p className="text-sm text-red-700">{f.error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: 'linear-gradient(135deg, #0a1628, #0d3b5e)' }}
      >
        <Send size={16} />
        {status === 'sending' ? '...' : f.submit}
      </button>
    </form>
  );
}
