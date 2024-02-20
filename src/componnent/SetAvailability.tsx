import React, { useState } from 'react';

function SetAvailability() {
    const [selectId, setSelectId] = useState('');
    const [selectDate, setSelectDate] = useState('');
    const [selectTimeFrom, setSelectTimeFrom] = useState('');
    const [selectTimeTo, setSelectTimeTo] = useState('');
    const [tableData, setTableData] = useState([]);


    const renderTableRows = () => {
        return tableData.map((rowData, index) => (
            <tr key={index}>
                <td>{rowData.date}</td>
                <td>{rowData.timeFrom}</td>
                <td>{rowData.timeTo}</td>
            </tr>
        ));
    };

    function setTimeSlot() {

        if (selectId && selectDate && selectTimeFrom && selectTimeTo) {

            const requestData = {
                "userId": selectId,
                "date": selectDate,
                "timeFrom": selectTimeFrom,
                "timeTo": selectTimeTo
            };

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(requestData),
                redirect: 'follow'
            };

            fetch("http://localhost:8080/set/time", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                    reload();
                    alert("Time Slot wass added successfully...")
                })
                .catch(error => console.log('error', error));


        } else {
            alert('Please select all required fields.');
        }
    }

    function reload() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/get-time-all", requestOptions)
            .then(response => response.json())
            .then(result => {
                setTableData(result);
            })
            .catch(Error => console.log('error', Error));
    }
    return (
        <div>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-12 col-lg-12">
                        <h4 className="mb-3">Set Agent Availability</h4>
                        <hr className="my-4" />
                        <form className="needs-validation" noValidate>

                            <div className="row g-3">
                                {/* input Data Start*/}
                                <div className="col-sm-3">
                                    <label htmlFor="selectId" className="form-label">User ID</label>
                                    <select id='selectId' className="form-select" aria-label="Default select example" onChange={(e) => setSelectId(e.target.value)}>
                                        <option selected>Select ID</option>
                                        <option value="U01">U01</option>
                                        <option value="U02">U02</option>
                                        <option value="U03">U03</option>
                                        <option value="U01">U04</option>
                                        <option value="U02">U05</option>
                                        <option value="U03">U06</option>

                                    </select>
                                </div>

                                <div className="col-sm-3">
                                    <label htmlFor="selectDate" className="form-label">Select Date</label>
                                    <input type="date" id='selectDate' className="form-select" aria-label="Default select example" onChange={(e) => setSelectDate(e.target.value)} />                                                             
                                </div>

                                

                                {/* <div className="col-sm-3">
                                    <label htmlFor="selectDate" className="form-label">Select Date</label>
                                    <select id='selectDate' className="form-select" aria-label="Default select example" onChange={(e) => setSelectDate(e.target.value)}>
                                        <option selected>Select Date</option>
                                        <option value="2024.02.01">2024.02.01</option>
                                        <option value="2024.02.02">2024.02.02</option>
                                        <option value="2024.02.03">2024.02.03</option>
                                        <option value="2024.02.04">2024.02.04</option>
                                        <option value="2024.02.05">2024.02.05</option>
                                        <option value="2024.02.06">2024.02.06</option>
                                        <option value="2024.02.07">2024.02.07</option>
                                        <option value="2024.02.08">2024.02.08</option>
                                        <option value="2024.02.09">2024.02.09</option>
                                        <option value="2024.02.10">2024.02.10</option>
                                        <option value="2024.02.11">2024.02.11</option>
                                        <option value="2024.02.12">2024.02.12</option>
                                        <option value="2024.02.13">2024.02.13</option>
                                        <option value="2024.02.14">2024.02.14</option>
                                        <option value="2024.02.15">2024.02.15</option>
                                    </select>
                                </div> */}


                                <div className="col-sm-3">
                                    <label htmlFor="selectTimeFrom" className="form-label">Set Time (From)</label>
                                    <input type="time" step="2" name="time" required id='selectTimeFrom' className="form-select" aria-label="Default select example" onChange={(e) => setSelectTimeFrom(e.target.value)}></input>                                   
                                </div>

                                
                                <div className="col-sm-3">
                                    <label htmlFor="selectTimeTo" className="form-label">Set Time (To)</label>
                                    <input type="time" step="2" name="time" id='selectTimeTo' className="form-select" aria-label="Default select example" onChange={(e) => setSelectTimeTo(e.target.value)}></input>
                                 </div>

                                {/* <div className="col-sm-3">
                                    <label htmlFor="selectTimeFrom" className="form-label">Set Time (From)</label>
                                    <select id='selectTimeFrom' className="form-select" aria-label="Default select example" onChange={(e) => setSelectTimeFrom(e.target.value)}>
                                        <option selected>Select Time</option>
                                        <option value="00:00">00:00</option>
                                        <option value="01:00">01:00</option>
                                        <option value="02:00">02:00</option>
                                        <option value="03:00">03:00</option>
                                        <option value="04:00">04:00</option>
                                        <option value="05:00">05:00</option>
                                    </select>
                                </div> */}


                                {/* input Data end*/}
                                {/* set data Start*/}


                                <button id="btnSet" onClick={setTimeSlot} className="w-100 btn btn-primary btn-lg" type="button">Set Data</button>

                                <hr className="my-4" />

                                <h4 className="mb-3">Agent Available Time Slots</h4>

                                <table className="table border border-5">
                                    <thead>
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time (from)</th>
                                            <th scope="col">Time (to)</th>
                                        </tr>
                                    </thead>
                                    <tbody id='tbl-body-temp'>
                                        {renderTableRows()}
                                    </tbody>
                                </table>
                                {/* set data End*/}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SetAvailability