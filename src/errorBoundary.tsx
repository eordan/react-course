import React, { Component, ErrorInfo, PropsWithChildren } from 'react';

type State = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends Component<PropsWithChildren<object>, State> {
  constructor(props: PropsWithChildren<object>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
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
