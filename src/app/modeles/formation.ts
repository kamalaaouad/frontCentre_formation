export interface Formation {
  id?: number;
  libelle:string
  description: string;
  prerequis:string;
  dateD:Date;
  dateF: Date;
  catalogue:string;
  formateur:string;
  nbrelimit:number;
}
