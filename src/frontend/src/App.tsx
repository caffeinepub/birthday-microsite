export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, oklch(0.85 0.15 15), oklch(0.75 0.18 350))',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        background: 'oklch(0.98 0 0)',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 20px 60px oklch(0.50 0.10 350 / 0.3)'
      }}>
        <h1 style={{
          fontSize: '2rem',
          marginBottom: '20px',
          color: 'oklch(0.30 0.15 350)'
        }}>
          🎂 Birthday Microsite
        </h1>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          color: 'oklch(0.40 0.12 350)',
          marginBottom: '20px'
        }}>
          The romantic birthday microsite is available as a standalone HTML file.
        </p>
        <p style={{
          fontSize: '1rem',
          color: 'oklch(0.50 0.10 350)'
        }}>
          Please open <code style={{
            background: 'oklch(0.95 0.05 350)',
            padding: '4px 8px',
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}>index.html</code> directly in your browser to view the complete experience.
        </p>
      </div>
    </div>
  );
}
