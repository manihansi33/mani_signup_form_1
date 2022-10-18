import DataTable from "react-data-table-component";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";


// import SearchBar from "material-ui-search-bar";

function Table(props) {
	const [tableData, setTableData] = useState(props.DataBaseData);
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);

	const [filter, setFilter] = useState([]);

	console.log("filter data:", filter);
	const getDataBaseData = async () => {
		try {
			const response = await axios.get(`http://localhost:1111/getting`);

			
			setFilter(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getDataBaseData();
	}, []);

	useEffect(() => {
		const results = tableData.filter((name) => {
			return name.fname.toLowerCase().match(search.toLowerCase());
		});

		setFilter(results);
	}, [search]);

	const handlePageChange = () => {};

	let deleting = async (id) => {
		let reqOptions = { method: "DELETE" };
		let rawData = await fetch(
			`http://localhost:1111/deleteThisRow/${id}`,
			reqOptions
		);
		let convertedData = await rawData.json();
		console.log(convertedData);
		// getting();
		getDataBaseData();
	};
	const columns = [
		{ name: "Sno.", selector: (row, index) => (page - 1) * 10 + index + 1 },
		{ name: "Emp Id", selector: (row) => row.id, sort: true },
		{
			name: "Profile Pic",
			selector: (row) => (
				<img width={50} height={50} src={row.profilepic} alt="pic" />
			),
		},
		{ name: "First Name", selector: (row) => row.fname },
		{ name: "Last Name", selector: (row) => row.lname },

		{ name: "Email", selector: (row) => row.email },
		{ name: "Gender", selector: (row) => row.gender },
		{ name: "Country", selector: (row) => row.country },

		{ name: "Password", selector: (row) => row.password },

		// {
		// 	name: "confirmPassword",
		// 	selector: (row) => row.confirmpassword,
		// 	minWidth: 150,
		// },

		{
			name: "Delete Record",
			cell: (row) => (
				<button
					data-placement="top"
					title="Delete the record"
					type="submit"
					className="btn btn-danger"
					onClick={() => {
						deleting(row.id);
						// alert("deleted");
					}}
				>
					Delete
				</button>
			),
			minWidth: 150,
		},
	];
	console.log("table", tableData);
	return (
		<div className="mydiv">
			<div className="Tabledata">
				<center>
					<h1>Employee Details</h1>
				</center>
				<DataTable
					columns={columns}
					data={filter}
					actions={
						<a href="/">
							<button className="btn btn-primary button" type="submit">
								Sign-Up Form
							</button>
						</a>
					}
					pagination
					onChangePage={(item) => {
						 console.log("page===>", item);
						setPage(item);
					}}
					highlightOnHover
					defaultSortField="name"
					striped
					subHeader
					subHeaderComponent={
						<input
							className="form-control w-25 "
							type="text"
							placeholder="search here"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					}
					subHeaderAlign="left"
				></DataTable>
			</div>
		</div>
	);
}
export default Table;
