import ErrorBoundary from "@/example/ch16/ErrorBoundary.tsx";

const ThrowError = ({ message }: { message: string }) => {
  throw new Error(message);
};

function ComponentC() {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div>
          <p>Component C 내부 에러:</p>
          <pre>{error.message}</pre>
          <button type="button" onClick={resetErrorBoundary}>
            C에서 재시도
          </button>
        </div>
      )}
    >
      <div>
        <h3>Component C</h3>
        <ThrowError message="Error thrown from Component C's child (ThrowError)" />
      </div>
    </ErrorBoundary>
  );
}

function ComponentB() {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div>
          <p>Component B 내부 에러:</p>
          <pre>{error.message}</pre>
          <button type="button" onClick={resetErrorBoundary}>
            B에서 재시도
          </button>
        </div>
      )}
    >
      <div>
        <h3>Component B</h3>
        <ComponentC />
      </div>
    </ErrorBoundary>
  );
}

function ComponentA() {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div>
          <p>Component A 내부 에러:</p>
          <pre>{error.message}</pre>
          <button type="button" onClick={resetErrorBoundary}>
            A에서 재시도
          </button>
        </div>
      )}
    >
      <div>
        <h3>Component A</h3>
        <ComponentB />
      </div>
    </ErrorBoundary>
  );
}
