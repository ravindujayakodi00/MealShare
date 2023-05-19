import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VolunteerTable.css';

const VolunteerTable = () => {
  //Table Data
  const [TableData, setTableData] = useState('');
  //Variable Data
  const [InvoiceNumber, setInvoiceNumber] = useState('');
  const [ProductTitle, setProductTitle] = useState('');
  const [InvoiceDate, setInvoiceDate] = useState('');
  const [Price, setPrice] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [Total, setTotal] = useState('');
  const [RefundAmount, setRefundAmount] = useState('');
  const [RefundCustomer, setRefundCustomer] = useState('');
  //Response Item
  const [EveItem, setEveItem] = useState('');
  //Validations
  const [InvoiceNumberValidation, setInvoiceNumberValidation] = useState('');
  const [ProductTitleValidation, setProductTitleValidation] = useState('');
  const [InvoiceDateValidation, setInvoiceDateValidation] = useState('');
  const [PriceValidation, setPriceValidation] = useState('');
  const [QuantityValidation, setQuantityValidation] = useState('');
  const [TotalValidation, setTotalValidation] = useState('');
  const [RefundAmountValidation, setRefundAmountValidation] = useState('');
  const [RefundCustomerValidation, setRefundCustomerValidation] = useState('');
  //Get User Details
  const getAllData = () => {
    axios.get('http://localhost:8082/returninvoice/get').then((response) => {
      setTableData(response.data);
    });
  };
  //Save User
  const saveUser = () => {
    const model = {
      invoiceNo: InvoiceNumber,
      invoicedate: InvoiceDate,
      Product_title: ProductTitle,
      price: Price,
      qty: Quantity,
      total: Total,
      refundamount: RefundAmount,
      returncusName: RefundCustomer,
    };

    setInvoiceNumberValidation('');
    setProductTitleValidation('');
    setInvoiceDateValidation('');
    setPriceValidation('');
    setQuantityValidation('');
    setTotalValidation('');
    setRefundAmountValidation('');
    setRefundCustomerValidation('');
    if (InvoiceNumber === '') {
      setInvoiceNumberValidation('Please Enter First Name !!');
    } else if (ProductTitle === '') {
      setProductTitleValidation('Please Enter Last Name !!');
    } else if (InvoiceDate === '') {
      setInvoiceDateValidation('Please Enter InvoiceDate !!');
    } else if (Price === '') {
      setPriceValidation('Please Enter Price !!');
    } else if (Quantity === '') {
      setQuantityValidation('Please Enter Quantity !!');
    } else if (Total === '') {
      setTotalValidation('Please Enter Total !!');
    } else if (RefundAmount === '') {
      setRefundAmountValidation('Please EnterRefundAmount !!');
    } else if (RefundCustomer === '') {
      setRefundCustomerValidation('Please Enter RefundCustomer !!');
    } else {
      axios
        .post('http://localhost:8082/returninvoice/add', model)
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            getAllData();
            toast.success('Successfully Saved !!!');
            setInvoiceNumber('');
            setProductTitle('');
            setInvoiceDate('');
            setPrice('');
          }
        });
    }
  };
  //Delete User
  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:8082/returninvoice/delete/${id}`)
      .then((response) => {
        console.log(response);
        getAllData();
      });
  };
  //Form Load
  useEffect(() => {
    if (!TableData) {
      getAllData();
    }
  });
  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (eventItem) => {
    setRefundCustomer(eventItem.returncusName);
    setRefundAmount(eventItem.refundamount);
    setQuantity(eventItem.qty);
    setTotal(eventItem.total);
    setEveItem(eventItem);
    setShow(true);
  };
  //Edit User
  const EditUser = (eventItem) => {
    const model = {
      returncusName: RefundCustomer,
      refundamount: RefundAmount,
      qty: Quantity,
      total: Total,
    };
    console.log('Model', model);
    axios
      .put(`http://localhost:8082/returninvoice/update/${eventItem._id}`, model)
      .then((response) => {
        if (response.status == 200) {
          getAllData();
          toast.success('Successfully Updated !!!');
          setInvoiceNumber('');
          setInvoiceDate('');
          setProductTitle('');
          setQuantity('');
          setPrice('');
          setTotal('');
          setRefundAmount('');
          setRefundCustomer('');
          handleClose();
        }
      });
  };
  return (
    <Fragment>
      <NavBar></NavBar>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Card>
            <CardBody>
              <div className="row">
                <div className="col-md-6">
                  <FormGroup>
                    <Label>Invoice Number</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setInvoiceNumber(e.target.value);
                      }}
                    />
                    {InvoiceNumberValidation && (
                      <small style={{ color: 'red' }}>
                        {InvoiceNumberValidation}
                      </small>
                    )}
                  </FormGroup>
                </div>
                <div className="col-md-6">
                  <FormGroup>
                    <Label>Product Title</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setProductTitle(e.target.value);
                      }}
                    />
                    {ProductTitleValidation && (
                      <small style={{ color: 'red' }}>
                        {ProductTitleValidation}
                      </small>
                    )}
                  </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <FormGroup>
                    <Label>InvoiceDate</Label>
                    <Input
                      type="date"
                      onChange={(e) => {
                        setInvoiceDate(e.target.value);
                      }}
                    />
                    {InvoiceDateValidation && (
                      <small style={{ color: 'red' }}>
                        {InvoiceDateValidation}
                      </small>
                    )}
                  </FormGroup>
                </div>
                <div className="col-md-6">
                  <FormGroup>
                    <Label>Price</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setPrice(Number(e.target.value));
                      }}
                    />
                    {PriceValidation && (
                      <small style={{ color: 'red' }}>{PriceValidation}</small>
                    )}
                  </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <FormGroup>
                    <Label>Quantity</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setQuantity(Number(e.target.value));
                      }}
                    />
                    {QuantityValidation && (
                      <small style={{ color: 'red' }}>
                        {QuantityValidation}
                      </small>
                    )}
                  </FormGroup>
                </div>
                <div className="col-md-6">
                  <FormGroup>
                    <Label>Total</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setTotal(Number(e.target.value));
                      }}
                    />
                    {TotalValidation && (
                      <small style={{ color: 'red' }}>{TotalValidation}</small>
                    )}
                  </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <FormGroup>
                    <Label>Refund Amount</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setRefundAmount(Number(e.target.value));
                      }}
                    />
                    {RefundAmountValidation && (
                      <small style={{ color: 'red' }}>
                        {RefundAmountValidation}
                      </small>
                    )}
                  </FormGroup>
                </div>
                <div className="col-md-6">
                  <FormGroup>
                    <Label>Return Customer Name</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setRefundCustomer(e.target.value);
                      }}
                    />
                    {RefundCustomerValidation && (
                      <small style={{ color: 'red' }}>
                        {RefundCustomerValidation}
                      </small>
                    )}
                  </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-4">
                  <Button
                    color="primary"
                    className="col-md-6"
                    onClick={() => saveUser()}
                  >
                    Generate
                  </Button>
                </div>
                <div className="col-md-4"></div>
              </div>
            </CardBody>
          </Card>
          <br></br>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div>
        <Card>
          <CardHeader>All Return Invoices Details</CardHeader>
          <CardBody>
            <Table>
              <tr>
                <th>Record No</th>
                <th>Invoice No</th>
                <th>Product Title</th>
                <th>Invoice Date</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Refund Amount</th>
                <th>Refund Customer</th>
                <th>Actions</th>
              </tr>
              {TableData &&
                TableData.map((eventItem, index) => {
                  return (
                    <tr>
                      <td>{Number(index) + 1}</td>
                      <td>{eventItem.invoiceNo}</td>
                      <td>{eventItem.Product_title}</td>
                      <td>
                        {moment(eventItem.invoicedate).format('yyyy-DD-MM')}
                      </td>
                      <td>{eventItem.price}</td>
                      <td>{eventItem.qty}</td>
                      <td>{eventItem.total}</td>
                      <td>{eventItem.refundamount}</td>
                      <td>{eventItem.returncusName}</td>
                      <td>
                        <Button onClick={() => handleShow(eventItem)}>
                          Edit
                        </Button>{' '}
                        &nbsp;
                        <Button
                          color="danger"
                          onClick={() => deleteUser(eventItem._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </Table>
          </CardBody>
        </Card>
      </div>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Return Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                <FormGroup>
                  <Label>Refund Customer Name</Label>
                  <Input
                    value={RefundCustomer}
                    onChange={(e) => {
                      setRefundCustomer(e.target.value);
                    }}
                  />
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label>Refund Amount</Label>
                  <Input
                    value={RefundAmount}
                    onChange={(e) => {
                      setRefundAmount(e.target.value);
                    }}
                  />
                </FormGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <FormGroup>
                  <Label>Quantity</Label>
                  <Input
                    type="text"
                    value={Quantity}
                    onChange={(e) => {
                      setQuantity(Number(e.target.value));
                    }}
                  />
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label>Total</Label>
                  <Input
                    type="text"
                    value={Total}
                    onChange={(e) => {
                      setTotal(e.target.value);
                    }}
                  />
                </FormGroup>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                EditUser(EveItem);
              }}
            >
              Update Return Details
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Fragment>
  );
};

export default VolunteerTable;
