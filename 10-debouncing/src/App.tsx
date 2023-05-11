import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<string[]>([])
  const [expression, setExpression] = useState<string>("")
  const [showEqual, setShowEqual] = useState(false)

  function addToNum(num: number) {
    setShowEqual(false)
    setExpression(expression + num.toString())
  }

  function addOperation(operator: string) {
    setShowEqual(false)
    let last = expression.at(-1)

    if (last == "+" || last == "-" || last == "*" || last == "/" || last == "%") {
      setExpression(expression.substring(0, expression.length - 1) + operator)
    } else {
      setExpression(expression + operator)
    }
  }

  function evalExpression() {
    let answer = eval(expression).toString()
    setExpression(answer)
    setShowEqual(true)
    setHistory([...history, expression])
  }

  function plusMinusOperator() {
    // console.log('gel', )
    if (expression.indexOf("*") == -1 && expression.indexOf("/") == -1 &&   expression.indexOf("+") == -1 && expression.indexOf("%") == -1) {
      setExpression( ( parseFloat(expression) * -1 ).toString() )
    }
  }

  const buttonStyle = { padding: "16px", width: "100%" }

  return (
    <Stack style={{ minHeight: "100vh", backgroundColor: "rgba(24,28,32" }} justifyContent={"center"} alignItems={"center"}  >

      <Container maxWidth="sm" sx={{ background: "#21252e", color: "#fff", width: "600px" }} >
        <Box mt={2} className="history">
          {history.map((h, j) => {
            return <p key={j} > {h} </p>
          })}
        </Box>
        <Box>
          <Typography mb={2} variant="h2">   {showEqual && "="}   {expression.length == 0 ? "0" : expression} </Typography>
        </Box>
        <Grid container width={"100%"}     >
          <Grid item xs={3} >
            <Button onClick={() => setExpression("")} color="primary" sx={buttonStyle} variant="contained"> C </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={()=>plusMinusOperator() }  color="primary" sx={buttonStyle} variant="contained"> +/- </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => addOperation("%")} color="primary" sx={buttonStyle} variant="contained"> % </Button>
          </Grid>
          <Grid item xs={3}>
            <Button color="warning" onClick={() => addOperation("/")} sx={buttonStyle} variant="contained"> /</Button>
          </Grid>

          <Grid item xs={3}>
            <Button onClick={() => addToNum(7)} color="primary" sx={buttonStyle} variant="contained">  7</Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => addToNum(8)} color="primary" sx={buttonStyle} variant="contained"> 8 </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => addToNum(9)} color="primary" sx={buttonStyle} variant="contained"> 9 </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => addOperation("*")} color="warning" sx={buttonStyle} variant="contained"> X </Button>
          </Grid>


          <Grid item xs={3}>
            <Button onClick={() => addToNum(4)} color="primary" sx={buttonStyle} variant="contained"> 4 </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => addToNum(5)} color="primary" sx={buttonStyle} variant="contained"> 5 </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => addToNum(6)} color="primary" sx={buttonStyle} variant="contained"> 6 </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => addOperation("-")} color="warning" sx={buttonStyle} variant="contained"> -  </Button>
          </Grid>


          <Grid item xs={3}>
            <Button onClick={() => addToNum(1)} color="primary" sx={buttonStyle} variant="contained"> 1 </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => addToNum(2)} color="primary" sx={buttonStyle} variant="contained"> 2 </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => addToNum(3)} color="primary" sx={buttonStyle} variant="contained"> 3 </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => addOperation("+")} color="warning" sx={buttonStyle} variant="contained">  + </Button>
          </Grid>

          <Grid item xs={6}>
            <Button color="primary" sx={buttonStyle} variant="contained"> 0 </Button>
          </Grid>
          <Grid item xs={3}>
            <Button color="primary" sx={buttonStyle} variant="contained"> . </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => evalExpression()} color="warning" sx={buttonStyle} variant="contained"> = </Button>
          </Grid>

        </Grid>

      </Container>

    </Stack>
  );
}

export default App;
