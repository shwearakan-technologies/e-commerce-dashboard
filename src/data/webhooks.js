export default [
  {
    webhook_id: 1,
    name: "Order Created",
    endpoint_url: "https://erp.example.com/api/orders",
    event_type: "order.created",
    is_active: true,
    secret_key: "sec_abc123",
    headers: { "Content-Type": "application/json", "X-API-Key": "erp_key_123" },
    created_at: "2023-05-01T08:00:00Z",
    updated_at: "2023-05-15T08:00:00Z",
  },
  {
    webhook_id: 2,
    name: "Inventory Update",
    endpoint_url: "https://warehouse.example.com/api/inventory",
    event_type: "inventory.updated",
    is_active: true,
    secret_key: "sec_def456",
    headers: { "Content-Type": "application/json" },
    created_at: "2023-05-01T08:00:00Z",
    updated_at: "2023-05-10T08:00:00Z",
  },
  {
    webhook_id: 3,
    name: "Customer Sync",
    endpoint_url: "https://crm.example.com/api/customers",
    event_type: "customer.created",
    is_active: true,
    secret_key: "sec_ghi789",
    headers: { "Content-Type": "application/json", "X-CRM-Token": "token_123" },
    created_at: "2023-05-01T08:00:00Z",
    updated_at: "2023-05-05T08:00:00Z",
  },
  {
    webhook_id: 4,
    name: "Email Notification",
    endpoint_url: "https://notifications.example.com/api/webhook",
    event_type: "order.shipped",
    is_active: true,
    secret_key: "sec_jkl012",
    headers: { "Content-Type": "application/json" },
    created_at: "2023-05-01T08:00:00Z",
    updated_at: "2023-05-12T08:00:00Z",
  },
  {
    webhook_id: 5,
    name: "Accounting Export",
    endpoint_url: "https://accounting.example.com/api/transactions",
    event_type: "payment.received",
    is_active: true,
    secret_key: "sec_mno345",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer acc_token_123",
    },
    created_at: "2023-05-01T08:00:00Z",
    updated_at: "2023-05-08T08:00:00Z",
  },
  {
    webhook_id: 6,
    name: "Marketing Automation",
    endpoint_url: "https://marketing.example.com/api/events",
    event_type: "customer.activity",
    is_active: true,
    secret_key: "sec_pqr678",
    headers: { "Content-Type": "application/json" },
    created_at: "2023-05-01T08:00:00Z",
    updated_at: "2023-05-15T08:00:00Z",
  },
  {
    webhook_id: 7,
    name: "Support Ticket Created",
    endpoint_url: "https://support.example.com/api/tickets",
    event_type: "support.created",
    is_active: true,
    secret_key: "sec_stu901",
    headers: { "Content-Type": "application/json" },
    created_at: "2023-05-01T08:00:00Z",
    updated_at: "2023-05-03T08:00:00Z",
  },
  {
    webhook_id: 8,
    name: "Product Review",
    endpoint_url: "https://reviews.example.com/api/submit",
    event_type: "product.review",
    is_active: true,
    secret_key: "sec_vwx234",
    headers: { "Content-Type": "application/json" },
    created_at: "2023-05-01T08:00:00Z",
    updated_at: "2023-05-15T08:00:00Z",
  },
  {
    webhook_id: 9,
    name: "Shipping Notification",
    endpoint_url: "https://shipping.example.com/api/notify",
    event_type: "shipment.created",
    is_active: true,
    secret_key: "sec_yza567",
    headers: { "Content-Type": "application/json" },
    created_at: "2023-05-01T08:00:00Z",
    updated_at: "2023-05-15T08:00:00Z",
  },
  {
    webhook_id: 10,
    name: "Data Backup",
    endpoint_url: "https://backup.example.com/api/receive",
    event_type: "data.export",
    is_active: true,
    secret_key: "sec_bcd890",
    headers: {
      "Content-Type": "application/json",
      "X-Backup-Key": "backup_key_123",
    },
    created_at: "2023-05-01T08:00:00Z",
    updated_at: "2023-05-15T08:00:00Z",
  },
];
