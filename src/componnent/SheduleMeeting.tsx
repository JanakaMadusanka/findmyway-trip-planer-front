import React, { useState} from 'react';

const SheduleMeeting = () => {

    const [meetingDetail, setMeetingDetail] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        date: "",
        time: "",
        medium: "",
        token: "",
        tokenDesc: "Please press Reserve Button to get your token",
        dates: []
    });

    const showMeetingDetail = () => {

         if (meetingDetail.firstName && meetingDetail.lastName && meetingDetail.contact && meetingDetail.email && meetingDetail.date && meetingDetail.time && meetingDetail.medium) {

            const min = 101;
            const max = 999;
            const random = Math.floor(Math.random() * (max - min + 1)) + min;

             setMeetingDetail((state) => ({
                 ...state,
                 token: random + "",
                 tokenDesc: "Please ensure to retain your TOKEN number when reaching out to us."
             }));

            //Save meeting details to database start

            const requestData = {
                "firstName": meetingDetail.firstName,
                "lastName": meetingDetail.lastName,
                "contact": meetingDetail.contact,
                "email": meetingDetail.email,
                "date": meetingDetail.date,
                "time": meetingDetail.time,
                "medium": meetingDetail.medium,
                "token": random + "",
                "agentId": "123"
            };

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(requestData),
                
            };

            fetch("http://localhost:8080/meeting/create",requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                    alert("Meeting wass created successfully...");
                })
                .catch(error => console.log('error', error));
            //Save meeting details to database start

        } else {
            alert('Please select all required fields.');
        }
    };

    function getTimeSlot() {

        fetch("http://localhost:8080/get-time-all")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setMeetingDetail((state) => ({
                    ...state,
                    dates: result
                }));
                //setTableData(result);
            })
            .catch(Error => console.log('error', Error));
    }


    return (
        <div>
            <div className="container">
                <div className="row g-5">
                    {/* Reserve Meeting Section Start*/}
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Reserve Meeting With Travel Agent</h4>
                        <hr className="my-4" />
                        <h6 className="mb-3">Traveler Details</h6>
                        <form className="needs-validation" noValidate>
                            {/* Traveler Details Start*/}
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name<span className="text-muted">(Mandatory)</span></label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" required 
                                    onChange={setValue => setMeetingDetail((state) => ({
                                        ...state,
                                        firstName: setValue.target.value
                                    }))} />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name<span className="text-muted">(Mandatory)</span></label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" required 
                                    onChange={setValue => setMeetingDetail((state) => ({
                                        ...state,
                                        lastName: setValue.target.value
                                    }))} />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="contact" className="form-label">Contact Number <span className="text-muted">(Mandatory)</span></label>
                                    <input type="tel" className="form-control" id="contact" placeholder="+94718888888" required 
                                    onChange={setValue => setMeetingDetail((state) => ({
                                        ...state,
                                        contact: setValue.target.value
                                    }))} />
                                    <div className="invalid-feedback">
                                        Please enter a valid contact Number.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" 
                                    onChange={setValue => setMeetingDetail((state) => ({
                                        ...state,
                                        email: setValue.target.value
                                    }))} />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                            </div>
                            {/* Traveler Details End*/}
                            <hr className="my-4" />

                            {/* Schedule Details Start*/}
                            <h6 className="mb-3">Schedule Details</h6>
                            <div className="row g-3">

                                <div className="col-sm-4">
                                    <label htmlFor="selectDate" className="form-label">Meeting Date <span className="text-muted">(Mandatory)</span></label>
                                    <select id='selectDate' className="form-select" aria-label="Default select example"
                                        onClick={getTimeSlot}
                                        onChange={setValue => setMeetingDetail((state) => ({
                                            ...state,
                                            date: setValue.target.value
                                        }))}>
                                        <option selected>Select Date</option>
                                        {meetingDetail.dates.map(d =>
                                            <option value={d.date}>{d.date}</option>
                                        )}                                       
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="selectTime" className="form-label">Meeting Time <span className="text-muted">(Mandatory)</span></label>
                                    <select id='selectTime' className="form-select" aria-label="Default select example"
                                    onChange={setValue => setMeetingDetail((state) => ({
                                        ...state,
                                        time: setValue.target.value
                                    }))}>
                                        <option selected>Select Time</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="selectMedium" className="form-label">Meeting Medium <span className="text-muted">(Mandatory)</span></label>
                                    <select id='selectMedium' className="form-select" aria-label="Default select example"
                                    onChange={setValue => setMeetingDetail((state) => ({
                                        ...state,
                                        medium: setValue.target.value
                                    }))}>
                                        <option selected>Select Medium</option>
                                        <option value="Telephone">Telephone</option>
                                        <option value="Whatsapp">Whatsapp</option>
                                        <option value="Physialy">Physicaly-at Agency</option>
                                    </select>
                                </div>
                                <button id="btnReserve" onClick={showMeetingDetail} className="w-100 btn btn-primary btn-lg" type="button">Reserve</button>

                                <div className="card text-center">
                                    <div className="card-header">
                                        Reservation Token
                                    </div>
                                    <div className="card-body">
                                        <h1 id="lblToken1" className="card-title">{meetingDetail.token}</h1>
                                        <p className="card-text">{meetingDetail.tokenDesc}</p>
                                    </div>
                                </div>
                            </div>
                            {/* Schedule Details End*/}
                        </form>
                    </div>
                    {/* Reserve Meeting Section End*/}
                    {/* My Reservations Section Start*/}
                    <div className="col-md-4 col-lg-4">
                        <h4 className="mb-3">My Reservations </h4>
                        <hr className="my-4" />
                        <h6 className="mb-3">Name : <span id="lblName" className="text-muted">{meetingDetail.firstName + " " + meetingDetail.lastName}</span></h6>
                        <h6 className="mb-3">email : <span id="lblEmail" className="text-muted">{meetingDetail.email}</span></h6>
                        <h6 className="mb-3">Contact No. : <span id="lblContact" className="text-muted">{meetingDetail.contact}</span></h6>
                        <h6 className="mb-3">Meeting Date : <span id="lblDate" className="text-muted">{meetingDetail.date}</span></h6>
                        <h6 className="mb-3">Meeting Time : <span id="lblTime" className="text-muted">{meetingDetail.time}</span></h6>
                        <h6 className="mb-3">Meeting Medium : <span id="lbMedium" className="text-muted">{meetingDetail.medium}</span></h6>
                        <h6 className="mb-3">Token No. : <span id="lblToken" className="text-muted">{meetingDetail.token}</span></h6>
                        <hr className="my-4" />
                        <h6 className="mb-3">Agent contact Details : </h6>
                        <label id="lblAgentContact" htmlFor="">Telephone No. : +94716666989</label>
                        <label id="lblAgentWhatsapp" htmlFor="">Whatsapp No. : +94772222222</label>
                        <label id="lblAgentAddress" htmlFor="">Address : No.45, Kandy Road, Nittambuwa, Sri Lanka</label>

                        <hr className="my-4" />
                        <h6 className="mb-3">Guidelines : </h6>
                        <p>Utilize the contact medium provided for scheduling meetings and kindly remember to reference your token number when meeting with our agent</p>
                        <hr className="my-4" />
                    </div>
                    {/* My Reservations Section End*/}
                </div>
            </div>
        </div>
    )
}
export default SheduleMeeting