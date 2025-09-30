// lib/api.ts
import axios from "axios";

const base = process.env.NEXT_PUBLIC_CMS_URL;

export async function fetchPublic(path: string, params: Record<string, any> = {}) {
  if (!base) {
    const error = new Error("ENV MISSING: NEXT_PUBLIC_CMS_URL");
    console.error("ENV MISSING: NEXT_PUBLIC_CMS_URL");
    throw error;
  }
  
  const url = `${base}${path}`;
  console.log("Fetching from CMS:", url, "with params:", params);
  
  try {
    const res = await axios.get(url, { 
      params, 
      timeout: 10000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    console.log("CMS Response:", res.status, res.data);
    return res.data;
  } catch (err: any) {
    const errorMessage = err?.response?.data?.message || err?.message || "Unknown error";
    console.error("CMS FETCH ERROR:", url, errorMessage);
    throw new Error(`CMS 연결 실패: ${errorMessage}`);
  }
}

// Private API fetch (with token)
export async function fetchPrivate(path: string, params: Record<string, any> = {}) {
  const base = process.env.NEXT_PUBLIC_CMS_URL;
  const token = process.env.CMS_API_TOKEN;
  
  if (!base || !token) {
    console.error("ENV MISSING: NEXT_PUBLIC_CMS_URL or CMS_API_TOKEN");
    return null;
  }
  
  const url = `${base}${path}`;
  try {
    const res = await axios.get(url, { 
      params, 
      timeout: 10000,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (err: any) {
    console.error("CMS PRIVATE FETCH ERROR:", url, err?.message || err);
    return null;
  }
}
