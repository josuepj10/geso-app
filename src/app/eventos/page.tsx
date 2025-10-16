import Image from "next/image"

export default function eventosPage() {
  return (
    <div>
      
      <div className="flex justify-center my-20">
        <Image src="/images/development.png" alt="Construyendo" width={660} height={660} priority />
      </div>

    </div>
  );
}