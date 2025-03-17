import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);


export async function insertUser(id: string, firstName: string, lastName: string) {
  const { data, error } = await supabaseAdmin.from('Users').insert([
    { id, firstName, lastName }
  ]);
  if (error) {
    console.error('Error inserting user:', error.message);
  }
  return data;
}
