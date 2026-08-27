export type QuotePayload = Record<string, string>;

export async function sendQuote(payload: QuotePayload) {
  const response = await fetch('/.netlify/functions/send-quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  let result: { error?: string } = {};
  try {
    result = await response.json();
  } catch {
    // The function may return an empty body for an unexpected server error.
  }

  if (!response.ok) {
    throw new Error(result.error || 'De aanvraag kon niet worden verstuurd.');
  }
}
