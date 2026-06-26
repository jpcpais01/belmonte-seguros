import type { StaticImageData } from "next/image";
import advancecare from "@/public/empresas/advancecare.png";
import ageas from "@/public/empresas/ageas.png";
import aig from "@/public/empresas/aig.png";
import allianz from "@/public/empresas/allianz.png";
import ergo from "@/public/empresas/ergo.png";
import fidelidade from "@/public/empresas/fidelidade.png";
import generali from "@/public/empresas/generali.png";
import hdi from "@/public/empresas/hdi.png";
import hiscox from "@/public/empresas/hiscox.png";
import medis from "@/public/empresas/medis.png";
import qbe from "@/public/empresas/qbe.png";
import realvida from "@/public/empresas/realvida.png";
import tranquilidade from "@/public/empresas/tranquilidade.png";
import victoria from "@/public/empresas/victoria.png";
import zurich from "@/public/empresas/zurich.png";

export type Partner = { name: string; logo: StaticImageData; scale: number };

/**
 * Seguradoras parceiras - logos em public/empresas.
 * `scale` amplia logótipos com muito espaço em branco para um tamanho visual uniforme.
 */
export const partners: Partner[] = [
  { name: "Fidelidade", logo: fidelidade, scale: 1 },
  { name: "Generali", logo: generali, scale: 2 },
  { name: "Allianz", logo: allianz, scale: 2 },
  { name: "Ageas", logo: ageas, scale: 3 },
  { name: "Tranquilidade", logo: tranquilidade, scale: 2 },
  { name: "Zurich", logo: zurich, scale: 2 },
  { name: "Victoria", logo: victoria, scale: 2 },
  { name: "Médis", logo: medis, scale: 2 },
  { name: "AdvanceCare", logo: advancecare, scale: 2 },
  { name: "Real Vida Seguros", logo: realvida, scale: 2 },
  { name: "AIG", logo: aig, scale: 2 },
  { name: "HDI", logo: hdi, scale: 1.5 },
  { name: "Hiscox", logo: hiscox, scale: 2 },
  { name: "QBE", logo: qbe, scale: 3 },
  { name: "ERGO", logo: ergo, scale: 2 },
];
