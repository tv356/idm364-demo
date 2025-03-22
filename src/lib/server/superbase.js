import {createClient } from '@superbase/superbase-js';
const superbase_url = import.meta.env.VITE_SUPERBASE_URL;
const superbase_anon_key = import.meta.env.VITE_SUPERBASE_KEY;

export const superbase = createClient(superbase_url, superbase_anon_key);