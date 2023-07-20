import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import NoMatch from "./components/pages/NoMatch";
import Login from "./components/pages/Login";
import ReaderStatus from "./components/pages/reader-status/ReaderStatus";
import ReviewReport from "./components/pages/reader-status/ReviewReport";
import Cassette from "./components/pages/cassette/Cassette";
import Load from "./components/pages/cassette/Load-cassette";
import CassetteManually from "./components/pages/cassette/Manually";
import CassetteResult from "./components/pages/cassette/batch-entry";
import Maintenance from "./components/pages/maintenance/Maintenance";
import IsolateReportsStatus from "./components/pages/reports/isolatereports-status";
import MaintenanceLogin from "./components/pages/maintenance/Login";
import Reports from "./components/pages/reports/Reports";
import ReportsLogin from "./components/pages/reports/Login";
import ReportsSample from "./components/pages/reports/SampleReport";
import ReportsSupport from "./components/pages/reports/Support";
import Order from "./components/pages/order/Order";
import ProductDetail from "./components/pages/order/ProductDetail";
import Support from "./components/pages/Support";
import SystemSetup from "./components/pages/system-setup/SystemSetup";
import Systmsetup from "./components/pages/system-setup/system-setupnew";
import SystemSetupIp from "./components/pages/system-setup/SystemSetupIp";
import SystemSetupBInfo from "./components/pages/system-setup/SystemSetupBusinessInfo";
import SystemSetupPInfo from "./components/pages/system-setup/SystemSetupPersonalInfo";
import Header from "./components/shared/Header";
//import Sidebar from "./components/shared/Sidebar"
import SidebarLayout from "./components/shared/sidebarlayout";
import RackError from "./components/pages/reader-status/Error";
import RackCompleted from "./components/pages/reader-status/completed";
import IsolateReports from "./components/pages/reports/isolate-reports";
import IsolateReports1 from "./components/pages/reports/isolate-reports1";
import IsolatereportsNew from "./components/pages/reports/isloate-reportsnew";
import Generatereports from "./components/pages/reports/generate-reports";
import ReportOne from "./components/pages/reports/report1";
import ReportOneTwo from "./components/pages/reports/report1-two";
import Qcreports from "./components/pages/reports/qc-reports";
import Qcstatus from "./components/pages/reports/qc-status";
import ReportsAttribute from "./components/pages/reports/reportsattribute";
import ReportsAttributeTwo from "./components/pages/reports/reportsattribute-two";
import Unverifiedreports from "./components/pages/reports/unverified-reports";
import Viewreport from "./components/pages/reports/view-report";
import Alert from "./components/pages/maintenance/alert";
import Systemstats from "./components/pages/maintenance/systemstats";
import Qc from "./components/pages/maintenance/qc";
import Systemstatsone from "./components/pages/maintenance/systemstatsone";

//import Test101 from "./components/pages/test101/test101";

import BuildReport from "./components/pages/build-report";
import BuildReportGraph from './components/pages/build-report/graph/modules/reports'
import BuildReportGrid from "./components/pages/build-report/grid/reports";

import SampleDetails from "./components/pages/observations";
import SampleConcentrationDetails from "./components/pages/observations/startDetails/sampleConcentrationDetails";
import EndResultDetails from "./components/pages/observations/endResults/endResult";
import CsvInfoPage from "./components/pages/build-report/graph/csvPage";
import AllGraphReport from "./components/pages/build-report/graph/modules/allGraphReport/allGraphReport";

