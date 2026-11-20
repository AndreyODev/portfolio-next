import { Allura } from "next/font/google";

/** Caligrafia das seções da home. Importada só pela home para não ser pré-carregada em outras rotas. */
export const allura = Allura({ variable: "--font-allura", subsets: ["latin"], weight: "400" });
