import Airtable from "airtable";

const API_KEY = "key5jsdadoBUKgDGO";
const BASE_KEY = "appcoZRLf2easod4B";

export const base = new Airtable({ apiKey: API_KEY }).base(BASE_KEY);
