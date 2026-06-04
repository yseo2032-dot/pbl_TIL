export interface Database {
  public: {
    Tables: {
      lions: {
        Row: {
          id: string;
          name: string;
          part: string;
          skills: string[];
          summary: string;
          detail: string;
          email: string;
          phone: string;
          site: string;
          comment: string;
          image: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          part: string;
          skills?: string[];
          summary?: string;
          detail?: string;
          email?: string;
          phone?: string;
          site?: string;
          comment?: string;
          image?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["lions"]["Insert"]>;
      };
    };
  };
}

export type LionRow = Database["public"]["Tables"]["lions"]["Row"];
export type LionInsert = Database["public"]["Tables"]["lions"]["Insert"];
