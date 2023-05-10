import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button, Container, Grid, Stack } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  const [history,setHistory] = useState <string[]>  ([])
  const [expression,setExpression] = useState<string>("")
  const [showEqual,setShowEqual] = useState(false)

  function addToNum(num :  number){
    setShowEqual(false)
    setExpression(expression+ num.toString())
  }

  function addOperation(operator : string) {
    setShowEqual(false)
    let exp : String = expression
    if (expression)
    if (expression.at(-1) == "+" || expression.at(-1) == "-" || expression.at(-1) == "*" || expression.at(-1) == "/" ){
      setExpression(exp.substring(0,expression.length-1) + operator)
    }else{
      setExpression(expression + operator)
    }
  }

  function evalExpression(){
    let answer  = eval(expression).toString()
    setExpression(answer)
    setShowEqual(true)
    setHistory([...history,expression ])
  }

  return (
    <Stack style={{minHeight : "100vh" , backgroundColor : "rgba(24,28,32" }}  justifyContent={"center"} alignItems={"center"}  >

    <Container  maxWidth="sm"  sx={{background : "#21252e" , color : "#fff" , width : "600px"}} >
      <div className="history">
        {history.map(h => {
          return <p> {h} </p>
        })}
      </div>
      <div>
        <p>   {showEqual && "="}   {expression.length == 0 ? "0" : expression} </p>
      </div>
      <Grid container width={"100%"} gap={"10px 0"}   >
        <Grid item xs={3} >
          <Button onClick={()=>setExpression("") }  color="primary" sx={{width : "100%"}} variant="contained"> C </Button>
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" sx={{width : "100%"}} variant="contained"> +/- </Button>
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" sx={{width : "100%"}} variant="contained"> % </Button>
        </Grid>
        <Grid item xs={3}>
          <Button color="warning" onClick={() =>addOperation("/") }  sx={{width : "100%"}} variant="contained"> /</Button>
        </Grid>
        
        <Grid item xs={3}>
          <Button onClick={() => addToNum(7)}  color="primary" sx={{width : "100%"}} variant="contained">  7</Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => addToNum(8)}  color="primary" sx={{width : "100%"}} variant="contained"> 8 </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => addToNum(9)}  color="primary" sx={{width : "100%"}} variant="contained"> 9 </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={()=>addOperation("*") } color="warning" sx={{width : "100%"}} variant="contained"> X </Button>
        </Grid>


        <Grid item xs={3}>
          <Button onClick={() => addToNum(4)}   color="primary" sx={{width : "100%"}} variant="contained"> 4 </Button>
        </Grid>
        <Grid item xs={3}>
          <Button  onClick={() => addToNum(5)}  color="primary" sx={{width : "100%"}} variant="contained"> 5 </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => addToNum(6)}   color="primary" sx={{width : "100%"}} variant="contained"> 6 </Button>
        </Grid>
        <Grid item xs={3}>
          <Button  onClick={()=> addOperation("-") } color="warning" sx={{width : "100%"}} variant="contained"> -  </Button>
        </Grid>


        <Grid item xs={3}>
          <Button onClick={() => addToNum(1)}   color="primary" sx={{width : "100%"}} variant="contained"> 1 </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => addToNum(2)}  color="primary" sx={{width : "100%"}} variant="contained"> 2 </Button>
        </Grid>
        <Grid item xs={3}>
          <Button  onClick={() => addToNum(3)}  color="primary" sx={{width : "100%"}} variant="contained"> 3 </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={()=>addOperation("+") } color="warning" sx={{width : "100%"}} variant="contained">  + </Button>
        </Grid>

        <Grid item xs={6}>
          <Button color="primary" sx={{width : "100%"}} variant="contained"> 0 </Button>
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" sx={{width : "100%"}} variant="contained"> . </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={()=>evalExpression() } color="warning" sx={{width : "100%"}} variant="contained"> = </Button>
        </Grid>

      </Grid>

    </Container>

    </Stack>
  );
}

export default App;
