import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

export const styles = theme => ({
  root: {
    maxWidth: '40ch',
    padding: theme.spacing(2),
    '&> *': { 
      marginTop: theme.spacing(2)
    }
  }
});