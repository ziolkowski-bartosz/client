import { gql } from "@apollo/client";

export const GET_SHIPMENTS_QUERY = gql`
  query getShipments($shipmentId: ID) {
    getShipments(shipmentId: $shipmentId) {
      id
      name
      created
      open_shipment_url
      report_version
      report_id
      report_url
      user_id
      cargospace_id
      public_url
      public_report_url
      is_archived
    }
  }
`;
