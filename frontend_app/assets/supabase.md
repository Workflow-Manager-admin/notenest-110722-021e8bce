# Supabase Integration in NoteNest (Angular Frontend)

The frontend integrates directly with Supabase using `@supabase/supabase-js`. The configuration is in `SupabaseService`, which creates a singleton client using the supplied `SUPABASE_URL` and `SUPABASE_KEY`.

**Connection:**
- Supabase URL: https://qgmcdylmdodofjpuuklq.supabase.co
- Supabase Key: Provided in service (anonymous/public key).
- The Supabase client is provided via Angular DI and can be used in any other service/component. Do not hardcode credentials elsewhere.

**Tables:**
- `notes`: Each note has `id`, `title`, `content`, `tags` (string[]), `created_at`, and `updated_at`.
- `tags`: Each tag has `id`, `name`.

**Usage Example:**
```ts
import { SupabaseService } from './services/supabase.service';

constructor(private supabaseService: SupabaseService) {}

const client = this.supabaseService.client;
// See NotesService and TagService for detailed CRUD.
```
**Security:** Do NOT expose admin keys in frontend. Only use the supplied anon key.

**Where to update config:**  
If project env changes, update `supabase.service.ts`.
