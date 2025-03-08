import { siHtml5, siTailwindcss, siJavascript, siCss3, siTypescript, siReact, siNextdotjs, siGit, siGithub, siFigma, siNodedotjs, siExpress, siMongodb, siRedux, siReactquery, siSupabase } from 'simple-icons';

export const HtmlIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siHtml5;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
};

export const CssIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siCss3;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
}

export const TailwindCSSIcon = ({ width = 24, height = 24, className = "" }) =>  {
  const { path, hex } = siTailwindcss;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
}

export const JavaScriptIcon = ({ width = 24, height = 24, className = "" }) =>  {
  const { path, hex } = siJavascript;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
}

export const TypeScriptIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siTypescript;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
}

export const ReactJSIcon = ({ width = 24, height = 24, className = "" }) =>  {
  const { path, hex } = siReact;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
}

export const NextJSIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siNextdotjs;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      style={{
        filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.7))"
      }}
    >
      {/* Background/outline that will make it stand out */}
      <path 
        d={path} 
        fill="rgba(255, 255, 255, 0.3)"
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth="0.2"
        style={{ transform: "scale(1.05)" }}
      />
      
      {/* Original icon with original color */}
      <path d={path} fill={`#${hex}`} />
    </svg>
  );
};

export const GitIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siGit;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
}

export const GithubIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siGithub;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      style={{
        filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.7))"
      }}
    >
      {/* Background/outline that will make it stand out */}
      <path 
        d={path} 
        fill="rgba(255, 255, 255, 0.3)"
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth="0.2"
        style={{ transform: "scale(1.05)" }}
      />
      
      {/* Original icon with original color */}
      <path d={path} fill={`#${hex}`} />
    </svg>
  );
}
export const FigmaIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siFigma;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
}

export const NodeJSIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siNodedotjs;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
}

export const ExpressJSIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siExpress;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      style={{
        filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.7))"
      }}
    >
      {/* Background/outline that will make it stand out */}
      <path 
        d={path} 
        fill="rgba(255, 255, 255, 0.3)"
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth="0.2"
        style={{ transform: "scale(1.05)" }}
      />
      
      {/* Original icon with original color */}
      <path d={path} fill={`#${hex}`} />
    </svg>
  );
};

export const MongoDBIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siMongodb;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
};

export const ReduxToolkitIcon = ({ width = 24, height = 24, className = "" }) =>{
  const { path, hex } = siRedux;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
};

export const TanstackQueryIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siReactquery;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
};;

export const ReactNativeIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siReact;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
};

export const SupabaseIcon = ({ width = 24, height = 24, className = "" }) => {
  const { path, hex } = siSupabase;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      fill={`#${hex}`} 
    >
      <path d={path} />
    </svg>
  );
};