import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorBoundary";
import Banner from "../components/Banner/Banner";
// import CoinsTable from "../components/CoinsTable";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";

const CoinsTable = React.lazy(() => import("../components/CoinsTable"));

const HomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Suspense fallback= {<div className="center"> {LoadingSpinner} </div>}>
          <CoinsTable />
        </Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
};

export default HomePage;
