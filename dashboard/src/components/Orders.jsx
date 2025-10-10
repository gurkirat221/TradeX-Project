import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    axios.get("https://tradex-backend-qfh6.onrender.com/allOrders", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      params: userId ? { userId } : {}
    }).then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  const refresh = async () => {
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const res = await axios.get("https://tradex-backend-qfh6.onrender.com/allOrders", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      params: userId ? { userId } : {}
    });
    setAllOrders(res.data);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("authToken");
    await axios.delete(`https://tradex-backend-qfh6.onrender.com/order/${id}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    refresh();
  };

  const exportCsv = () => {
    const header = ["Name","Qty","Price","Mode"];
    const rows = allOrders.map(o => [o.name, o.qty, o.price, o.mode]);
    const csv = [header, ...rows].map(r => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orders.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fade-in">
      {allOrders.length === 0 ? (
        <div className="orders">
          <div className="no-orders">
            <div className="icon">📋</div>
            <p>You haven't placed any orders today</p>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)' }}>
              Start trading to see your orders here
            </p>
            <Link to="/" className="btn btn-blue">
              Get started
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="title">📋 Orders ({allOrders.length})</h3>
            <div>
              <button className="btn btn-grey" onClick={refresh} style={{ marginRight: 8 }}>Refresh</button>
              <button className="btn btn-blue" onClick={exportCsv}>Export CSV</button>
            </div>
          </div>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((stock) => (
                  <tr key={stock._id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                        <div style={{ 
                          width: '8px', 
                          height: '8px', 
                          borderRadius: '50%', 
                          backgroundColor: stock.mode === 'BUY' ? 'var(--accent-color)' : 'var(--danger-color)' 
                        }}></div>
                        <span style={{ fontWeight: '600' }}>{stock.name}</span>
                      </div>
                    </td>
                    <td>{stock.qty}</td>
                    <td>₹{stock.price.toFixed(2)}</td>
                    <td>
                      <span style={{
                        padding: 'var(--space-1) var(--space-2)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 'var(--font-size-xs)',
                        fontWeight: '600',
                        backgroundColor: stock.mode === 'BUY' ? 'var(--accent-color)' : 'var(--danger-color)',
                        color: 'white'
                      }}>
                        {stock.mode}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-red" onClick={() => handleDelete(stock._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
