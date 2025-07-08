import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// PUBLIC_INTERFACE
@Injectable({ providedIn: 'root' })
/**
 * Service to provide a singleton Supabase client for the app.
 */
export class SupabaseService {
  private readonly supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://qgmcdylmdodofjpuuklq.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnbWNkeWxtZG9kb2ZqcHV1a2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjkzMzAsImV4cCI6MjA2Njc0NTMzMH0.Q3dbZtBZOZXwPL73kF1TR-asuum7vAcBMqbo-ihaN7k'
    );
  }

  /**
   * Get the Supabase client.
   */
  get client(): SupabaseClient {
    return this.supabase;
  }
}
