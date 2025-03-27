import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  orderPrice: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  orderItem: {
    type: [orderItemSchema],
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'DELIVERED', 'CANCELLED'],
    default: 'PENDING',
  },
});

export const order = mongoose.model('order', orderSchema);
