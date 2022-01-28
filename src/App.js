import './App.css'
import { useEffect, useState } from 'react'
import {
  deleteWebDataByName,
  postGetDataByUser,
  postAddWebDataByUser,
} from './services/api'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import Search from './components/Search'
import DataContainer from './components/DataContainer'

function App() {
  const userAddress = useSelector((state) => state.user.user)
  const [datas, setDatas] = useState([])

  // const [stop,setStop] = useState([])
  const [webData, setWebData] = useState({
    webName: '',
    webURL: '',
  })

  useEffect(() => {
    getAllDataByUserAddress()
    // loginWithMetamask()
  }, [userAddress])
  // console.log(datas)

  const getAllDataByUserAddress = async () => {
    try {
      const res = await postGetDataByUser(userAddress)
      setDatas(res.data)
      console.log("get"+res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChangeWebName = (e) => {
    setWebData({ ...webData, webName: e.target.value })
  }
  const handleChangeWebUrl = (e) => {
    setWebData({ ...webData, webURL: e.target.value })
  }
  const addData = async() => {
    try {
      const { webName, webURL } = webData
      const payload = {
        owner: userAddress,
        webName,
        webURL,
      }
      const res = await postAddWebDataByUser(payload)
      console.log("add"+res.data)
      setWebData({...webData,webURL:" ",webName:" "})

      await getAllDataByUserAddress()
    } catch (err) {
      console.log(err)
    }
  }
  const deleteData = async (name) => {
    try {
      const payload ={
        owner: userAddress,
        webName:name,
      }
      const res = await deleteWebDataByName(payload)
      getAllDataByUserAddress()
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  // console.log(datas)

  return (
    // <div className="App">
    <div>
      <Header setDatas={setDatas} />
      <div className="h-screen bg-gray-200">
        <Search webName={webData.webName} webURL={webData.webURL} handleChangeWebName={handleChangeWebName} handleChangeWebUrl={handleChangeWebUrl} addData={addData} />

        <DataContainer datas={datas} deleteData={deleteData} />
      </div>
    </div>
    // </div>
  )
}

export default App
