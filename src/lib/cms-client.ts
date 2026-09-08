type ApiEnvelope<T> = { success: boolean; data: T };

const CMS_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://cms.upsense.co.id';

// ponytail: throw saat network/HTTP gagal supaya ISR tetap menayangkan halaman lama, bukan render kosong.
// HTTP 404 atau success:false -> null (pemanggil memperlakukannya sebagai not-found).
export async function cmsGet<T>(path: string): Promise<T | null> {
  const response = await fetch(`${CMS_URL}${path}`, { signal: AbortSignal.timeout(8000) });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`CMS ${path} -> HTTP ${response.status}`);
  const payload = await response.json() as ApiEnvelope<T>;
  return typeof payload.success === 'boolean' ? (payload.success ? payload.data : null) : payload as T;
}
