import { createClient } from '@supabase/supabase-js';

// Remplacez par les informations de votre projet Supabase
const supabaseUrl = 'https://bgyhaqfeyttajnvtumys.supabase.co'; // Entrez l'URL correcte
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJneWhhcWZleXR0YWpudnR1bXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NjA5MTMsImV4cCI6MjA1MjUzNjkxM30.wEBpNrWT4UipAOX9NDCF1y5pyfJl_U4mqLy1W4uGn38'; // Entrez votre clé publique anonyme

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
