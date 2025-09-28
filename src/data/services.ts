export interface ServiceCard {
  id: number,
  title: string,
  icon: string,
  description: string,
}

export const servicesData: ServiceCard[] = [
  {
    id: 1,
    title: "Contracte",
    icon: "src/assets/icons/contract.svg",
    description: "Redactăm și verificăm contracte adaptate nevoilor tale.",
  },
  {
    id: 2,
    title: "Creanțe",
    icon: "src/assets/icons/claim.svg",
    description: "Recuperăm rapid și corect datoriile tale.",
  },
  {
    id: 3,
    title: "Consultanță",
    icon: "src/assets/icons/consultant.svg",
    description: "Îți oferim răspunsuri clare și rapide la orice întrebare juridică.",
  },
  {
    id: 4,
    title: "Instanță",
    icon: "src/assets/icons/instance.svg",
    description: "Te reprezentăm profesionist în fața instanțelor de judecată.",
  },
  {
    id: 5,
    title: "Familie",
    icon: "src/assets/icons/family.svg",
    description: "Te sprijinim în cazuri de divorț, custodie sau partaj.",
  },
  {
    id: 6,
    title: "Muncă",
    icon: "src/assets/icons/job.svg",
    description: "Îți apărăm drepturile și interesele la locul de muncă.",
  },
  {
    id: 7,
    title: "Afaceri",
    icon: "src/assets/icons/business.svg",
    description: "Oferim asistență legală pentru firme și antreprenori.",
  },
  {
    id: 8,
    title: "Moșteniri",
    icon: "src/assets/icons/inheritance.svg",
    description: "Te ghidăm pas cu pas în procedurile de succesiune.",
  },
];