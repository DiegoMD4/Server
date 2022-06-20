import { createNewContactanos, deleteContactanos,
getContactanos, getContactanosByID, updateConctatanos } from "../controllers/contactanos.controller";
import { createNewPostulate } from "../controllers/postulate.controller";
 
 export const queries = {
    getAllContactanos: 'SELECT * FROM [DB_CEI].[dbo].TCNT',
    addNewContactanos: 'INSERT INTO TCNT (nombre, email, celular, comentario, fecha_registro) VALUES (@nombre, @email, @celular, @comentario, @fecha_registro)',
    getContactanosByID: 'SELECT * FROM [DB_CEI].[dbo].TCNT WHERE id_contacto = @id_contacto',
    deleteContactanos:  'DELETE FROM [DB_CEI].[dbo].TCNT WHERE id_contacto = @id_contacto',
    updateContactanos:  'UPDATE TCNT SET nombre=@nombre, email=@email, celular=@celular, fecha_registro=@fecha_registro WHERE id_contacto = @id_contacto'
 }