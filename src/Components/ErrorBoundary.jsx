import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Uncaught error:", error, info);
    this.setState({ info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-black text-white">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <pre className="text-sm whitespace-pre-wrap bg-white/5 p-4 rounded">{String(this.state.error)}</pre>
            <details className="mt-4 text-xs text-white/80">
              <summary>Stack trace</summary>
              <pre className="text-xs whitespace-pre-wrap mt-2 bg-white/3 p-3 rounded">{this.state.info?.componentStack}</pre>
            </details>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
