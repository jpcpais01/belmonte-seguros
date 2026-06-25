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

export type Partner = { name: string; logo: StaticImageData };

/** Seguradoras parceiras — logos em public/empresas. */
export const partners: Partner[] = [
  { name: "Fidelidade", logo: fidelidade },
  { name: "Generali", logo: generali },
  { name: "Allianz", logo: allianz },
  { name: "Ageas", logo: ageas },
  { name: "Tranquilidade", logo: tranquilidade },
  { name: "Zurich", logo: zurich },
  { name: "Victoria", logo: victoria },
  { name: "Médis", logo: medis },
  { name: "AdvanceCare", logo: advancecare },
  { name: "Real Vida Seguros", logo: realvida },
  { name: "AIG", logo: aig },
  { name: "HDI", logo: hdi },
  { name: "Hiscox", logo: hiscox },
  { name: "QBE", logo: qbe },
  { name: "ERGO", logo: ergo },
];
