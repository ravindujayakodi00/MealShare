function App() {
  return (
    <Router>
      <Switch>
        {
        <Route path="/"></Route>/* <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
