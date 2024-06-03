
export interface IUsuarios {
  id: number;
  usuario: string;
  apellido: string;
  dni: string;
  email: string;
  role: string;
  activo: boolean
  createdAt: Date;
  updatedAt: Date;
}