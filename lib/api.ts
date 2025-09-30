// lib/api.ts
import axios from "axios";

const base = process.env.NEXT_PUBLIC_CMS_URL;

export async function fetchPublic(path: string, params: Record<string, any> = {}) {
  if (!base) {
    console.error("ENV MISSING: NEXT_PUBLIC_CMS_URL");
    return null;
  }
  const url = `${base}${path}`;
  try {
    const res = await axios.get(url, { params, timeout: 10000 });
    return res.data;
  } catch (err: any) {
    console.error("CMS FETCH ERROR:", url, err?.message || err);
    return null; // 실패 시 null 반환(페이지가 부드럽게 빈 상태로 표시)
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
