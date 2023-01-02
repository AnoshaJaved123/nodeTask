import {useState} from 'react'
import Papa from 'papaparse'
import { CSVLink, CSVDownload } from 'react-csv';

const Main = () => {
  // const [data, setData] = useState()
  const csvData = [
    ['sku', 'stock_ids'],
    ['2244-BLSM-L', '43|32'],
    ['2244-BLSM-M', '44|94'], ['2244-BLSM-S', '45|95'], ['2244-BLSM-XL', '46|96'], ['SLKDRM-CLK-03-XL', '47'],
    ['SLKDRM-CLK-52-L', '48'], ['SLKDRM-CLK-52-M', '49'], ['SLKDRM-CLK-52-S', '50'], ['SLKDRM-CLK-52-XL', '51'],
  ];
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: async function (results) {
        const data = results.data;
        console.log(data);
        
        const response = await fetch(`http://localhost:5003/api/fileAuth/createfile`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
          },
    
          body: JSON.stringify({ name: 'stock', content: data }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);
      },
      
    });
  };
  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Node Task</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><a href={"/"}><span className="glyphicon glyphicon-log-in" /> Logout</a></li>
          </ul>

        </div>
      </nav>

      <div className='container'>

        <form action="/action_page.php">
          <div className="form-group">
            <label htmlFor="pwd">Import File:</label>
            <input
              type="file"
              name="file"
              accept=".csv"
              onChange={changeHandler}
              style={{ display: "block" }}
            />
          </div>
          <button type="submit" className="btn btn-default">Save</button>
        </form>
        <label htmlFor="pwd">Download File 2: </label>
        <button type="submit" className="btn btn-default">

          <CSVLink data={csvData} >Download File 2</CSVLink>
        </button>

      </div>


    </>
  )
}

export default Main