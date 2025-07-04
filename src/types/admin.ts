// Admin Panel Types
export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'super_admin';
  lastLogin?: string;
  isActive: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: AdminUser | null;
  token: string | null;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AdminRoute {
  path: string;
  label: string;
  icon: string;
  component: string;
  permissions?: string[];
}

export interface ContentEditor {
  id: string;
  type: 'navbar' | 'hero' | 'products' | 'dealers' | 'news' | 'footer';
  title: string;
  description: string;
  lastModified?: string;
  isDraft?: boolean;
}

export interface AdminDashboardStats {
  totalSlides: number;
  totalProducts: number;
  totalDealers: number;
  totalArticles: number;
  lastUpdate: string;
} 