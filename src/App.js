import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from './scences/global/Topbar';
import Sidebar from "./scences/global/Sidebar";
import Dashboard from "./scences/dashboard/Index";
import Team from "./scences/team/Index";
import Invoices from "./scences/invoices/Index";
import Contacts from "./scences/contacts/Index";
import Form from "./scences/form/Index";
import Calendar from './scences/calendar/Index';
import Bar from "./scences/bar/Index";
import Line from './scences/line/Index';
import Pie from './scences/pie/Index';
import FAQ from './scences/faq/Index';
import Geography from './scences/geography/Index';

function App() {

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
