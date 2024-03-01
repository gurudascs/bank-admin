import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
import './Main.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function Main() {

    return (
        <div className='container-fluid px-0'>
            <nav className="navbar navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5 d-flex align-items-center" href="#">
                        <img src="fsad" alt="logo" width="100px" className="d-inline-block align-text-top" />
                        <strong className='fs-2 '>ROYAL TRAVANCORE</strong>
                    </a>
                    <div className='d-flex'>
                        <FontAwesomeIcon icon={faHouse} className=' me-5 mt-4' />
                        <FontAwesomeIcon icon={faPowerOff} className='text-danger me-5 mt-4' />
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faUser} className='me-3 mt-4' />
                            <ul className='list-unstyled mb-1'>
                                <li className='me-2'>User</li>
                                <li className='me-2'>Branch</li>
                                <li>Date</li>
                            </ul>
                            <ul className='list-unstyled mb-1 me-5'>
                                <li className='me-2'>: Admin</li>
                                <li className='me-2'>: Branch name</li>
                                <li>: dd/mm/yyyy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='marquee  px-5 m-2'>
                <marquee className='text-white' behavior="scroll" direction="left">New Updates : Welcome to Royal Travancore....Have a nice day....</marquee>
            </div>

            <Navbar expand="lg" className='navbar2'>
                <Nav className="mr-auto">
                    <NavDropdown className='navdrop' title="ADMIN" id="dropdown">
                        <NavDropdown.Item className='navdropitem' href="#">Company</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Branch Creation</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Director</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Scheme/Head</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Change Cashier</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">User/Employee</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Payroll</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Promoter</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Interest Settings</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='navdrop' title="TELLER/CASHIER" id="dropdown" >
                        <NavDropdown className='submenu' title="Teller" id="submenu-teller" drop="end">
                            <NavDropdown.Item className='navdropitem' href="#">Submenu Item 1</NavDropdown.Item>
                            <NavDropdown.Item className='navdropitem' href="#">Submenu Item 2</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className='submenu' title="Cashier" id="submenu-teller" drop="end">
                            <NavDropdown.Item className='navdropitem' href="#">Submenu Item 3</NavDropdown.Item>
                            <NavDropdown.Item className='navdropitem' href="#">Submenu Item 4</NavDropdown.Item>
                        </NavDropdown>
                    </NavDropdown>

                    <NavDropdown className='navdrop' title="TRANSACTION" id="dropdown">
                        <NavDropdown.Item className='navdropitem' href="#">Company</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Branch Creation</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Director</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Scheme/Head</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Change Cashier</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">User/Employee</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Payroll</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Promoter</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Interest Settings</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='navdrop' title="UTILITIES" id="dropdown">
                        <NavDropdown.Item className='navdropitem' href="#">Company</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Branch Creation</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Director</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Scheme/Head</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Change Cashier</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">User/Employee</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Payroll</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Promoter</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Interest Settings</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='navdrop' title="LOAN APPLICATION" id="dropdown">
                        <NavDropdown.Item className='navdropitem' href="#">Company</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Branch Creation</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Director</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Scheme/Head</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Change Cashier</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">User/Employee</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Payroll</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Promoter</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Interest Settings</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='navdrop' title="REPORTS" id="dropdown">
                        <NavDropdown.Item className='navdropitem' href="#">Company</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Branch Creation</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Director</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Scheme/Head</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Change Cashier</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">User/Employee</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Payroll</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Promoter</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Interest Settings</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='navdrop' title="PRINTING" id="dropdown">
                        <NavDropdown.Item className='navdropitem' href="#">Company</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Branch Creation</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Director</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Scheme/Head</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Change Cashier</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">User/Employee</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Payroll</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Promoter</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Interest Settings</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='navdrop' title="DAILY PROCESS" id="dropdown">
                        <NavDropdown.Item className='navdropitem' href="#">Company</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Branch Creation</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Director</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Scheme/Head</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Change Cashier</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">User/Employee</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Payroll</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Promoter</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Interest Settings</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='navdrop' title="ASSOCIATE" id="dropdown">
                        <NavDropdown.Item className='navdropitem' href="#">Company</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Branch Creation</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Director</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Scheme/Head</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Change Cashier</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">User/Employee</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Payroll</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Promoter</NavDropdown.Item>
                        <NavDropdown.Item className='navdropitem' href="#">Interest Settings</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </Navbar>

            <div className='row'>
                <div className="col-lg-6 col-md-12">

                    <ul className="nav nav-pills p-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">FAVOURITES</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">BANK POSITION</button>
                        </li>
                    </ul>

                    <div className="tab-content p-3" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row">
                                <div className="col-4 d-grid gap-2">
                                    <button className='btn btn-block' type='button'>ACCOUNT TRANSACTION</button><br />
                                    <button className='btn btn-block' type='button'>MANAGER PASSING</button><br />
                                    <button className='btn btn-block' type='button'>SUSPENSE SUB ACCOUNT</button>
                                </div>
                                <div className="col-4 d-grid gap-2">
                                    <button className='btn btn-block' type='button'>GENERAL TRANSACTION</button><br />
                                    <button className='btn btn-block' type='button'>USER ACCOUNT DETAILS</button><br />
                                    <button className='btn btn-block' type='button'>TRANSACTION REPORT</button>
                                </div>
                                <div className="col-4 d-grid gap-2">
                                    <button className='btn btn-block' type='button'>LOAN CALCULATOR</button><br />
                                    <button className='btn btn-block' type='button'>OUTSTANDING REPORT</button><br />
                                    <button className='btn btn-block' type='button'>GOLD LOAN</button>

                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card">
                                        <img src="..." class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="..." class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="..." class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="..." class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 px-md-5">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th id='thead' className='text-center' colSpan={2}>BRANCH POSITIONS</th>
                            </tr>
                            <tr>
                                <th colSpan={2}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th id='thead'>Particulars</th>
                                <th id='thead'>Amount</th>
                            </tr>
                            <tr>
                                <td>CASH BALANCE</td>
                                <td>&#8377;</td>
                            </tr>
                            <tr>
                                <td>DEPOSIT COUNT</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>DEPOSIT BALANCE</td>
                                <td>&#8377;</td>
                            </tr>
                            <tr>
                                <td>MATURED AMOUNT</td>
                                <td>&#8377;</td>
                            </tr>
                            <tr>
                                <td>LOAN COUNT</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>LOAN BALANCE</td>
                                <td>&#8377;</td>
                            </tr>
                            <tr>
                                <td>DEPOSIT / LOAN %</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th id='thead' className='text-center' colSpan={4}>DEPOSIT STATUS</th>
                            </tr>
                            <tr>
                                <th colSpan={4}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th id='thead'>Customer Name</th>
                                <th id='thead'>A/C No.</th>
                                <th id='thead'>Amount</th>
                                <th id='thead'>Mobile No.</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>&#8377;</td>
                                <td></td>
                            </tr>


                        </tbody>
                    </table>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th id='thead' className='text-center' colSpan={4}>LOAN STATUS</th>
                            </tr>
                            <tr>
                                <th colSpan={4}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th id='thead'>Customer Name</th>
                                <th id='thead'>A/C No.</th>
                                <th id='thead'>Amount</th>
                                <th id='thead'>Mobile No.</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>


                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
}

export default Main;
