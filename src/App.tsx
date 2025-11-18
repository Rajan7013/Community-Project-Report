import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { TeamSection } from './components/TeamSection';
import { ProjectOverview } from './components/ProjectOverview';
import { WeeklyLogs } from './components/WeeklyLogs';
import { SurveyResults } from './components/SurveyResults';
import { PhotoGallery } from './components/PhotoGallery';
import { Recommendations } from './components/Recommendations';
import { ResourceHub } from './components/ResourceHub';
import { PWAInstall } from './components/PWAInstall';
import { LanguageProvider } from './contexts/LanguageContext';
import { Home as HomeIcon, Users, BookOpen, Calendar, BarChart3, Images, Lightbulb, Download, Menu, X, BookMarked } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'resources', label: 'Resources', icon: BookMarked },
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'activities', label: 'Activities', icon: Calendar },
    { id: 'survey', label: 'Survey', icon: BarChart3 },
    { id: 'gallery', label: 'Gallery', icon: Images },
    { id: 'recommendations', label: 'Recommendations', icon: Lightbulb },
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'resources':
        return (
          <LanguageProvider>
            <ResourceHub />
          </LanguageProvider>
        );
      case 'team':
        return <TeamSection />;
      case 'overview':
        return <ProjectOverview />;
      case 'activities':
        return <WeeklyLogs />;
      case 'survey':
        return <SurveyResults />;
      case 'gallery':
        return <PhotoGallery />;
      case 'recommendations':
        return <Recommendations />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ backgroundColor: '#f0fdf4', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ background: 'linear-gradient(to right, #15803d, #059669, #0369a1)', color: 'white', position: 'sticky', top: 0, zIndex: 50, display: isMobile ? 'none' : 'block' }} className="shadow-lg">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', paddingBottom: '1rem' }}>
            {/* Logo and Branding */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                🐄
              </div>
              <div style={{ display: 'block' }}>
                <h1 style={{ fontSize: '1.125rem', fontWeight: 'bold', margin: 0, lineHeight: 1.2 }}>CSP - Grami Pashu Sahayak</h1>
                <p style={{ fontSize: '0.75rem', margin: 0, opacity: 0.9 }}>Community Service Project</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'center', marginLeft: '2rem', marginRight: '2rem' }}>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    style={{
                      padding: '0.5rem 0.75rem',
                      borderRadius: '0.5rem',
                      fontWeight: 500,
                      border: 'none',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: isActive ? 'white' : 'rgba(255,255,255,0.2)',
                      color: isActive ? '#15803d' : 'white',
                      transition: 'all 0.3s',
                      boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                    }}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
              <a
                href="/CSV Final Report.pdf"
                download
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#22c55e',
                  color: 'white',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  display: isMobile ? 'none' : 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22c55e'}
              >
                <Download size={16} />
                Download
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  display: 'none',
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'white',
                  transition: 'background-color 0.3s'
                }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav style={{ display: 'none', paddingBottom: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', paddingTop: '1rem' }}>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      style={{
                        padding: '0.5rem 0.75rem',
                        borderRadius: '0.5rem',
                        fontWeight: 500,
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: isActive ? 'white' : 'rgba(255,255,255,0.2)',
                        color: isActive ? '#15803d' : 'white',
                        transition: 'all 0.3s'
                      }}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content with proper mobile padding */}
      <main style={{ paddingBottom: isMobile ? '120px' : '0' }} className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {renderSection()}
      </main>

      {/* Mobile Bottom Navigation - Only visible on mobile */}
      {isMobile && (
      <nav style={{ 
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(to right, #15b679, #059669, #0369a1)',
        borderTop: '2px solid #059669',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        zIndex: 40
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center', 
          padding: '0.35rem 0.15rem',
          maxWidth: '100%',
          width: '100%',
          gap: '0.15rem'
        }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentSection(item.id);
                  window.scrollTo(0, 0);
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.15rem',
                  padding: '0.35rem 0.25rem',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  color: isActive ? '#fbbf24' : 'white',
                  transition: 'all 0.2s',
                  borderRadius: '0.5rem',
                  fontSize: '0.55rem',
                  fontWeight: isActive ? '600' : '500',
                  flex: 1,
                  minWidth: '50px',
                  maxWidth: '60px'
                }}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span style={{ 
                  textAlign: 'center', 
                  lineHeight: '1',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '100%',
                  padding: '0 2px'
                }}>
                  {item.label.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
      )}

      {/* Footer - Only show on home page in mobile view */}
      {(!isMobile || currentSection === 'home') && (
      <footer className="bg-gray-900 text-white mt-10 md:mt-10 mt-0 md:pb-0 pb-0">
        <div className="container mx-auto px-3 sm:px-4 py-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="mb-2 text-sm font-semibold">College Information</h3>
              <p className="text-gray-300 text-sm">
                Sri Venkateswara College of Engineering & Technology (Autonomous)
                <br />
                R.V.S. Nagar, Murukambattu
                <br />
                Chittoor - 517127, Andhra Pradesh
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold">Department</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Computer Science & Engineering
                <br />
                Artificial Intelligence & Machine Learning
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold">Project Location</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nandanoor Village, Chittoor
                <br />
                GPS: 13°13'10.2" N, 79°6'11.8872" E
                <br />
                Duration: 2025-2026
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-700 text-center text-gray-400 text-xs sm:text-sm">
            <p>© 2025 SVCET - Community Service Project | Submitted: November 18, 2025</p>
          </div>
        </div>
      </footer>
      )}

      {/* PWA Install Prompt */}
      <PWAInstall />
    </div>
  );
}