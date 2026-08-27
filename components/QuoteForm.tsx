'use client';

import { useState, type FormEvent } from 'react';
import { company, rideTypes } from '@/lib/site';
import { c, font, input, label, display } from '@/lib/theme';
import { sendQuote, type QuotePayload } from '@/lib/quote';

export default function QuoteForm() {
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

  const box = {
    padding: 'clamp(22px,2.8vw,34px)',
    borderRadius: 14,
    background: c.card,
    boxShadow: 'inset 0 0 0 1px ' + c.hairline,
  };

  if (status === 'sent') {
    return (
      <div style={box}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14, padding: '18px 0' }}>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              borderRadius: 8,
              background: c.goldSoft,
              font: '700 18px/1 ' + font,
              color: c.goldInk,
            }}
          >
            ✓
          </span>
          <div style={{ font: '800 24px/1.15 ' + display, letterSpacing: '-.035em' }}>Aanvraag verstuurd</div>
          <div style={{ maxWidth: '38ch', font: '400 14.5px/1.7 ' + font, color: 'rgba(28,27,24,.6)' }}>
            Wij nemen zo snel mogelijk contact op via de gegevens in uw aanvraag. Heeft het haast? Vermeld dat duidelijk in het bericht.
          </div>
          <button
            onClick={() => setStatus('idle')}
            style={{ marginTop: 4, padding: '13px 20px', border: 0, borderRadius: 8, background: c.sand, font: '600 14px/1 ' + font, cursor: 'pointer' }}
          >
            Nieuwe aanvraag
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={box}>
      <form onSubmit={onSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14 }}>
        <label aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
          Website<input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label style={label}>Bedrijfsnaam<input name="bedrijfsnaam" required placeholder="Uw bedrijf" style={input} /></label>
        <label style={label}>Contactpersoon<input name="contactpersoon" required placeholder="Naam" style={input} /></label>
        <label style={label}>E-mail<input name="email" required type="email" placeholder="naam@bedrijf.nl" style={input} /></label>
        <label style={label}>Telefoon<input name="telefoon" required placeholder="06 ..." style={input} /></label>
        <label style={label}>Ophaaladres<input name="ophaaladres" required placeholder="Plaats / postcode" style={input} /></label>
        <label style={label}>Afleveradres<input name="afleveradres" required placeholder="Plaats / postcode" style={input} /></label>
        <label style={label}>
          Soort transport
          <select name="soort" style={input} defaultValue={rideTypes[0]}>
            {rideTypes.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label style={label}>Gewenste datum<input name="datum" type="date" style={input} /></label>
        <label style={{ ...label, gridColumn: '1/-1' }}>
          Zending &amp; bijzonderheden
          <textarea
            name="bericht"
            rows={3}
            placeholder="Aantal pallets/colli, gewicht, afmetingen, temperatuur, tijdvenster…"
            style={{ ...input, font: '400 14.5px/1.55 ' + font, resize: 'vertical' }}
          />
        </label>
        <div style={{ gridColumn: '1/-1', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
          <button
            data-btn-dark
            type="submit"
            disabled={status === 'sending'}
            style={{ padding: '16px 26px', border: 0, borderRadius: 8, background: c.ink, color: c.bg, font: '700 15px/1 ' + font, cursor: status === 'sending' ? 'wait' : 'pointer', opacity: status === 'sending' ? .65 : 1 }}
          >
            {status === 'sending' ? 'Bezig met versturen…' : 'Verstuur aanvraag'}
          </button>
          <span style={{ font: '400 12.5px/1.5 ' + font, color: 'rgba(28,27,24,.45)' }}>Vrijblijvend · geen verplichtingen</span>
        </div>
        {status === 'error' ? <div role="alert" style={{ gridColumn: '1/-1', padding: '12px 14px', borderRadius: 8, background: '#F8E8E4', color: '#8E3025', font: '500 13px/1.5 ' + font }}>{error}</div> : null}
      </form>
    </div>
  );
}
