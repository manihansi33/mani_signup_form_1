import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";

export default function RegisterForm() {
	const navigate = useNavigate();
	// let nameInput = useRef();
	// let nameSpanRef = useRef();
	let fnRef = useRef();

	// let lnameInput = useRef();
	// let lnameSpanRef = useRef();

	let lnRef = useRef();
	// let emailInput = useRef();
	// let emailSpanRef = useRef();

	let emailRef = useRef();
	let genRef = useRef();

	let countryRef = useRef();
	let profilepicRef = useRef();

	let passwordRef = useRef();
	// let passwordInput = useRef();
	// let passwordSpanRef = useRef();

	let confirmpasswordRef = useRef();
	// let confirmpasswordInput = useRef();
	// let confirmpasswordSpanRef = useRef();
	const [ResponseMsg, setResponseMsg] = useState();

	let sendPlayerDataToServer = async () => {
		// var myHeaders = new Headers();
		// myHeaders.append("Content-Type", "application/json");

		let dataObj = {
			fname: fnRef.current.value,
			lname: lnRef.current.value,
			email: emailRef.current.value,
			gender: genRef.current.value,
			country: countryRef.current.value,
			profilepic: profilepicRef.current.value,
			password: passwordRef.current.value,
			confirmpassword: confirmpasswordRef.current.value,
		};

		console.log(dataObj);
		console.log(JSON.stringify(dataObj));

		let option = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(dataObj),
		};

		let rawData = await fetch("http://localhost:1111/addPlayer", option);
		let convertedData = await rawData.text();

		setResponseMsg(convertedData);
		console.log("response>>>>", convertedData);
	};

	const [id, setId] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAdress] = useState("");
	const [passwordData, setPassWordData] = useState("");
	const [cpsw, setCpsw] = useState("");
	const [genderData, setGenderData] = useState("");
	const [countryData, setCountryData] = useState("");
	const [profilepicData, setProfilePicData] = useState("");

	const [errors, setErrors] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			firstName.length === 0 ||
			lastName.length === 0 ||
			emailAddress === 0 ||
			passwordData === 0 ||
			cpsw === 0 ||
			genderData === 0 ||
			countryData === 0 ||
			profilepicData === 0
		) {
			setErrors(true);
		}
	};
	return (
		<div className="form">
			<div className="sub_form">
				<div>
					<h1>Signup </h1>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="d-flex ">
						<Form.Group className="mb-3 " controlId="formBasicfirstname">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								className="fname"
								type="text"
								ref={fnRef}
								//  ref={nameInput}
								placeholder="enter first name"
								// name="fname"
								// value={fname}
								onFocus={(e) => {
									e.target.style.backgroundColor = "#e6ecff";
								}}
								// onBlur={(e) => {
								// 	e.target.style.backgroundColor = "#c7aba9";
								// }}

								onChange={(e) => setFirstName(e.target.value)}
							/>
							{errors && firstName.length <= 0 ? (
								<p>First Name can't be Empty</p>
							) : (
								""
							)}
							{/* <span ref={nameSpanRef}>Name should be give only alphabets</span> */}
						</Form.Group>

						<Form.Group className="mb-3 lname" controlId="formBasiclastname">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type="text"
								name="lname"
								// ref={lnameInput}
								// value={lname}
								placeholder="enter last name"
								ref={lnRef}
								onFocus={(e) => {
									e.target.style.backgroundColor = "#e6ecff";
								}}
								// onBlur={(e) => {
								// 	e.target.style.backgroundColor = "#c7aba9";
								// }}
								// 				onChange={() => {
								// 					let validName = lname(lnameInput.current.value);
								// 					console.log("ui", validName);
								// 					if (validName === true) {
								//     lnameSpanRef.current.innerHTML = "valid name is required";
								//     lnameSpanRef.current.style.color = "green";
								// 					} else {
								//     lnameSpanRef.current.innerHTML = "invalied name";
								//     lnameSpanRef.current.style.color = "red";
								// 					}
								// }}
								onChange={(e) => setLastName(e.target.value)}
							/>
							{errors && lastName.length <= 0 ? (
								<p>Last Name can't be Empty</p>
							) : (
								""
							)}
							{/* <span ref={lnameSpanRef}>Name should be give only alphabets</span> */}
						</Form.Group>
					</div>
					<div className="d-flex">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								className="email"
								type="email"
								name="email"
								ref={emailRef}
								// ref={emailInput}
								placeholder="abc@gmail.com"
								// value={email}
								onFocus={(e) => {
									e.target.style.backgroundColor = "#e6ecff";
								}}
								// onBlur={(e) => {
								// 	e.target.style.backgroundColor = "#c7aba9";
								// }}
								// 				onChange={() => {
								// 					let validEmail = email(emailInput.current.value);
								// 					if (validEmail === true) {
								//       emailSpanRef.current.innerHTML = "valid email address";
								//       emailSpanRef.current.style.color = "green";
								// 					} else {
								//       emailSpanRef.current.innerHTML = "invalid email address";
								//       emailSpanRef.current.style.color = "red";
								// 					}
								//   }}
								onChange={(e) => setEmailAdress(e.target.value)}
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
							{errors && emailAddress.length <= 0 ? (
								<p>Email can't be Empty</p>
							) : (
								""
							)}
							<p>{ResponseMsg}</p>
							{/* <span ref={emailSpanRef}>give vailed email address</span> */}
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicprofilepic">
							<Form.Label>Profilepic</Form.Label>
							<Form.Control
								className="ppc"
								placeholder="https://example.com"
								pattern="https://.*"
								type="url"
								// name="profilepic"
								// value={profilepic}
								ref={profilepicRef}
								onChange={(e) => setProfilePicData(e.target.value)}
							/>
							{errors && profilepicData.length <= 0 ? (
								<p>Profilepic can't be Empty</p>
							) : (
								""
							)}
						</Form.Group>
					</div>

					<div className="d-flex gencoun">
						<Form.Group className="mb-3 gender" controlId="formBasicgender">
							<Form.Label>Gender</Form.Label>
							<br></br>

							<select
								className="form-control w-100"
								id="gender"
								name="gender"
								// value={gender}
								ref={genRef}
								onChange={(e) => setGenderData(e.target.value)}
							>
								<option selected disabled value>
									select option...................................
								</option>
								<option>Male</option>
								<option>Female</option>
								<option>Transgender</option>
								{/* onChange{(e) => setGenderData(e.target.value)} */}
							</select>

							{errors && genderData.length <= 0 ? (
								<p>Must select Gender</p>
							) : (
								""
							)}
						</Form.Group>

						<Form.Group className="mb-3 country" controlId="formBasiccountry">
							<Form.Label>Country</Form.Label>
							<br></br>

							<select
								className="form-control"
								// value={country}
								name="country"
								ref={countryRef}
								onChange={(e) => setCountryData(e.target.value)}
							>
								<option selected disabled value>
									select option.....................................
								</option>

								<option value="ALA">Åland Islands</option>
								<option value="ALB">Albania</option>
								<option value="DZA">Algeria</option>
								<option value="ASM">American Samoa</option>
								<option value="AND">Andorra</option>
								<option value="AUS">Australia</option>
								<option value="BRB">Barbados</option>

								<option value="CUB">Cuba</option>
								<option value="DEU">Germany</option>
								<option value="GRL">Greenland</option>
								<option value="GRD">Grenada</option>
								<option value="HKG">Hong Kong</option>
								<option value="HUN">Hungary</option>
								<option value="ISL">Iceland</option>
								<option value="IND">India</option>
								<option value="ITA">Italy</option>
								<option value="JAM">Jamaica</option>
								<option value="JPN">Japan</option>
								<option value="JEY">Jersey</option>
								<option value="KAZ">Kazakhstan</option>

								<option value="PAK">Pakistan</option>
								<option value="PLW">Palau</option>

								<option value="THA">Thailand</option>
								<option value="TUV">Tuvalu</option>
								<option value="UGA">Uganda</option>
								<option value="UKR">Ukraine</option>
							</select>
							{errors && countryData.length <= 0 ? (
								<p>Must select Country</p>
							) : (
								""
							)}
						</Form.Group>
					</div>

					<div className="d-flex">
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								className="fname"
								type="password"
								placeholder="Password"
								// ref={passwordInput}
								// value={password}
								name="password"
								ref={passwordRef}
								onFocus={(e) => {
									e.target.style.backgroundColor = "#e6ecff";
								}}
								// onBlur={(e) => {
								// 	e.target.style.backgroundColor = "#c7aba9";
								// }}

								onChange={(e) => setPassWordData(e.target.value)}
							/>
							{errors && passwordData.length <= 0 ? (
								<p>PassWord can't be Empty</p>
							) : (
								""
							)}
							{/* <span ref={passwordSpanRef}></span> */}
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicConfirmPassword">
							<Form.Label>ConfirmPassword</Form.Label>
							<Form.Control
								className="gname"
								type="password"
								placeholder="ConfirmPassword"
								name="confirmpassword"
								// ref={confirmpasswordInput}
								ref={confirmpasswordRef}
								onFocus={(e) => {
									e.target.style.backgroundColor = "#e6ecff";
								}}
								// onBlur={(e) => {
								// 	e.target.style.backgroundColor = "#c7aba9";
								// }}
								// 				onChange={() => {
								// 					let validpassword = confirmpassword(
								// 						confirmpasswordInput.current.value
								// 					);
								// 					if (validpassword === true) {
								//       confirmpasswordSpanRef.current.innerHTML = "valid password";
								//       confirmpasswordSpanRef.current.style.color = "green";
								// 					} else {
								// 						confirmpasswordSpanRef.current.innerHTML =
								//         "invalid password(min 8 and max 15)";
								// 					}
								//   }}
								onChange={(e) => setCpsw(e.target.value)}

								// value={confirmpassword}
							/>
							{errors && cpsw !== passwordData ? (
								<p>Password and confirmpassword doesn't match</p>
							) : (
								""
							)}

							{/* <span ref={confirmpasswordSpanRef}></span> */}
						</Form.Group>
					</div>

					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check
							type="checkbox"
							label="I accept The Terms and Conditions"
						/>
					</Form.Group>

					<div className="d-flex">
						<button
							onClick={() => {
								sendPlayerDataToServer();
								// alert("data is submitting");
							}}
							type="submit"
							class="btn btn-primary"
						>
							Submit
						</button>
						<button
							onClick={() => {
								navigate("/Table");
							}}
							type="button"
							class="btn btn-primary"
						>
							Get Data
						</button>
					</div>
					{/* <p>{ResponseMsg}</p> */}
				</form>
			</div>
		</div>
	);
}
