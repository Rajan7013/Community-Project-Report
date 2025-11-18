import { useState, useEffect } from 'react';
import { Download, X, Smartphone, Monitor } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect device type
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    const isAndroidDevice = /android/.test(userAgent);
    const isDesktopDevice = !isIOSDevice && !isAndroidDevice;

    setIsIOS(isIOSDevice);
    setIsAndroid(isAndroidDevice);
    setIsDesktop(isDesktopDevice);

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Handle app installed
    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);

      if (outcome === 'accepted') {
        setShowPrompt(false);
        setDeferredPrompt(null);
      }
    } catch (error) {
      console.error('Error during install:', error);
    }
  };

  const handleClose = () => {
    setShowPrompt(false);
  };

  // Show prompt only if there's a deferred prompt or on specific devices
  if (!showPrompt && !isIOS && !isAndroid) {
    return null;
  }

  return (
    <>
      {/* Desktop Install Prompt */}
      {isDesktop && showPrompt && deferredPrompt && (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Install App</h3>
                  <p className="text-xs opacity-90">Add to your desktop for quick access</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="flex-shrink-0 hover:bg-white/20 p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleInstallClick}
              className="w-full bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Install Now
            </button>
          </div>
        </div>
      )}

      {/* Mobile Install Prompt */}
      {(isAndroid || isIOS) && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-2xl p-4 shadow-lg">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Add to Home Screen</h3>
                  <p className="text-xs opacity-90">
                    {isIOS
                      ? 'Tap Share → Add to Home Screen'
                      : 'Install app on your home screen for quick access'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="flex-shrink-0 hover:bg-white/20 p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {isAndroid && deferredPrompt && (
              <button
                onClick={handleInstallClick}
                className="w-full bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Install Now
              </button>
            )}

            {isIOS && (
              <div className="text-xs opacity-90 bg-white/10 p-3 rounded-lg">
                <p className="font-semibold mb-2">Steps to install:</p>
                <ol className="space-y-1 ml-4 list-decimal">
                  <li>Tap the Share button (↗️)</li>
                  <li>Scroll and tap "Add to Home Screen"</li>
                  <li>Tap "Add" to confirm</li>
                </ol>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
