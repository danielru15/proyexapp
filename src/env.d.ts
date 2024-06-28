interface Window {
  particlesInit(Engine): Promise<void>;
  particlesLoaded(Container): void;
  }

  interface ImportMetaEnv {
    readonly MAILERSEND_API_KEY: string;

    // más variables de entorno...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }