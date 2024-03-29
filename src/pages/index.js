import React, {Component} from "react";
import {DataContext} from '../data/contextproduct';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Index extends Component{
  constructor(props){
      super(props);
      this.state = {
      }
    }

    static contextType = DataContext;

  render(){
    const {WorldCovidCaseData, News} = this.context;
    
    return(
      <div>
          <section className="section dashboard">
            <div className="row">

              <div className="col-lg-12">
                <div className="row">

                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card sales-card">
                      <div className="card-body">
                        <h5 className="card-title">Covid Cases <span>| In the World</span></h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart"></i>
                          </div>
                          <div className="ps-3">
                            {
                              WorldCovidCaseData ?
                              (
                                <>
                                  <h6>{ WorldCovidCaseData.world_total.total_cases } <span className="font-14">cases</span></h6>
                                  <span className="text-success small pt-1">{ WorldCovidCaseData.world_total.total_recovered } <span className="font-10">Recoverd</span></span>
                                  <br />
                                  <span className="text-danger small">{ WorldCovidCaseData.world_total.total_deaths } <span className="font-10">Deaths</span></span>
                                </>
                              )
                              :
                              (<>No Data</>)
                            }
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card info-card revenue-card">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Revenue <span>| This Month</span></h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar"></i>
                          </div>
                          <div className="ps-3">
                            <h6>$3,264</h6>
                            <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-12">

                    <div className="card info-card customers-card">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Customers <span>| This Year</span></h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-people"></i>
                          </div>
                          <div className="ps-3">
                            <h6>1244</h6>
                            <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>

                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                  </div>
                  </div>
                  </div>

                        <div className="row">

              <div className="col-lg-8">
                <div className="row">

                  <div className="col-12">
                    <div className="card">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Reports <span>/Today</span></h5>

                        <div id="reportsChart"></div>


                      </div>

                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card recent-sales">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Recent Sales <span>| Today</span></h5>

                        <table className="table table-borderless datatable">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Customer</th>
                              <th scope="col">Product</th>
                              <th scope="col">Price</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"><a href="#">#2457</a></th>
                              <td>Brandon Jacob</td>
                              <td><a href="#" className="text-primary">At praesentium minu</a></td>
                              <td>$64</td>
                              <td><span className="badge bg-success">Approved</span></td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2147</a></th>
                              <td>Bridie Kessler</td>
                              <td><a href="#" className="text-primary">Blanditiis dolor omnis similique</a></td>
                              <td>$47</td>
                              <td><span className="badge bg-warning">Pending</span></td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2049</a></th>
                              <td>Ashleigh Langosh</td>
                              <td><a href="#" className="text-primary">At recusandae consectetur</a></td>
                              <td>$147</td>
                              <td><span className="badge bg-success">Approved</span></td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2644</a></th>
                              <td>Angus Grady</td>
                              <td><a href="#" className="text-primar">Ut voluptatem id earum et</a></td>
                              <td>$67</td>
                              <td><span className="badge bg-danger">Rejected</span></td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2644</a></th>
                              <td>Raheem Lehner</td>
                              <td><a href="#" className="text-primary">Sunt similique distinctio</a></td>
                              <td>$165</td>
                              <td><span className="badge bg-success">Approved</span></td>
                            </tr>
                          </tbody>
                        </table>

                      </div>

                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card top-selling">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li><a className="dropdown-item" href="#">Today</a></li>
                          <li><a className="dropdown-item" href="#">This Month</a></li>
                          <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                      </div>

                      <div className="card-body pb-0">
                        <h5 className="card-title">Top Selling <span>| Today</span></h5>

                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th scope="col">Preview</th>
                              <th scope="col">Product</th>
                              <th scope="col">Price</th>
                              <th scope="col">Sold</th>
                              <th scope="col">Revenue</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"><a href="#"><img src="assets/img/product-1.jpg" alt="" /></a></th>
                              <td><a href="#" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                              <td>$64</td>
                              <td className="fw-bold">124</td>
                              <td>$5,828</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt="" /></a></th>
                              <td><a href="#" className="text-primary fw-bold">Exercitationem similique doloremque</a></td>
                              <td>$46</td>
                              <td className="fw-bold">98</td>
                              <td>$4,508</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#"><img src="assets/img/product-3.jpg" alt="" /></a></th>
                              <td><a href="#" className="text-primary fw-bold">Doloribus nisi exercitationem</a></td>
                              <td>$59</td>
                              <td className="fw-bold">74</td>
                              <td>$4,366</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#"><img src="assets/img/product-4.jpg" alt="" /></a></th>
                              <td><a href="#" className="text-primary fw-bold">Officiis quaerat sint rerum error</a></td>
                              <td>$32</td>
                              <td className="fw-bold">63</td>
                              <td>$2,016</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt="" /></a></th>
                              <td><a href="#" className="text-primary fw-bold">Sit unde debitis delectus repellendus</a></td>
                              <td>$79</td>
                              <td className="fw-bold">41</td>
                              <td>$3,239</td>
                            </tr>
                          </tbody>
                        </table>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <div className="col-lg-4">

                
                <div className="card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Recent Activity <span>| Today</span></h5>

                    <div className="activity">

                      <div className="activity-item d-flex">
                        <div className="activite-label">32 min</div>
                        <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                        <div className="activity-content">
                          Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                        </div>
                      </div>

                      <div className="activity-item d-flex">
                        <div className="activite-label">56 min</div>
                        <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                        <div className="activity-content">
                          Voluptatem blanditiis blanditiis eveniet
                        </div>
                      </div>

                      <div className="activity-item d-flex">
                        <div className="activite-label">2 hrs</div>
                        <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                        <div className="activity-content">
                          Voluptates corrupti molestias voluptatem
                        </div>
                      </div>

                      <div className="activity-item d-flex">
                        <div className="activite-label">1 day</div>
                        <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                        <div className="activity-content">
                          Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                        </div>
                      </div>

                      <div className="activity-item d-flex">
                        <div className="activite-label">2 days</div>
                        <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                        <div className="activity-content">
                          Est sit eum reiciendis exercitationem
                        </div>
                      </div>

                      <div className="activity-item d-flex">
                        <div className="activite-label">4 weeks</div>
                        <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                        <div className="activity-content">
                          Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
                
                <div className="card">
                  

                  <div className="card-body pb-0">
                    <h5 className="card-title">News &amp; Updates <span>| Today</span></h5>

                    <div className="news">
                      {
                        News.length > 0 && 
                        (
                          <>
                            {
                              News.map((news, index)=> (
                                <div key={index} className="post-item clearfix">
                                  <img src={ news.urlToImage } alt="" />
                                  <h4><a href={ news.url } target="_blank">{ news.title }</a></h4>
                                  <p>{ news.description }</p>
                                  <h4 className="news-author">{ news.author }, { news.source.name }</h4>
                                </div>
                              ))
                            }
                          </>
                        )
                      }
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>
      </div>
    )
  }
}