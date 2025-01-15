import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bgyhaqfeyttajnvtumys.supabase.co'; // Mettez l'URL entre guillemets
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJneWhhcWZleXR0YWpudnR1bXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NjA5MTMsImV4cCI6MjA1MjUzNjkxM30.wEBpNrWT4UipAOX9NDCF1y5pyfJl_U4mqLy1W4uGn38'; // Mettez la clé anonyme entre guillemets

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