function App() {
  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (
        e.message === "ResizeObserver loop limit exceeded" ||
        e.message === "Script error."
      ) {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  const ProtectedRoute = ({ element: Component, ...props }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    return isLoggedIn ? (
      <Component {...props} />
    ) : (
      <Navigate to={process.env.PUBLIC_URL + "/"} />
    );
  };

  return (
    <>
      <Router>
        <Header></Header>

        <div className="main-content-part">
          <Routes>
            <Route element={<SidebarLayout />}>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/readerstatus`}
                element={<ProtectedRoute element={ReaderStatus} />}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/rack1/error`}
                element={<ProtectedRoute element={RackError} />}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/rack1/completed`}
                element={<ProtectedRoute element={RackCompleted} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/review-report`}
                element={<ProtectedRoute element={ReviewReport} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/cassette`}
                element={<ProtectedRoute element={Cassette} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/cassette/manually`}
                element={<ProtectedRoute element={CassetteManually} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/cassette/batch-entry`}
                element={<ProtectedRoute element={CassetteResult} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/cassette/load-cassette`}
                element={<ProtectedRoute element={Load} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance`}
                element={<ProtectedRoute element={MaintenanceLogin} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/view`}
                element={<ProtectedRoute element={Maintenance} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/isolatereports-status`}
                element={<ProtectedRoute element={ReviewReport} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/alert`}
                element={<ProtectedRoute element={Alert} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/systemstats`}
                element={<ProtectedRoute element={Systemstats} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/systemstatsone`}
                element={<ProtectedRoute element={Systemstatsone} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/maintenance/qc`}
                element={<ProtectedRoute element={Qc} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports`}
                element={<ProtectedRoute element={Reports} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/login`}
                element={<ProtectedRoute element={ReportsLogin} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/isolate-reports`}
                element={<ProtectedRoute element={IsolateReports} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/isolate-reports1`}
                element={<ProtectedRoute element={IsolateReports1} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/isloate-reportsnew`}
                element={<ProtectedRoute element={IsolatereportsNew} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/generate-reports`}
                element={<ProtectedRoute element={Generatereports} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/unverified-reports`}
                element={<ProtectedRoute element={Unverifiedreports} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/view-report`}
                element={<ProtectedRoute element={Viewreport} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/report1`}
                element={<ProtectedRoute element={ReportOne} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/report1-two`}
                element={<ProtectedRoute element={ReportOneTwo} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/reportsattribute`}
                element={<ProtectedRoute element={ReportsAttribute} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/reportsattributetwo`}
                element={<ProtectedRoute element={ReportsAttributeTwo} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/sample-report`}
                element={<ProtectedRoute element={ReportsSample} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/support`}
                element={<ProtectedRoute element={ReportsSupport} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/qc-reports`}
                element={<ProtectedRoute element={Qcreports} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/reports/qc-status`}
                element={<ProtectedRoute element={Qcstatus} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/order`}
                element={<ProtectedRoute element={Order} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/order/:productSlug`}
                element={<ProtectedRoute element={ProductDetail} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup/system-setupnew`}
                element={<ProtectedRoute element={Systmsetup} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup`}
                element={<ProtectedRoute element={SystemSetup} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup/ip`}
                element={<ProtectedRoute element={SystemSetupIp} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup/business-info`}
                element={<ProtectedRoute element={SystemSetupBInfo} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/system-setup/personal-info`}
                element={<ProtectedRoute element={SystemSetupPInfo} />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/support`}
                element={<ProtectedRoute element={Support} />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/show-csv`}
                element={<ProtectedRoute element={BuildReport} />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/show-csv/grid`}
                element={<ProtectedRoute element={BuildReportGrid} />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/reports/graph`}
                element={<ProtectedRoute element={BuildReportGraph} />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/reports/csv-info`}
                element={<ProtectedRoute element={CsvInfoPage} />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/reports/all-graph-report`}
                element={<ProtectedRoute element={AllGraphReport} />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/sample-details`}
                element={<ProtectedRoute element={SampleDetails} />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/sample-report/concentration-details`}
                element={
                  <ProtectedRoute element={SampleConcentrationDetails} />
                }
              />
              <Route
                path={`${process.env.PUBLIC_URL}/observation/end-results`}
                element={<ProtectedRoute element={EndResultDetails} />}
              />
              <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
