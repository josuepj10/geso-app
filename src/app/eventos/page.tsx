import Image from "next/image"

export default function eventosPage() {
  return (
    <div>
      
      <div className="flex justify-center mt-20 mb-42">
        <Image src="/images/eventosimage.webp" alt="Construyendo" width={750} height={500} priority />
      </div>

    </div>
  );
}