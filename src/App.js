import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sample from "./components/Sample/Sample";
import Accordion from "./components/Accordion/Accordion";
import Card from "./components/Card/Card";
import HoverDropdown from "./components/Dropdown/HoverDropdown";
import ProgressBar from "./components/Progress/ProgressBar";
import Spinner from "./components/Spinner/Spinner";
import Table from "./components/Table/Table";
import Orderedlist from "./components/ListGroup/OrderedList";
import UnOrderedlist from "./components/ListGroup/UnorderedList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Sample} />
          <Route path="/About" component={Sample} />
          <Route path="/Contact" component={Sample} />
        </Switch>
      </Router>
      <header className="App-header">
        <h4>Open source UI Component library</h4>
        <hr></hr>

        <p>Accordion Demo</p>
        <Accordion title="Section" content="Add Your Content"></Accordion>
        <br></br>
        <br></br>
        <hr></hr>

        <p>Card Demo</p>
        <Card title="Section" content="Add Your Content"></Card>
        <br></br>
        <br></br>
        <hr></hr>

        <p>Hover Dropdown Demo</p>
        <HoverDropdown
          title="Section"
          content="Add Your Content"
        ></HoverDropdown>
        <br></br>
        <hr></hr>

        <p>ordered List</p>
        <Orderedlist title="list" content="your list"></Orderedlist>
        <br></br>
        <hr></hr>

        <p>Unordered List</p>
        <UnOrderedlist title="list" content="your list"></UnOrderedlist>
        <br></br>
        <hr></hr>

        <p>Progress Bar Demo</p>
        <ProgressBar value="20" max="100"></ProgressBar>
        <br></br>
        <ProgressBar value="40" max="100"></ProgressBar>
        <br></br>
        <ProgressBar value="60" max="100"></ProgressBar>
        <br></br>
        <ProgressBar value="80" max="100"></ProgressBar>
        <br></br>
        <ProgressBar value="90" max="100"></ProgressBar>
        <br></br>
        <br></br>
        <hr></hr>

        <p>Spinner Demo</p>
        <br></br>
        <Spinner></Spinner>
        <br></br>
        <hr></hr>

        <p>Table Demo</p>
        <Table>
          <Table.Head>Table</Table.Head>
          <Table.TR>
            <Table.TH>Col 1</Table.TH>
            <Table.TH>Col 2</Table.TH>
          </Table.TR>
          <Table.TR>
            <Table.TD>Row 1 Col 1</Table.TD>
            <Table.TD>Row 1 Col 2</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>Row 2 Col 1</Table.TD>
            <Table.TD>Row 2 Col 2</Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD>Row 3 Col 1</Table.TD>
            <Table.TD>Row 3 Col 2</Table.TD>
          </Table.TR>
        </Table>

        <hr></hr>
      </header>
    </div>
  );
}

export default App;
