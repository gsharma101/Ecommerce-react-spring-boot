import { ThemeProvider } from "@emotion/react"
import customeTheme from "./Theme/customeTheme"
import Navbar from "./customer/components/Navbar/Navbar"
import { Home } from "@mui/icons-material"

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
