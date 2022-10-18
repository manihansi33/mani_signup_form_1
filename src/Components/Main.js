import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Table from "./Table";
import RegisterForm from "./RegisterForm";
import axios from "axios";
export default function Main(props) {
	const [dataDB, setDataDB] = useState([]);
	const getDataBaseData = async () => {
		try {
		  const response = await axios.get(`http://localhost:1111/getting`);
		  setDataDB(response.data);
		} catch (error) {
		  console.log(error);
		}
	  };
	  useEffect(() => {
		getDataBaseData();
	  }, []);
	return (
		<div >
			<BrowserRouter>
				{/* <Link to="/"> FORM</Link>
				<Link to="/Table">TABLE</Link> */}
				<Routes>
					<Route path="/" element={<RegisterForm/>} />
					<Route path="/Table" element={<Table DataBaseData={dataDB}/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
