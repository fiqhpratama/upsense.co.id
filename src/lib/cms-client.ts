type ApiEnvelope<T> = { success: boolean; data: T };

const CMS_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://cms.upsense.co.id';

export async function cmsGet<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${CMS_URL}${path}`, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) return null;

    const payload = await response.json() as ApiEnvelope<T>;
    return typeof payload.success === 'boolean' ? (payload.success ? payload.data : null) : payload as T;
  } catch {
    return null;
  }
}
