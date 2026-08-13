import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '40px',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            backgroundColor: 'var(--color-paper, #F8F8F4)',
            color: 'var(--color-text, #121215)',
          }}
        >
          <h1 style={{ color: '#EF5350' }}>⚠️ Fehler beim Laden</h1>
          <p style={{ color: 'var(--color-muted, #5A5A62)', marginTop: '10px', fontSize: '14px' }}>
            {this.state.error?.message || 'Ein unerwarteter Fehler ist aufgetreten'}
          </p>
          <details
            style={{
              marginTop: '20px',
              textAlign: 'left',
              color: 'var(--color-faint, #8E8E98)',
              fontSize: '12px',
            }}
          >
            <summary>Details</summary>
            <pre
              style={{
                background: 'var(--color-wash, #f5f5f5)',
                color: 'var(--color-text, #121215)',
                padding: '10px',
                overflow: 'auto',
              }}
            >
              {this.state.error?.stack}
            </pre>
          </details>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#0F66DA',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Seite neu laden
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
