import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://arkggztpluuwwodknieh.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFya2dnenRwbHV1d3dvZGtuaWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwODAxNjgsImV4cCI6MjAwODY1NjE2OH0.LpVnT-vCtxMXqlVrn2V2pQIJAXveHaMGF0RTl9GPSIY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
