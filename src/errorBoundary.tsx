import React, { Component } from 'react';

type State = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('Caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops, something went wrong.</h1>
          <p>Error: {this.state.error!.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
