// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://eeeqlbvndjcwkxuvqukm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlZXFsYnZuZGpjd2t4dXZxdWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyODAwMjgsImV4cCI6MjA2Mzg1NjAyOH0.3Wf2tnWQlZiopTIy9XteOB-9YuH8oGWY_Ibd8eLeyeA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);