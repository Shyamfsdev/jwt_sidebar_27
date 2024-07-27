// src/info/dataFetcher.js
"use client"

import axios from 'axios';

export const fetchData = async () => {
  const token = 'FcgkcfLJQVxPkNNUNAvgISmwnMzsUqhzojnoPzDSiAvgQsFbBd';
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const params = {
    page: 1,
    items_per_page: 15,
    search_input: '',
    from_date: '',
    to_date: '',
    order_type: 'desc',
    order_field: 'created_date',
    active_status: '',
    product_id: '',
    batch_id: '',
    division_id: '',
  };

  try {
    const response = await axios.get(
      `http://192.168.29.192:8004/inventory_master_list?access_token=${token}&page=${params.page}&items_per_page=${params.search_input}&search_input=&from_date=&to_date=&order_type=${params.order_type}&order_field=${params.order_field}&active_status=&product_id=&batch_id=&division_id=`,
      { headers, params }
    );
    return response.data.data; // Adjust based on your API response structure
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};



