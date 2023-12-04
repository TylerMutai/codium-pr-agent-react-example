import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import theme from "./utils/values/theme";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import frontendPaths from "./utils/values/frontendPaths";
import {RtlProvider} from "./utils/providers/RTLProvider";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={extendTheme(theme)}>
        <RtlProvider>
          <Layout>
            <ScrollToTop>
              <Routes>
                <Route path={frontendPaths.index} element={<HomePage/>}/>
                <Route path={frontendPaths.login} element={<LoginPage/>}/>
                <Route path={frontendPaths.registration} element={<RegistrationPage/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </ScrollToTop>
          </Layout>
        </RtlProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
