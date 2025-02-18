import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import sharp from "sharp";

export async function POST(req: Request) {
  try {
    const { filePath } = await req.json();
    if (!filePath) return NextResponse.json({ error: "No se proporcionó una imagen" }, { status: 400 });

    const inputPath = path.join(process.cwd(), "public", filePath);
    const outputPath = inputPath.replace(/\.\w+$/, ".webp"); // Cambia la extensión a .webp

    if (!fs.existsSync(inputPath)) {
      return NextResponse.json({ error: "Archivo no encontrado" }, { status: 404 });
    }

    // Convierte la imagen solo si aún no existe en WebP
    if (!fs.existsSync(outputPath)) {
      await sharp(inputPath).toFormat("webp").toFile(outputPath);
    }

    const outputUrl = filePath.replace(/\.\w+$/, ".webp"); // URL de salida

    return NextResponse.json({ outputPath: outputUrl });
  } catch (error) {
    console.error("Error en la conversión de imagen:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
