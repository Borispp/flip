/**
 * @file A point for all requests
 */

import axios from 'axios';
const api = require('./api.json');

const headers = { headers: { 'Content-Type': 'application/json' } };

/**
 * Get stats
 */
export const getStats = () => axios.get(api.stats, {...headers });

/**
 * Get dice
 */
export const getDiceList = ({offset= 0, limit = 50}) => axios.get(api.dice, {...headers, params: { limit, offset }});

/**
 * Get summary
 */
export const getSummary = account_address => axios.get(api.summary, {...headers, params: { account_address }});
