import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.cadmo',
  appName: 'cadmo',
  webDir: 'www',
  plugins: {
    StatusBar: {
      backgroundColor: '#ffffff',
      style: 'DARK',
      overlaysWebView: false // <-- impedisce al contenuto di finire sotto la status bar
    }
  }
};

export default config;
