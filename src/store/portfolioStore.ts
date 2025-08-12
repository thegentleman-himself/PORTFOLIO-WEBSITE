import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface PortfolioState {
  // Navigation state
  currentSection: string;
  isMenuOpen: boolean;
  
  // Theme and UI state
  theme: 'dark' | 'light';
  is3DMode: boolean;
  showParticles: boolean;
  
  // Interactive elements
  activeProject: string | null;
  activeSkill: string | null;
  isTyping: boolean;
  
  // Performance and loading
  isLoading: boolean;
  loadProgress: number;
  
  // Actions
  setCurrentSection: (section: string) => void;
  toggleMenu: () => void;
  setTheme: (theme: 'dark' | 'light') => void;
  toggle3DMode: () => void;
  toggleParticles: () => void;
  setActiveProject: (projectId: string | null) => void;
  setActiveSkill: (skillId: string | null) => void;
  setTyping: (isTyping: boolean) => void;
  setLoading: (loading: boolean) => void;
  setLoadProgress: (progress: number) => void;
  
  // Computed values
  getSectionProgress: (section: string) => number;
}

export const usePortfolioStore = create<PortfolioState>()(
  devtools(
    (set, get) => ({
      // Initial state
      currentSection: 'home',
      isMenuOpen: false,
      theme: 'dark',
      is3DMode: true,
      showParticles: true,
      activeProject: null,
      activeSkill: null,
      isTyping: false,
      isLoading: true,
      loadProgress: 0,
      
      // Actions
      setCurrentSection: (section: string) => 
        set({ currentSection: section }),
      
      toggleMenu: () => 
        set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      
      setTheme: (theme: 'dark' | 'light') => 
        set({ theme }),
      
      toggle3DMode: () => 
        set((state) => ({ is3DMode: !state.is3DMode })),
      
      toggleParticles: () => 
        set((state) => ({ showParticles: !state.showParticles })),
      
      setActiveProject: (projectId: string | null) => 
        set({ activeProject: projectId }),
      
      setActiveSkill: (skillId: string | null) => 
        set({ activeSkill: skillId }),
      
      setTyping: (isTyping: boolean) => 
        set({ isTyping }),
      
      setLoading: (loading: boolean) => 
        set({ isLoading: loading }),
      
      setLoadProgress: (progress: number) => 
        set({ loadProgress: progress }),
      
      // Computed values
      getSectionProgress: (section: string) => {
        const state = get();
        const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
        const currentIndex = sections.indexOf(state.currentSection);
        const targetIndex = sections.indexOf(section);
        
        if (targetIndex <= currentIndex) return 100;
        if (targetIndex === currentIndex + 1) return 50;
        return 0;
      },
    }),
    {
      name: 'portfolio-store',
    }
  )
);