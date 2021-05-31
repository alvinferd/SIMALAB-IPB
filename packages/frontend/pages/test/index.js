import { ThemeProvider } from "@material-ui/core";
import CustomTheme from "@/themes/default";
import LabSidebarDrawer from "@/components/navigation/LabSidebarDrawer";

function TestingIndex() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <LabSidebarDrawer />
    </ThemeProvider>
  );
}

export default TestingIndex;
