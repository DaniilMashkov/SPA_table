import './App.css';
import tableApi from './service/table'
import {useEffect, useState} from "react";
import {range} from "./utils/range";
import Toast from './components/Toast'

function App() {
  const [item, setItem] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [column, setColumn] = useState('')
  const [sort, setSort] = useState('')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [message, setMessage] = useState('')

  function itemFilter(page, column, sort, query) {
    tableApi.getTable(page, column, sort, query)
        .then(response => setItem(response.data.results) || setTotalPages(Math.ceil(response.data.count) / 10))
        .catch(err => showToast(err.response.data.err))
  }

  function showToast(message) {
    const toastElList = [...document.querySelectorAll('.toast')]
    const toast = new window.bootstrap.Toast(toastElList[0])
    setMessage(message)
    toast.show()
  }

  useEffect(() => {
    itemFilter(page, column, sort, query)
  }, [])

  return (
      <div className="App">
        <div className='container py-5'>
          <div className='row'>
            <div className='col'>
              <select className='form-select form-select-sm' onChange={(event) => {
                setColumn(event.target.value);
                setPage(1);
                itemFilter(page, event.target.value, sort, query)
              }}>
                <option value={null}>Column to filter ...</option>
                <option value="name">Name</option>
                <option value="quantity">Quantity</option>
                <option value="distance">Distance</option>
              </select>
            </div>
            <div className='col'>
              <select className='form-select form-select-sm' onChange={(event) => {
                setSort(event.target.value);
                setPage(1);
                itemFilter(page, column, event.target.value)
              }}>
                <option value={null}>Condition ...</option>
                <option value="exact">Equal</option>
                <option value="contains">Contain</option>
                <option value="gt">Greater</option>
                <option value="lt">Less</option>
              </select>
            </div>
            <div className='col'>
              <div className='input-group'>
                <input value={query} type="text" className="form-control form-control-sm"
                       placeholder='Value to filter'
                       onChange={(event) => {
                         setQuery(event.target.value);
                         setPage(1);
                         itemFilter(page, column, sort, event.target.value)
                       }}/>
              </div>
            </div>
          </div>

          <table className='table table-striped'>
            <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Date & Time</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Distance</th>
            </tr>
            </thead>
            <tbody>
            {
              item.map((el) => (
                  <tr key={el.id}>
                    <th scope='row'>{el.id}</th>
                    <td>{el.date}</td>
                    <td>{el.name}</td>
                    <td>{el.quantity}</td>
                    <td>{el.distance}</td>
                  </tr>
              ))
            }
            </tbody>
          </table>
          <div className='container-fluid' align='center'>
            <div className='btn-group' role='group'>
              {[...range(1, totalPages)].map((el, index) =>
                  <button key={index} type='button' className='btn btn-secondary'
                          onClick={() => {
                            setPage(el);
                            itemFilter(el, column, sort, query)
                          }}>{el}</button>)}
            </div>
          </div>
        </div>
        <Toast message={message}/>
      </div>
  );
}

export default App;
