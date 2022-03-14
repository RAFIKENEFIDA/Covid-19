import { Schema, model,ObjectId } from 'mongoose';



export interface IResponsable {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  centreId:ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IResponsable>(
  {
    nom: { type: String, required: true},
    prenom: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    
    centreId: 
    {
      type: Schema.Types.ObjectId,
      ref: "Center"
    },
    
  },
  { timestamps: true }
);

// 3. Create a Model.
export const Responsable = model<IResponsable>('Responsable', schema);
