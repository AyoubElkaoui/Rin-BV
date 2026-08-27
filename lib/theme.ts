export const c = {
  bg: '#FBFAF7',
  ink: '#1C1B18',
  card: '#FFFEFB',
  sand: '#F3F0E8',
  sandHover: '#F7F4EC',
  gold: '#E7C97F',
  goldSoft: '#F3E3BD',
  goldInk: '#7C5D19',
  goldLink: '#9A7628',
  hairline: 'rgba(28,27,24,.09)',
  muted: 'rgba(28,27,24,.58)',
  muted2: 'rgba(28,27,24,.5)',
  onDark: 'rgba(251,250,247,.66)',
};

// Body / UI: neutrale, zakelijke grotesque.
export const font = "'Inter',Helvetica,Arial,sans-serif";
// Koppen: verfijnde serif voor een premium, gevestigde uitstraling.
// Eén heldere groteske voor alle koppen en body: rustig, zakelijk en goed leesbaar.
export const display = "'Inter',Helvetica,Arial,sans-serif";
// Kleine labels / eyebrows: Inter in hoofdletters met tracking (zie .eyebrow in globals).
export const mono = "'Inter',Helvetica,Arial,sans-serif";

export const shell = { maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,4vw,48px)' };
export const cardBox = { background: c.card, boxShadow: 'inset 0 0 0 1px ' + c.hairline, borderRadius: 12 };
export const pillDark = { padding: '15px 24px', borderRadius: 8, background: c.ink, color: c.bg, font: '700 15px/1 ' + font };
export const pillGold = { padding: '15px 24px', borderRadius: 8, background: c.gold, color: c.ink, font: '700 15px/1 ' + font };
export const h1 = { margin: 0, font: '800 clamp(30px,3.8vw,52px)/1.06 ' + display, letterSpacing: '-.03em' };
export const h2 = { margin: 0, font: '800 clamp(26px,3.2vw,42px)/1.1 ' + display, letterSpacing: '-.03em' };
export const eyebrow = { display: 'inline-flex', padding: '8px 14px', borderRadius: 8, background: c.card, font: '600 12.5px/1 ' + font, color: c.goldLink };
export const body = { font: '400 16px/1.7 ' + font, color: 'rgba(28,27,24,.6)' };
export const input: any = {
  padding: '14px 15px', border: 0, borderRadius: 8, background: c.sand, color: c.ink,
  font: '400 14.5px/1.2 ' + font, outline: 'none', width: '100%', boxSizing: 'border-box',
};
export const label: any = { display: 'flex', flexDirection: 'column', gap: 7, font: '600 11.5px/1 ' + font, color: c.muted2 };



