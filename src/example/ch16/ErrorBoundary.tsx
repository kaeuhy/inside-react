import {
  Component,
  type ErrorInfo,
  type PropsWithChildren,
  type ReactNode,
} from "react";

type ErrorBoundaryState = {
  error: Error | null;
};

export type FallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

type ErrorBoundaryProps = PropsWithChildren<{
  fallbackRender?: (props: FallbackProps) => ReactNode;
  FallbackComponent?: React.ComponentType<FallbackProps>;
  onReset?: () => void;
  onError?: (error: Error, info: ErrorInfo) => void;
}>;

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  resetErrorBoundary = () => {
    if (this.porps.onReset) {
      this.props.onReset();
    }
    this.setState({ error: null });
  };

  render() {
    const { fallbackRender, FallbackComponent, children } = this.props;
    const { error } = this.state;

    if (error) {
      const fallbackProps: FallbackProps = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };

      if (FallbackComponent) {
        return <FallbackComponent {...fallbackProps} />;
      }

      if (fallbackRender) {
        return fallbackRender(fallbackProps);
      }

      return (
        <div>
          <h2>문제가 발생했습니다.</h2>
          <p>{error.message}</p>
          <button type="button" onClick={this.resetErrorBoundary}>
            다시 시도
          </button>
        </div>
      );
    }

    return children;
  }
}
