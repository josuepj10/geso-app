import Image from "next/image"

export default function eventosPage() {
  return (
    <div>
      
      <div className="flex justify-center my-20">
        <Image src="/images/development.png" alt="Construyendo" width={1000} height={1000} priority />
      </div>

    </div>
  );
}