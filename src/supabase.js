import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zqoirptvncstfvwzefep.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxb2lycHR2bmNzdGZ2d3plZmVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3NTI5NTYsImV4cCI6MjA5ODMyODk1Nn0.b4LCLDOL5uCO2zjzMDJDIVdKeOrwm3LLsOh6IccnEGI'

export const supabase = createClient(supabaseUrl, supabaseKey)