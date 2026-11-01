import Image, { type ImageProps } from "next/image";

const SUPABASE_PUBLIC_PREFIX = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/`
  : "https://litfvtkcjutrughpcxzr.supabase.co/storage/v1/object/public/";

// next/image pentru imagini din baza de date. Imaginile din Supabase Storage sunt optimizate;
// o adresă din altă sursă (necunoscută în next.config) e afișată neoptimizat, nu dă eroare.
export default function RemoteImage(props: ImageProps) {
  const { src, ...rest } = props;
  const optimizable =
    typeof src !== "string" ||
    src.startsWith("/") ||
    src.startsWith(SUPABASE_PUBLIC_PREFIX);

  return <Image src={src} unoptimized={!optimizable || rest.unoptimized} {...rest} />;
}
