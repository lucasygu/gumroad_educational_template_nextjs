export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string | null
          featured_image_url: string | null
          status: 'draft' | 'published' | 'scheduled'
          published_at: string | null
          created_at: string
          updated_at: string
          author_id: string | null
          view_count: number
          meta_description: string | null
          meta_keywords: string[] | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          excerpt?: string | null
          featured_image_url?: string | null
          status?: 'draft' | 'published' | 'scheduled'
          published_at?: string | null
          created_at?: string
          updated_at?: string
          author_id?: string | null
          view_count?: number
          meta_description?: string | null
          meta_keywords?: string[] | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string | null
          featured_image_url?: string | null
          status?: 'draft' | 'published' | 'scheduled'
          published_at?: string | null
          created_at?: string
          updated_at?: string
          author_id?: string | null
          view_count?: number
          meta_description?: string | null
          meta_keywords?: string[] | null
        }
      }
      tags: {
        Row: {
          id: string
          name: string
          slug: string
          color: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          color?: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          color?: string
          description?: string | null
          created_at?: string
        }
      }
      post_tags: {
        Row: {
          id: string
          post_id: string
          tag_id: string
        }
        Insert: {
          id?: string
          post_id: string
          tag_id: string
        }
        Update: {
          id?: string
          post_id?: string
          tag_id?: string
        }
      }
      comments: {
        Row: {
          id: string
          post_id: string
          parent_id: string | null
          author_name: string
          author_email: string
          content: string
          approved: boolean
          created_at: string
        }
        Insert: {
          id?: string
          post_id: string
          parent_id?: string | null
          author_name: string
          author_email: string
          content: string
          approved?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          post_id?: string
          parent_id?: string | null
          author_name?: string
          author_email?: string
          content?: string
          approved?: boolean
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}