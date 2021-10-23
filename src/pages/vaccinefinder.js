import React, {Component, Fragment} from "react";
import {DataContext} from '../data/contextproduct';
import axios from 'axios';

export default class VaccineFinder extends Component{
  	static contextType = DataContext;
  	  constructor(props) {
	    super(props);
	    this.state = { 
	    	name: '',  
	    	email: '',
	    	password: '',
	    	loginname: '',
	    	loginpassword: '',
	    	mobileNumber: '',
	    	txnId: '',
	    	otp: '',
	    	states: [],
	    	districts: [],
	    	statesId: '',
	    	districtId: '',
	    	date: '',
	    	VaccinationData: []

	    };
	    this.stateFilter = this.stateFilter.bind(this);
	    this.districtFilter = this.districtFilter.bind(this);
	}

	stateFilter(event){
		this.setState({statesId: event.target.value})
	  	const self = this
	  	if(event.target.value){
	  	axios({
            method: 'GET',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+event.target.value+'/',
            dataType: "json",
            config: 
            	{ headers: {
            		'Content-Type': 'application/json',
            	}
            }
        })
        .then(
        	response => {
            	this.setState({ districts: response.data.districts })
            }
        )
	  }
	}

	districtFilter(event){
		this.setState({districtId: event.target.value})
		const DataDay = this.state.date.split('-')[2]
		const DataMonth = this.state.date.split('-')[1]
		const DataYear = this.state.date.split('-')[0]
		const fullDate = DataDay + "-" + DataMonth + "-" + DataYear
		console.log(fullDate)
		axios({
            method: 'GET',
            url: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+event.target.value+'&date='+fullDate+'/',
            dataType: "json",
            config: 
            	{ headers: {
            		'Content-Type': 'application/json',
            	}
            }
        })
        .then(
        	response => {
            	this.setState({ VaccinationData: response.data.sessions })
            }
        )
	}

	componentDidMount(){
        axios({
            method: 'GET',
            url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
            dataType: "json",
            config: 
            	{ headers: {
            		'Content-Type': 'application/json',
            	}
            }
        })
        .then(
        	response => {
            	this.setState({ states: response.data.states })
            }
        )
	}

    userLogin = () => {
	    axios({
            method: 'POST',
            url: "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
            dataType: "json",
            config: 
            	{ headers: {
            		'Content-Type': 'application/json',
            	}
            },
            data: {
            	"mobile": this.state.mobileNumber,
            }
        })
        .then(
        	response => {
            	this.setState({ txnId: response.data.txnId })
            	console.log(response)
            }
        )
	}


	OTP = () => {
	    axios({
            method: 'POST',
            url: "https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP",
            dataType: "json",
            config: 
            	{ headers: {
            		'Content-Type': 'application/json',
            	}
            },
            data: {
            	"otp": this.state.otp,
            	"txnId": this.state.txnId
            }
        })
        .then(
        	response => {
            	console.log(response)
            }
        )
	}

	
	render(){
		return(
			<Fragment>
				<div className="row">
					<div className="col-lg-6">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Log In</h5>
								<form className="row g-3">
									{
			              				this.state.txnId == '' ? (
											<>
												<div class="col-12">
								                	<label for="inputNanme4" class="form-label">Please Enter Mobile Number</label>
								                	<input type="text" className="form-control" placeholder="Enter Mobile Number"  name="mobileNumber" value={this.state.mobileNumber} onChange={e => this.setState({ mobileNumber: e.target.value })} />
								                </div>
								                <div class="text-center">
								                	<button type="submit" class="btn btn-primary" onClick={()=> this.userLogin(this.state.mobileNumber)}>Submit</button>
								                </div>
							               	</>
							            )
							            :
							            (
							            	<>
							            		<div class="col-12">
								                	<label for="inputNanme4" class="form-label">Please Enter OTP</label>
								                	<input type="text" className="form-control" placeholder="Enter OTP"  name="otp" value={this.state.otp} onChange={e => this.setState({ otp: e.target.value })} />
								                </div>
								                <div class="text-center">
								                	<button type="submit" class="btn btn-primary" onClick={()=> this.OTP(this.state.otp)}>Submit</button>
								                </div>
							            	</>
							            )
							        }
								</form>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Vaccine Finder</h5>
								<form className="row g-3">
									<div className="col-12">
										<label className="form-label">Please Select State</label>
										<select className="form-select" onChange={this.stateFilter}>
						          			<option value="">Select State</option>
						          			{
						          				this.state.states.map((states, index) => (
						          					<option key={index} value={ states.state_id }>{ states.state_name }</option>
						          				))
						          			}
						          		</select>
						          	</div>
					          		{
					          			this.state.statesId &&
					          			(
					          				<div className="col-12">
					          					<label className="form-label">Please Select Date</label>
							          			<input type="date" className="form-control mb-2" value={this.state.date} onChange={e => this.setState({ date: e.target.value })} />
						          			</div>
					          			)
					          		}
					          		{
					          			this.state.date && (
					          				<div className="col-12">
					          					<label className="form-label">Please Select Districts</label>
					          					<select className="form-select" onChange={this.districtFilter}>
						          					<option value="">Select Districts</option>
								          			{
								          				this.state.districts.map((district, index) => (
								          					<option key={index} value={ district.district_id }>{ district.district_name }</option>
								          				))
								          			}
								          		</select>
					          				</div>
					          			)
					          		}
								</form>
							</div>
						</div>
					</div>
				</div>

				 {
			        this.state.VaccinationData.length != 0  && (
						<div class="row">
					        <div class="col-lg-12">
					        	<div class="card">
					            	<div class="card-body">
					              		<h5 class="card-title">Vaccine Center</h5>
							            <p>Add lightweight datatables to your project with using the library. Just add <code>.datatable</code> class name to any table you wish to conver to a datatable</p>
					              		<div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
						              		<div class="dataTable-container">
							              		<table class="table datatable dataTable-table vaccineTable">
								                	<tbody>
									                	{
										          			this.state.VaccinationData.map((districtsData, index) => (
										          				<tr key={index}>
												          			<td>
												          				<b>{districtsData.name}</b><br />
												          				{districtsData.address},
												          				{districtsData.pincode}
												          			</td>
												          			<td>
												          				<table width="100%">
												          					<tbody>
												          						<tr>
												          							<td colspan="3">{ districtsData.vaccine}</td>
												          						</tr>
												          						<tr className="vaccine-available">
												          							<td>D1 <br />{districtsData.available_capacity_dose1}</td>
												          							<td>{districtsData.available_capacity}</td>
												          							<td>D2 <br />{districtsData.available_capacity_dose2}</td>
												          						</tr>
												          						<tr>
												          							<td colspan="3" className="vaccineType">
												          								{ districtsData.allow_all_age == false ?
												          									(<> {districtsData.min_age_limit} & {districtsData.max_age_limit}</>)
												          									:
												          									(<>{districtsData.min_age_limit} & Above</>)
												          								}
												          							</td>
												          						</tr>
												          					</tbody>
												          				</table>
												          			</td>
												          			{	districtsData.fee_type == 'Paid' ? 
												          				(<td className="paid">{districtsData.fee_type}</td>)
												          				:
												          				(<td className="free">{districtsData.fee_type}</td>)
												          			}
												          		</tr>
										          			))
										          		}
									                </tbody>
							              		</table>
						            		</div>
					              		</div>
					            	</div>
					          	</div>
					        </div>
					    </div>
					)
				}
			</Fragment>
		)
	}
}