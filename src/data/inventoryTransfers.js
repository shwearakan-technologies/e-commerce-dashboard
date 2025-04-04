export default [
  {
    transfer_id: 1,
    product_id: 101,
    variant_id: 1001,
    from_warehouse_id: 301,
    to_warehouse_id: 302,
    quantity: 50,
    status: "completed",
    tracking_number: "TRANS123456",
    expected_arrival: "2023-07-05T00:00:00Z",
    completed_at: "2023-07-04T15:30:00Z",
    created_by: 501,
    created_at: "2023-07-01T14:00:00Z",
    updated_at: "2023-07-04T15:30:00Z",
  },
  {
    transfer_id: 2,
    product_id: 102,
    variant_id: 1002,
    from_warehouse_id: 302,
    to_warehouse_id: 303,
    quantity: 30,
    status: "completed",
    tracking_number: "TRANS789012",
    expected_arrival: "2023-07-10T00:00:00Z",
    completed_at: "2023-07-09T11:45:00Z",
    created_by: 502,
    created_at: "2023-07-06T10:30:00Z",
    updated_at: "2023-07-09T11:45:00Z",
  },
  {
    transfer_id: 3,
    product_id: 103,
    variant_id: 1003,
    from_warehouse_id: 303,
    to_warehouse_id: 301,
    quantity: 40,
    status: "in_transit",
    tracking_number: "TRANS345678",
    expected_arrival: "2023-08-20T00:00:00Z",
    completed_at: null,
    created_by: 503,
    created_at: "2023-08-15T09:15:00Z",
    updated_at: "2023-08-16T14:20:00Z",
  },
  {
    transfer_id: 4,
    product_id: 104,
    variant_id: 1004,
    from_warehouse_id: 301,
    to_warehouse_id: 302,
    quantity: 25,
    status: "pending",
    tracking_number: null,
    expected_arrival: null,
    completed_at: null,
    created_by: 504,
    created_at: "2023-08-18T11:00:00Z",
    updated_at: "2023-08-18T11:00:00Z",
  },
  {
    transfer_id: 5,
    product_id: 105,
    variant_id: 1005,
    from_warehouse_id: 302,
    to_warehouse_id: 303,
    quantity: 35,
    status: "completed",
    tracking_number: "TRANS901234",
    expected_arrival: "2023-08-05T00:00:00Z",
    completed_at: "2023-08-04T16:45:00Z",
    created_by: 505,
    created_at: "2023-08-01T13:30:00Z",
    updated_at: "2023-08-04T16:45:00Z",
  },
  {
    transfer_id: 6,
    product_id: 106,
    variant_id: 1006,
    from_warehouse_id: 303,
    to_warehouse_id: 301,
    quantity: 20,
    status: "completed",
    tracking_number: "TRANS567890",
    expected_arrival: "2023-07-28T00:00:00Z",
    completed_at: "2023-07-27T10:15:00Z",
    created_by: 506,
    created_at: "2023-07-25T15:45:00Z",
    updated_at: "2023-07-27T10:15:00Z",
  },
  {
    transfer_id: 7,
    product_id: 107,
    variant_id: 1007,
    from_warehouse_id: 301,
    to_warehouse_id: 302,
    quantity: 60,
    status: "in_transit",
    tracking_number: "TRANS123789",
    expected_arrival: "2023-09-10T00:00:00Z",
    completed_at: null,
    created_by: 507,
    created_at: "2023-09-05T09:00:00Z",
    updated_at: "2023-09-06T11:30:00Z",
  },
  {
    transfer_id: 8,
    product_id: 108,
    variant_id: 1008,
    from_warehouse_id: 302,
    to_warehouse_id: 303,
    quantity: 15,
    status: "pending",
    tracking_number: null,
    expected_arrival: null,
    completed_at: null,
    created_by: 508,
    created_at: "2023-08-22T14:45:00Z",
    updated_at: "2023-08-22T14:45:00Z",
  },
  {
    transfer_id: 9,
    product_id: 109,
    variant_id: 1009,
    from_warehouse_id: 303,
    to_warehouse_id: 301,
    quantity: 45,
    status: "completed",
    tracking_number: "TRANS456123",
    expected_arrival: "2023-08-30T00:00:00Z",
    completed_at: "2023-08-29T13:20:00Z",
    created_by: 509,
    created_at: "2023-08-25T10:15:00Z",
    updated_at: "2023-08-29T13:20:00Z",
  },
  {
    transfer_id: 10,
    product_id: 110,
    variant_id: 1010,
    from_warehouse_id: 301,
    to_warehouse_id: 302,
    quantity: 30,
    status: "completed",
    tracking_number: "TRANS789456",
    expected_arrival: "2023-09-05T00:00:00Z",
    completed_at: "2023-09-04T14:10:00Z",
    created_by: 510,
    created_at: "2023-09-01T11:30:00Z",
    updated_at: "2023-09-04T14:10:00Z",
  },
];
