const host = `${process.env.REACT_APP_API_HOST}/api/admin`;

export default {
  login: () => [host, 'auth/login/'].join('/'),
  clients: () => [host, 'clients/'].join('/'),
  kitchens: () => [host, 'kitchens/'].join('/'),
  kitchenDetails: (id) => [host, `kitchens/${id}/`].join('/'),
  products: () => [host, 'products/'].join('/'),
  product: (id) => [host, `products/${id}/`].join('/'),
  productsCategory: () => [host, 'products/categories/'].join('/'),
  riders: () => [host, 'riders/'].join('/'),
  orderDetails: (id) => [host, `orders/${id}/`].join('/'),
  clientDetails: (id) => [host, `clients/${id}/`].join('/'),
  orders: () => [host, 'orders/active/'].join('/'),
  cancelOrder: (id) => [host, `orders/${id}/cancel/`].join('/'),
  admins: () => [host, 'admins/'].join('/'),
  deleteAdmin: (id) => [host, `admins/${id}/`].join('/'),
  editAdmin: (id) => [host, `admins/${id}/`].join('/'),
  acceptOrder: (id) => [host, `orders/${id}/accept/`].join('/'),
  adminPermissions: () => [host, 'admins/permissions/'].join('/'),
  riderDetails: (id) => [host, `riders/${id}/`].join('/'),
  riderDeposit: (id) => [host, `riders/${id}/deposit/`].join('/'),
};
