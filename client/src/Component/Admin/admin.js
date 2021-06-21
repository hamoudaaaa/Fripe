import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { Table, Button } from "react-bootstrap";

import { get_all_products } from "../../Redux/Action/Product";
import {
    delte_supplier,
    delte_user,
    get_all_supplier,
    get_all_user,
} from "../../Redux/Action/Admin";
import { get_cart } from "../../Redux/Action/Carts";

const Admin = () => {
    const token = localStorage.getItem("token");
    // const Clients = useSelector((state) => state.adminReducer.Clients);
    // const Suppliers = useSelector((state) => state.adminReducer.Suppliers);
    const Products = useSelector((state) => state.productsReducer.Products);
    const user = useSelector((state) => state.adminReducer.user);
    const supplier = useSelector((state) => state.adminReducer.supplier);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_all_products());
        dispatch(get_all_user());
        dispatch(get_all_supplier());
    }, [dispatch]);
    return (
        <div className="Admin">
            <div className="list Products">
                <h4>Products</h4>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Products ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Products
                            ? Products.map((el, i) => (
                                  <tr key={i}>
                                      <td>{el._id}</td>
                                      <td>
                                          <img
                                              style={{ width: "100px" }}
                                              className="prod-img"
                                              src={el.image}
                                              alt="product"
                                          />
                                      </td>
                                      <td>{el.name}</td>
                                      <td>{el.categorie}</td>
                                      <td>{el.description}</td>
                                      <td>{el.price}</td>
                                      <td>{el.rating}</td>
                                      <td>
                                          <Button variant="primary">
                                              <i className="far fa-edit"></i>
                                          </Button>
                                      </td>
                                      <td>
                                          <Button
                                              variant="danger"
                                              onClick={
                                                  async () => {
                                                      let result =
                                                          await axios.delete(
                                                              `/project/deleteproduct/${el._id}`
                                                          );
                                                      dispatch(
                                                          get_all_products()
                                                      );
                                                  }
                                                  //   dispatch(
                                                  //       delete_product(el._id)
                                                  //   )
                                              }
                                          >
                                              <i className="fas fa-trash-alt"></i>
                                          </Button>
                                      </td>
                                  </tr>
                              ))
                            : null}
                    </tbody>
                </Table>
            </div>

            {/* userr  */}
            <div className="list Products">
                <h4>user</h4>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>user ID</th>

                            <th>Name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>cin</th>
                        </tr>
                    </thead>

                    <tbody>
                        {user
                            ? user.map((el, i) => (
                                  <tr key={i}>
                                      <td>{el._id}</td>
                                      <td>{el.name}</td>
                                      <td>{el.email}</td> <td>{el.phone}</td>
                                      <td>{el.cin}</td>
                                      <td>
                                          <Button variant="primary">
                                              <i className="far fa-edit"></i>
                                          </Button>
                                      </td>
                                      <td>
                                          <Button
                                              variant="danger"
                                              onClick={() =>
                                                  dispatch(delte_user(el._id))
                                              }
                                          >
                                              <i className="fas fa-trash-alt"></i>
                                          </Button>
                                      </td>
                                  </tr>
                              ))
                            : null}
                    </tbody>
                </Table>
            </div>
            <div className="list Products">
                <h4>Supplier</h4>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Supplier ID</th>

                            <th>Name</th>
                            <th>email</th>
                            <th>phone</th>
                        </tr>
                    </thead>

                    <tbody>
                        {supplier
                            ? supplier.map((el, i) => (
                                  <tr key={i}>
                                      <td>{el._id}</td>
                                      <td>{el.name}</td>
                                      <td>{el.email}</td>
                                      <td>{el.phone}</td>

                                      <td>
                                          <Button variant="primary">
                                              <i className="far fa-edit"></i>
                                          </Button>
                                      </td>
                                      <td>
                                          <Button
                                              variant="danger"
                                              onClick={() => {
                                                  dispatch(
                                                      delte_supplier(el._id)
                                                  );
                                                  dispatch(get_all_products());
                                                  dispatch(get_cart());
                                              }}
                                          >
                                              <i className="fas fa-trash-alt"></i>
                                          </Button>
                                      </td>
                                  </tr>
                              ))
                            : null}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Admin;
