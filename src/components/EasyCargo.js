import "../assets/styles/EasyCargo.css";

import React, { useRef } from "react";

import { GET_SHIPMENTS_QUERY } from "../graphql/easycargo";
import { useLazyQuery } from "@apollo/client";

function EasyCargo() {
  const shipmentInputRef = useRef(null);
  const [
    getShipments,
    { data = null, loading: shipmentsLoading, error: shipmentsError },
  ] = useLazyQuery(GET_SHIPMENTS_QUERY, {
    variables: { shipmentId: shipmentInputRef.current?.value.trim() },
  });

  function formatDate(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    return new Date(dateString).toLocaleDateString("en-UK", options);
  }

  return (
    <div className="easycargo-container">
      <h2 className="form-slogan about-slogan">Get shipment(s) info! 🚚</h2>
      <div className="search-bar">
        <input ref={shipmentInputRef} placeholder="Enter shipment id..." />
        <button className="form-btn search-btn" onClick={getShipments}>
          Get shipment(s)
        </button>
      </div>
      {shipmentsLoading ? (
        <h1 className="form-slogan info-listing-slogan">Loading...</h1>
      ) : (
        shipmentsError && (
          <h1 className="form-slogan info-listing-slogan">
            {shipmentsError.message}
          </h1>
        )
      )}
      <div>
        {data && (
          <table className="easycargo-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Shipment ID</th>
                <th>Created</th>
                <th>Open Shipment URL</th>
                <th>User ID</th>
              </tr>
            </thead>
            <tbody>
              {data.getShipments.map((shipment) => (
                <tr key={shipment.id}>
                  <td>{shipment.name}</td>
                  <td>{shipment.id}</td>
                  <td>{formatDate(shipment.created)}</td>
                  <td>
                    <a
                      href={shipment.open_shipment_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {shipment.open_shipment_url}
                    </a>
                  </td>
                  <td>{shipment.user_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default EasyCargo;
