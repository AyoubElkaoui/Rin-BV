'use client';

import { useState, type FormEvent } from 'react';
import { rideTypes } from '@/lib/site';
import { c, font, input, label } from '@/lib/theme';
import { sendQuote, type QuotePayload } from '@/lib/quote';

export default function QuickQuote() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    try {
      await sendQuote(Object.fromEntries(new FormData(e.currentTarget).entries()) as QuotePayload);
      e.currentTarget.reset();
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'De aanvraag kon niet worden verstuurd.');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        padding: 'clamp(20px,2.4vw,28px)',
        borderRadius: 14,
        background: c.card,
        boxShadow: 'inset 0 0 0 1px ' + c.hairline,
      }}
    >
      <div style={{ font: '700 17px/1.25 ' + font }}>Rit direct aanmelden</div>
      <div style={{ marginTop: 6, font: '400 13.5px/1.6 ' + font, color: 'rgba(28,27,24,.55)' }}>
        Vul de route en uw contactgegevens in. We nemen daarna contact op via telefoon of e-mail.
      </div>
      <label aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        Website<input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 10, marginTop: 18 }}>
        <label style={label}>
          Bedrijfsnaam
          <input name="bedrijfsnaam" required placeholder="Uw bedrijf" style={input} />
        </label>
        <label style={label}>
          Contactpersoon
          <input name="contactpersoon" required placeholder="Naam" style={input} />
        </label>
        <label style={label}>
          E-mail
          <input name="email" required type="email" placeholder="naam@bedrijf.nl" style={input} />
        </label>
        <label style={label}>
          Telefoon
          <input name="telefoon" required placeholder="06 ..." style={input} />
        </label>
        <label style={label}>
          Ophalen
          <input name="ophaaladres" required placeholder="Postcode of plaats" style={input} />
        </label>
        <label style={label}>
          Afleveren
          <input name="afleveradres" required placeholder="Postcode of plaats" style={input} />
        </label>
        <label style={label}>
          Soort transport
          <select name="soort" defaultValue={rideTypes[0]} style={input}>
            {rideTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label style={label}>
          Gewenste datum
          <input name="datum" type="date" style={input} />
        </label>
        <label style={{ ...label, gridColumn: '1/-1' }}>
          Zending &amp; bijzonderheden
          <textarea name="bericht" rows={3} placeholder="Aantal pallets/colli, gewicht, afmetingen, temperatuur, tijdvenster…" style={{ ...input, font: '400 14px/1.55 ' + font, resize: 'vertical' }} />
        </label>
      </div>
      <button
        data-btn-dark
        type="submit"
        disabled={status === 'sending'}
        style={{
          marginTop: 14,
          width: '100%',
          padding: 16,
          border: 0,
          borderRadius: 8,
          background: c.ink,
          color: c.bg,
          font: '700 15px/1 ' + font,
          cursor: status === 'sending' ? 'wait' : 'pointer',
          opacity: status === 'sending' ? .65 : 1,
        }}
      >
          {status === 'sending' ? 'Bezig met versturen…' : 'Aanvraag versturen'}
      </button>
      {status === 'sent' ? (
        <div
          style={{
            marginTop: 12,
            padding: '12px 14px',
            borderRadius: 8,
            background: c.goldSoft,
            font: '600 13px/1.5 ' + font,
            color: c.goldInk,
          }}
        >
          Aanvraag ontvangen. We nemen contact op via het telefoonnummer of e-mailadres uit uw aanvraag.
        </div>
      ) : null}
      {status === 'error' ? (
        <div role="alert" style={{ marginTop: 12, padding: '12px 14px', borderRadius: 8, background: '#F8E8E4', color: '#8E3025', font: '500 13px/1.5 ' + font }}>
          {error}
        </div>
      ) : null}
    </form>
  );
}
