import Form from "../../components/Form"
import { createClient } from '@/app/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Admin() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    if (user.user_metadata.role !== 'ADMIN') {
        redirect('/login')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Admin Page</h1>
            <Form />
        </div>
    );
}